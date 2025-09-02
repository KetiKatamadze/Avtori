import { useCart } from "../../context/CartContext";
import Layout from "./Layout";
import "./cart.css";
import { NavLink } from "react-router-dom";

function CartPage() {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <Layout>
        <p>Your cart is empty.</p>
        <NavLink to="/products" className="back-to-shop">
          Back to Shop
        </NavLink>
      </Layout>
    );
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Layout>
      <div className="cart-page">
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} width={80} />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-actions">
                  <button onClick={() => decreaseQuantity(item.name)}>-</button>
                  <button onClick={() => increaseQuantity(item.name)}>+</button>
                </div>
                <p>Subtotal: ${item.price * item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="cart-total">Total: ${totalPrice}</h3>
        <NavLink to="/checkout" className="checkout-button">
          Go to Checkout
        </NavLink>
      </div>
    </Layout>
  );
}

export default CartPage;
