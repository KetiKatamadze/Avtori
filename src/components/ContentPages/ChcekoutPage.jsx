import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Layout from "./Layout";
import "./checkout.css";

function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card"); // default card
  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [paypalLink, setPaypalLink] = useState("");

  const [touched, setTouched] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const errors = Object.fromEntries(
    Object.entries(formData).map(([key, value]) => [key, value.trim() === ""])
  );
  const isFormValid = Object.values(errors).every((e) => !e);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCardChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsSubmitting(true);
    setSubmittedData({ ...formData, paymentMethod, cardData, paypalLink });
  };

  const handlePayNow = () => {
    clearCart();
    setSubmittedData(null);
    setIsSubmitting(false);
    setFormData({
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    });
    setCardData({
      cardNumber: "",
      expiry: "",
      cvv: "",
    });
    setPaypalLink("");
  };

  return (
    <Layout>
      <div className="checkout-page">
        <div className="checkout-form">
          <h2>Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <label className="shipping-label">
              Full Name
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.fullName && errors.fullName ? "error" : ""}
                required
              />
            </label>
            <label className="shipping-label">
              Address
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.address && errors.address ? "error" : ""}
                required
              />
            </label>
            <label className="shipping-label">
              City
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.city && errors.city ? "error" : ""}
                required
              />
            </label>
            <label className="shipping-label">
              Postal Code
              <input
                type="text"
                name="postalCode"
                placeholder="Enter postal code"
                value={formData.postalCode}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  touched.postalCode && errors.postalCode ? "error" : ""
                }
                required
              />
            </label>
            <label className="shipping-label">
              Country
              <input
                type="text"
                name="country"
                placeholder="Enter your country"
                value={formData.country}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.country && errors.country ? "error" : ""}
                required
              />
            </label>

            {/* Payment Section */}
            <div className="payment-section">
              <h3>Payment Method</h3>

              <label className="payment-option">
                <input
                  type="radio"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Credit/Debit Card
              </label>

              {paymentMethod === "card" && (
                <div className="card-details">
                  <input
                    type="text"
                    placeholder="Card Number"
                    maxLength={16}
                    pattern="\d{16}"
                    title="Card number must be 16 digits"
                    name="cardNumber"
                    value={cardData.cardNumber}
                    onChange={handleCardChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="MMYY"
                    maxLength={4}
                    pattern="\d{4}"
                    title="Enter expiration date in MMYY format"
                    name="expiry"
                    value={cardData.expiry}
                    onChange={handleCardChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    maxLength={3}
                    pattern="\d{3}"
                    title="CVV must be 3 digits"
                    name="cvv"
                    value={cardData.cvv}
                    onChange={handleCardChange}
                    required
                  />
                </div>
              )}

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                PayPal
              </label>
              {paymentMethod === "paypal" && (
                <div className="paypal-details">
                  <input
                    type="url"
                    placeholder="Enter your PayPal link"
                    value={paypalLink}
                    onChange={(e) => setPaypalLink(e.target.value)}
                    required
                  />
                </div>
              )}

              <label className="payment-option">
                <input
                  type="radio"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>
            </div>

            <button type="submit" disabled={!isFormValid || isSubmitting}>
              Submit
            </button>
          </form>
        </div>

        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="summary-item">
                {item.name} x {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
            {submittedData && (
              <li className="summary-item">
                <strong>Shipping Info:</strong>
                <div>{submittedData.fullName}</div>
                <div>{submittedData.address}</div>
                <div>
                  {submittedData.city}, {submittedData.postalCode}
                </div>
                <div>{submittedData.country}</div>
                <div>
                  <strong>Payment:</strong> {submittedData.paymentMethod}
                </div>
                {submittedData.paymentMethod === "paypal" && (
                  <div>
                    <strong>PayPal Link:</strong> {submittedData.paypalLink}
                  </div>
                )}
              </li>
            )}
          </ul>
          <h3>Total: ${totalPrice}</h3>
          <button
            className="pay-now-btn"
            disabled={!submittedData}
            onClick={handlePayNow}
          >
            Pay Now
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default CheckoutPage;
