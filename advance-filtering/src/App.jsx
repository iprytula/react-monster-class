import data from "./db/data.js";
import Categories from "./components/Sidebar/Categories.jsx";
import Prices from "./components/Sidebar/Prices.jsx";
import Colors from "./components/Sidebar/Colors.jsx";
import Product from "./components/Main/Product.jsx";
import Brands from "./components/Main/Brands.jsx";
import { useState, useMemo } from "react";
import "./App.css";
import SearchInput from "./components/inputs/SearchInput.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = [...data];

    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (selectedPrice !== "all") {
      const [min, max] = selectedPrice.split("-").map(Number);
      filtered = filtered.filter((product) => {
        if (max) {
          return product.newPrice >= min && product.newPrice <= max;
        } else {
          return product.newPrice >= min;
        }
      });
    }

    if (selectedColor !== "all") {
      filtered = filtered.filter((product) => product.color === selectedColor);
    }

    if (selectedBrand !== "all") {
      filtered = filtered.filter((product) => product.company === selectedBrand);
    }

    if (searchTerm.trim() !== "") {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(lowerSearchTerm)
      );
    }

    return filtered;
  }, [selectedCategory, selectedPrice, selectedColor, selectedBrand, searchTerm]);

  const categoryChangeHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setSelectedPrice(e.target.value);
  };

  const colorChangeHandler = (e) => {
    setSelectedColor(e.target.value);
  };

  const brandChangeHandler = (e) => {
    setSelectedBrand(e.target.value);
  }

  const searchChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="app-container">
      <aside className="sidebar">
        <Categories onChangeHandler={categoryChangeHandler} />
        <Prices onChangeHandler={priceChangeHandler} />
        <Colors onChangeHandler={colorChangeHandler} />
      </aside>
      <main>
        <SearchInput onChangeHandler={searchChangeHandler} />
        <Brands onChangeHandler={brandChangeHandler} />
        <div className="products-container">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product, i) => <Product key={i} {...product} />)
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
