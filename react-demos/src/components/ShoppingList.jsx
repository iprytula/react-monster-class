import { useState } from "react";

const ShoppingList = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    if (name && quantity) {
      const existingProduct = products.find((p) => p.name === name);
      if (existingProduct) {
        setProducts(
          products.map((p) =>
            p.name === name
              ? {
                  ...p,
                  quantity: String(Number(p.quantity) + Number(quantity)),
                }
              : p,
          ),
        );
      } else {
        setProducts([...products, { name, quantity }]);
      }
      e.target.reset();
    }
  };

  return (
    <>
      <form onSubmit={addProduct}>
        <input type="text" name="name" />
        <br />
        <input type="number" name="quantity" />
        <br />
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.quantity}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShoppingList;
