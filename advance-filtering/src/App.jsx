import products from "./db/data.js";
import Categories from "./components/Sidebar/Categories.jsx";
import Prices from "./components/Sidebar/Prices.jsx";
import Colors from "./components/Sidebar/Colors.jsx";
import Product from "./components/Main/Product.jsx";
import Brands from "./components/Main/Brands.jsx";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <Categories />
        <Prices />
        <Colors />
      </aside>
      <main>
        <Brands />
        <div className="products-container">
          {products && products.length > 0 ? (
            products.map((product) => <Product key={product.id} {...product} />)
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
