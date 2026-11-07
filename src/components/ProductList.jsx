import ProductCard from './ProductCard'

function ProductList({ products, onAddToCart }) {
  return (
    <section className="products-section">
      <div className="section-heading">
        <p className="eyebrow">Bộ sưu tập mới</p>
        <h1>Sản phẩm nổi bật</h1>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductList
