import { useState } from 'react'

const FAQ = ({ faqs }) => {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  if (!faqs || faqs.length === 0) return null

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <div className="container faq__inner">
        <h2 id="faq-heading" className="faq__title">
          Frequently Asked Questions
        </h2>
        <p className="faq__subtitle">
          Everything you need to know before joining a bootcamp.
        </p>

        <ul className="faq__list" role="list">
          {faqs.map((item) => {
            const isOpen = openId === item.id
            return (
              <li key={item.id} className="faq__item">
                <button
                  id={`faq-btn-${item.id}`}
                  className="faq__question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() => toggle(item.id)}
                >
                  <span>{item.question}</span>
                  <span className={`faq__icon ${isOpen ? 'faq__icon--open' : ''}`} aria-hidden="true">
                    &#43;
                  </span>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={`faq__answer ${isOpen ? 'faq__answer--open' : ''}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                >
                  <p className="faq__answer-text">{item.answer}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default FAQ
