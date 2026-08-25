import { useEffect, useRef } from 'react'
import Header from './Header.jsx'

export default function Hero({ cartCount }) {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const onScroll = () => {
      hero.style.transform = `translateY(${window.pageYOffset * 0.5}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      hero.style.transform = ''
    }
  }, [])

  return (
    <section className="section-top" id="top">
      <Header cartCount={cartCount} />
      <div className="top-section-hero" ref={heroRef}>
        <div className="top-section-content">
          <h1>New Season Collection</h1>
          <h2>Bringing fashion back to its original and classic form</h2>
          <p>
            Discover timeless elegance reimagined for the modern era. Our curated
            collection celebrates the artistry of design and the beauty of
            simplicity.
          </p>
        </div>
      </div>
    </section>
  )
}
