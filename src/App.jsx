import { useState } from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import NewArrivals from './components/NewArrivals.jsx'
import Collections from './components/Collections.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [cartCount] = useState(0)

  return (
    <>
      <Hero cartCount={cartCount} />
      <About />
      <NewArrivals />
      <Collections />
      <Footer />
    </>
  )
}
