/* =============================================================
   helpers.js — Shared utility functions
   ============================================================= */

/**
 * Format a number as Nigerian Naira currency.
 * @param {number} amount
 * @returns {string} e.g. "₦75,000"
 */
export const formatPrice = (amount) => {
  if (typeof amount !== 'number') return '₦0'
  return `₦${amount.toLocaleString('en-NG')}`
}

/**
 * Generate a unique payment reference for Paystack.
 * Format: ETH_<timestamp>_<random4digits>
 * @returns {string}
 */
export const generateReference = () => {
  const timestamp = Date.now()
  const random = Math.floor(1000 + Math.random() * 9000)
  return `ETH_${timestamp}_${random}`
}

/**
 * Format an ISO date string to a human-readable date.
 * @param {string} dateStr — ISO date string e.g. "2026-06-10"
 * @returns {string} e.g. "June 10, 2026"
 */
export const formatDate = (dateStr) => {
  if (!dateStr) return 'TBD'
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Validate an email address format.
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Store payment session data temporarily in sessionStorage.
 * Cleared after the Success page reads it.
 * @param {Object} sessionData
 */
export const storePaymentSession = (sessionData) => {
  try {
    sessionStorage.setItem('eth_payment_session', JSON.stringify(sessionData))
  } catch {
    // sessionStorage unavailable — fail silently
  }
}

/**
 * Read and clear payment session from sessionStorage.
 * @returns {Object|null}
 */
export const readAndClearPaymentSession = () => {
  try {
    const raw = sessionStorage.getItem('eth_payment_session')
    if (!raw) return null
    sessionStorage.removeItem('eth_payment_session')
    return JSON.parse(raw)
  } catch {
    return null
  }
}
