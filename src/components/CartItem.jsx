function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const formattedPrice = new Intl.NumberFormat('vi-VN').format(item.price)
  const formattedSubtotal = new Intl.NumberFormat('vi-VN').format(
    item.price * item.quantity,
  )

  return (
    <article className="cart-item">
      <img className="cart-item-image" src={item.image} alt={item.name} />
      <div className="cart-item-content">
        <h3>{item.name}</h3>
        <p className="cart-unit-price">Đơn giá: {formattedPrice}đ</p>
        <div className="cart-item-actions">
          <div className="quantity-controls">
            <button
              type="button"
              onClick={() => onDecrease(item.id)}
              disabled={item.quantity === 1}
              aria-label={`Giảm số lượng ${item.name}`}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              type="button"
              onClick={() => onIncrease(item.id)}
              aria-label={`Tăng số lượng ${item.name}`}
            >
              +
            </button>
          </div>
          <button
            className="remove-button"
            type="button"
            onClick={() => onRemove(item.id)}
          >
            Xóa
          </button>
        </div>
        <strong className="cart-subtotal">{formattedSubtotal}đ</strong>
      </div>
    </article>
  )
}

export default CartItem
