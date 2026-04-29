/* =============================================================
   paystack.js — Paystack inline payment integration
   Uses only the public key from environment variables.
   Never handles card data directly (AGENTS.md security rules).
   ============================================================= */

import { generateReference, storePaymentSession } from './helpers.js'

const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY

/**
 * Trigger a Paystack inline payment popup.
 *
 * @param {Object} params
 * @param {Object} params.bootcamp   — The full bootcamp object
 * @param {string} params.email      — Customer email
 * @param {Function} params.onSuccess — Callback on successful payment
 * @param {Function} params.onClose   — Callback when user closes the popup
 * @param {Function} params.onError   — Callback on payment error
 */
export const initiatePayment = ({ bootcamp, email, onSuccess, onClose, onError }) => {
  if (typeof window.PaystackPop === 'undefined') {
    if (onError) {
      onError({ message: 'Payment system could not be loaded. Please refresh and try again.' })
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
    },
    onClose: () => {
      if (onClose) onClose()
    },
  })

  handler.openIframe()
}
