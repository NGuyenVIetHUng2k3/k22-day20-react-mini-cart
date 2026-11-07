function Header({ totalQuantity }) {
  return (
    <header className="header">
      <div className="header-inner">
        <a className="brand" href="#" aria-label="MiniShop trang chủ">
          MiniShop
        </a>
        <div className="cart-icon" aria-label={`${totalQuantity} sản phẩm trong giỏ`}>
          <span aria-hidden="true">🛒</span>
          <span className="cart-badge">{totalQuantity}</span>
        </div>
      </div>
    </header>
  )
}

export default Header
