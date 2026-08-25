import { products } from '../data.js'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll.js'

function ProductCard({ product }) {
  const ref = useRevealOnScroll()

  return (
    <article
      ref={ref}
      className={`section-card reveal ${product.className}`.trim()}
    >
      <div className="section-card-image">
        <img src={product.image} alt={product.alt} loading="lazy" />
      </div>
      <div className="card-body">
        <h3>{product.title}</h3>
        <a href={product.href} aria-label={`Shop ${product.title} collection`}>
          Shop the Collection
        </a>
      </div>
    </article>
  )
}

export default function NewArrivals() {
  return (
    <section className="section-three" id="new-arrivals">
      <div className="section-container cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
