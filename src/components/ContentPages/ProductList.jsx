import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import tattoo1 from "../../assets/tattoo1.jpg";
import tattoo2 from "../../assets/tattoo2.jpg";
import tattoo3 from "../../assets/tattoo3.jpg";
import tattoo4 from "../../assets/tattoo4.jpg";
import tattoo5 from "../../assets/tattoo5.jpg";
import tattoo6 from "../../assets/tattoo6.jpg";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          image: tattoo1,
          name: "PEPELA",
          price: 50,
          description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          image: tattoo2,
          name: "KOBRA",
          price: 60,
          description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          image: tattoo3,
          name: "BAKAKI",
          price: 40,
          description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          image: tattoo4,
          name: "NIANGI",
          price: 80,
          description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          image: tattoo5,
          name: "GVELI",
          price: 70,
          description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          image: tattoo6,
          name: "JIRAPI",
          price: 90,
          description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ];
      setProducts(fetchedProducts);
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <p className="loading">Loading products...</p>;
  }

  if (products.length === 0) {
    return <p className="no-products">No products available.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((p, index) => (
        <ProductCard
          key={index}
          image={p.image}
          name={p.name}
          price={p.price}
          description={p.description}
        />
      ))}
    </div>
  );
}

export default ProductList;
