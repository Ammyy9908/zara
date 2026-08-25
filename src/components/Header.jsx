import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const navLinks = [
  { href: '#new-arrivals', label: 'New Arrivals' },
  { href: '#collections', label: 'Collections' },
  { href: '#about', label: 'About' },
]

export default function Header({ cartCount }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={scrolled ? 'scrolled' : undefined}>
      <a href="#top" aria-label="Zara Home">
        <Logo />
      </a>
      <button
        type="button"
        className="mobile-menu-btn"
        aria-label={menuOpen ? 'Close menu' : 'Toggle menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>
      <nav>
        <ul className={menuOpen ? 'active' : undefined}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#cart" className="cart-btn" onClick={handleNavClick}>
              Cart ({cartCount})
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
