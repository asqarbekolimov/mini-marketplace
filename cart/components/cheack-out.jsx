function CheackOut({ totalPrice }) {
  return (
    <div className="checkout">
      <div className="checkout-total">
        Total Price:{" "}
        <span className="checkout-total-amount">${totalPrice.toFixed(2)}</span>{" "}
      </div>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
}

export default CheackOut;
