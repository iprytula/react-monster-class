import Button from "../inputs/Button.jsx";

const Brands = ({ onChangeHandler }) => {
  const setActiveButton = (brand) => {
    const buttons = document.querySelectorAll(".brands-picker button");
    buttons.forEach((button) => {
      if (button.value === brand) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setActiveButton(brand);
    onChangeHandler(e);
  };

  return (
    <div className="brands-picker">
      <Button
        text="All Brands"
        value="all"
        type="button"
        onClickHandler={handleBrandChange}
      />
      <Button
        text="Adidas"
        value="Adidas"
        type="button"
        onClickHandler={handleBrandChange}
      />
      <Button
        text="Nike"
        value="Nike"
        type="button"
        onClickHandler={handleBrandChange}
      />
      <Button
        text="Puma"
        value="Puma"
        type="button"
        onClickHandler={handleBrandChange}
      />
      <Button
        text="Vans"
        value="Vans"
        type="button"
        onClickHandler={handleBrandChange}
      />
    </div>
  );
};

export default Brands;
