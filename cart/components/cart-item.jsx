const CartItem = ({ product, onRemove, onAddQuantity, onRemoveQuantity }) => {
  return (
    <div className="product-card">
      <div className="product-container">
        <div className="product-item-top">
          <img
            className="product-img"
            src={product.image}
            alt={product.title}
          />
          <h4 className="product-title">{product.title}</h4>
        </div>

        <div className="product-item-buttons">
          <div className="product-quantity-controls">
            <button
              className="product-btn"
              disabled={product.quantity === 1}
              onClick={() => onRemoveQuantity(product.id)}
            >
              -
            </button>
            <span>{product.quantity}</span>
            <button
              className="product-btn"
              onClick={() => onAddQuantity(product.id)}
            >
              +
            </button>
          </div>
          <button
            className="product-remove-btn"
            onClick={() => onRemove(product.id)}
          >
            Remove
          </button>
        </div>

        <div className="product-details">
          <div className="product-price-quantity">
            <span className="product-price">
              <b>Price:</b> ${product.price}
            </span>
            <span className="product-quantity">x{product.quantity}</span>
          </div>
          <div className="product-total-price">
            <b>Total:</b> ${(product.price * product.quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
