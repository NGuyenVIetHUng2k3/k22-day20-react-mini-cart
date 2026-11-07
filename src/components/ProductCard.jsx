function ProductCard({ product, onAddToCart }) {
  const formattedPrice = new Intl.NumberFormat('vi-VN').format(product.price)

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          className="product-image"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-price">{formattedPrice}đ</p>
        <button
          className="add-button"
          type="button"
          onClick={() => onAddToCart(product)}
        >
          Thêm vào giỏ
        </button>
      </div>
    </article>
  )
}

export default ProductCard
