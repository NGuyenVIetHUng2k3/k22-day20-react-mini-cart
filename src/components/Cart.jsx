import CartItem from './CartItem'

function Cart({ cartItems, onIncrease, onDecrease, onRemove }) {
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )
  const formattedTotal = new Intl.NumberFormat('vi-VN').format(totalPrice)

  return (
    <aside className="cart">
      <h2>Giỏ hàng</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <span className="empty-cart-icon" aria-hidden="true">🛍️</span>
          <p>Giỏ hàng đang trống</p>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}

      <div className="cart-summary">
        <div>
          <span>Tổng số lượng</span>
          <strong>{totalQuantity}</strong>
        </div>
        <div>
          <span>Tổng tiền</span>
          <strong>{formattedTotal}đ</strong>
        </div>
      </div>
    </aside>
  )
}

export default Cart
