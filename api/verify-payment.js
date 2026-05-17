import axios from 'axios'

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY

const bootcampPrices = {
  1: 150000,
  2: 150000,
  3: 150000,
  4: 150000,
  5: 150000,
  6: 150000,
  7: 250000
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { reference } = req.body

  if (!reference) {
    return res.status(400).json({ error: 'Reference is required' })
  }

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`
        }
      }
    )

    const { status, amount, currency, customer, metadata } = response.data.data

    if (status !== 'success') {
      return res.status(400).json({ error: 'Payment not successful' })
    }

    const bootcampId = metadata?.bootcamp_id
    const expectedAmount = bootcampId ? bootcampPrices[bootcampId] * 100 : null

    if (expectedAmount && amount !== expectedAmount) {
      return res.status(400).json({ error: 'Amount mismatch' })
    }

    res.json({
      valid: true,
      reference,
      amount: amount / 100,
      currency,
      customer: customer?.email,
      bootcampId,
      bootcampTitle: metadata?.bootcamp_title
    })
  } catch (error) {
    console.error('Payment verification failed:', error.message)
    res.status(500).json({ error: 'Failed to verify payment' })
  }
}