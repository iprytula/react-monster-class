import Radio from "../inputs/Radio";

const Prices = (onChangeHandler) => {
  return (
    <section className="sidebar-section">
      <h2>Categories</h2>
      <ul>
        <li>
          <Radio
            name="price"
            value="0-50"
            label="$0-50"
            onChange={onChangeHandler}
            checked={true}
          />
        </li>
        <li>
          <Radio
            name="price"
            value="50-100"
            label="$50-100"
            onChange={onChangeHandler}
          />
        </li>
        <li>
          <Radio
            name="price"
            value="100-150"
            label="$100-150"
            onChange={onChangeHandler}
          />
        </li>
        <li>
          <Radio
            name="price"
            value="150+"
            label="Over $150"
            onChange={onChangeHandler}
          />
        </li>
      </ul>
    </section>
  );
};

export default Prices;
