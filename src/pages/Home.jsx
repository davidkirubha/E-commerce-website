import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p>WELCOME TO SHOPZONE</p>
          <h1>Discover Your Style</h1>
          <h2>Shop the Latest Trends</h2>
          <Link to="/products" className="shop-btn">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Products</h2>
        <p>Explore our latest collection</p>

        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;