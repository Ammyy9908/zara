import { galleryImages } from '../data.js'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll.js'

function GalleryImage({ image }) {
  const ref = useRevealOnScroll()

  return (
    <div ref={ref} className="grid-image reveal">
      <img src={image.src} alt={image.alt} loading="lazy" />
    </div>
  )
}

export default function Collections() {
  return (
    <section className="section-four" id="collections">
      <div className="container">
        <h2 className="section-header">Explore Collections</h2>
        <div className="section-grid">
          {galleryImages.map((image) => (
            <GalleryImage key={image.src} image={image} />
          ))}
        </div>
      </div>
    </section>
  )
}
