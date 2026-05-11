import Button from "../inputs/Button.jsx";

const Brands = ({onClickHandler}) => {
  return (
    <div className="brands-picker">
      <Button
        text="All Brands"
        value="all"
        type="button"
        onClickHandler={onClickHandler}
      />
      <Button
        text="Adidas"
        value="Adidas"
        type="button"
        onClickHandler={onClickHandler}
      />
      <Button
        text="Nike"
        value="Nike"
        type="button"
        onClickHandler={onClickHandler}
      />
      <Button
        text="Puma"
        value="Puma"
        type="button"
        onClickHandler={onClickHandler}
      />
      <Button
        text="Vans"
        value="Vans"
        type="button"
        onClickHandler={onClickHandler}
      />
    </div>
  );
};

export default Brands;
