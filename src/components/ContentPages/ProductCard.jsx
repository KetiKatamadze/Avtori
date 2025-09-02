import React, { useState } from "react";
import "./ProductCard.css";
import { useCart } from "../../context/CartContext";

function ProductCard({ image, name, price, description }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ image, name, price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1000); 
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-content">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
      </div>
      <button
        className={`add-button ${added ? "added" : ""}`}
        onClick={handleAddToCart}
        disabled={added}
      >
        {added ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
