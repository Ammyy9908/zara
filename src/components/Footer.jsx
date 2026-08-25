import { useState } from 'react'
import Logo from './Logo.jsx'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle')
  const authorName = import.meta.env.VITE_AUTHOR_NAME

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = email.trim()

    if (!value) {
      setError('Please enter your email address')
      setStatus('idle')
      return
    }

    if (!EMAIL_PATTERN.test(value)) {
      setError('Please enter a valid email address')
      setStatus('idle')
      return
    }

    setError('')
    setStatus('success')
    setEmail('')

    window.setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-logo">
          <a href="#top" aria-label="Zara Home">
            <Logo />
          </a>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <div className="footer-links">
            <div className="footer-links-header">About Us</div>
            <div className="links">
              <a href="#about">Our Story</a>
              <a href="#about">Careers</a>
              <a href="#about">Terms & Privacy</a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-links-header">Customer Service</div>
            <div className="links">
              <a href="#about">FAQ</a>
              <a href="#about">Contact</a>
              <a href="#about">Shipping & Returns</a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-links-header">Follow Us</div>
            <div className="links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                Pinterest
              </a>
            </div>
          </div>

          <form className="footer-subscription-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="email">Stay updated with ZARA</label>
            <div className="form-control">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                aria-label="Email address"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'email-error' : undefined}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (error) setError('')
                }}
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className={status === 'success' ? 'is-success' : undefined}
              >
                {status === 'success' ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>
            {error ? (
              <p id="email-error" className="form-error" role="alert">
                {error}
              </p>
            ) : null}
          </form>
        </nav>
      </div>
      {authorName ? (
        <p className="site-credit">Designed by {authorName}</p>
      ) : null}
    </footer>
  )
}
