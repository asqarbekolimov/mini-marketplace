import CartItem from "./cart-item";
import CheackOut from "./cheack-out";

function CarList({ products, onRemove, onAddQuantity, onRemoveQuantity }) {
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  if (products.length === 0) {
    return <div>Your cart is empty</div>;
  }
  return (
    <>
      {products.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          onRemove={onRemove}
          onAddQuantity={onAddQuantity}
          onRemoveQuantity={onRemoveQuantity}
        />
      ))}
      <CheackOut totalPrice={totalPrice} />
    </>
  );
}

export default CarList;
