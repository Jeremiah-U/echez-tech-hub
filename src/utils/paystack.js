import { generateReference, storePaymentSession } from './helpers.js'

const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const initiatePayment = ({ bootcamp, email, onSuccess, onClose, onError }) => {
  if (typeof window.PaystackPop === 'undefined') {
    if (onError) {
      onError({ message: 'Payment system could not be loaded. Please refresh and try again.' })
    }
    return
  }

  if (!bootcamp?.price || typeof bootcamp.price !== 'number' || bootcamp.price <= 0) {
    if (onError) {
      onError({ message: 'Invalid course price. Please try again.' })
    }
    return
  }

  if (!email?.trim()) {
    if (onError) {
      onError({ message: 'Please provide a valid email address.' })
    }
    return
  }

  const reference = generateReference()

  const handler = window.PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email: email,
    amount: bootcamp.price * 100,
    currency: 'NGN',
    ref: reference,
    channels: ['card'],
    metadata: {
      bootcamp_id: bootcamp.id,
      bootcamp_title: bootcamp.title,
      custom_fields: [
        {
          display_name: 'Bootcamp',
          variable_name: 'bootcamp',
          value: bootcamp.title,
        },
      ],
    },
    callback: (response) => {
      const expectedAmount = bootcamp.price * 100

      if (response.status !== 'success' || !response.reference) {
        if (onError) {
          onError({ message: 'Payment could not be verified. Please contact support.' })
        }
        return
      }

      fetch(`${API_URL}/api/verify-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference: response.reference })
      })
        .then(res => res.json())
        .then(verifyData => {
          if (!verifyData.valid) {
            if (onError) {
              onError({ message: verifyData.error || 'Payment verification failed.' })
            }
            return
          }

          if (verifyData.amount !== bootcamp.price) {
            if (onError) {
              onError({ message: 'Payment amount mismatch. Please contact support with reference: ' + response.reference })
            }
            return
          }

          const sessionData = {
            bootcampId: bootcamp.id,
            title: bootcamp.title,
            amount: bootcamp.price,
            currency: 'NGN',
            reference: response.reference,
            status: 'success',
          }
          storePaymentSession(sessionData)

          if (onSuccess) onSuccess(sessionData)
        })
        .catch(() => {
          if (onError) {
            onError({ message: 'Payment verification failed. Please contact support.' })
          }
        })
    },
    onClose: () => {
      if (onClose) onClose()
    },
  })

  handler.openIframe()
}