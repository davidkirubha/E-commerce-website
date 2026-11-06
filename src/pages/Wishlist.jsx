
import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  function toggleWishlist(product) {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  }

  return (
    <div className="wishlist-page">
      <h1>My Wishlist</h1>
      <p>Your favourite products</p>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />

            <button onClick={() => toggleWishlist(product)}>
              {wishlist.some((item) => item.id === product.id)
                ? "❤️ Remove from Wishlist"
                : "♡ Add to Wishlist"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
