const colorOptions = [
  {
    id: "all",
    label: "All",
    gradient: "linear-gradient(135deg, #f65ab0, #1464ef)",
  },
  {
    id: "black",
    label: "Black",
    gradient: "linear-gradient(135deg, #000000, #4b5563)",
  },
  {
    id: "blue",
    label: "Blue",
    gradient: "linear-gradient(135deg, #60a5fa, #1d4ed8)",
  },
  {
    id: "red",
    label: "Red",
    gradient: "linear-gradient(135deg, #f87171, #b91c1c)",
  },
  {
    id: "green",
    label: "Green",
    gradient: "linear-gradient(135deg, #34d399, #047857)",
  },
  {
    id: "white",
    label: "White",
    gradient: "linear-gradient(135deg, #ffffff, #d1d5db)",
  },
];

const Colors = ({ onChangeHandler }) => {
  return (
    <section className="sidebar-section">
      <h2>Colors</h2>
      <ul>
        {colorOptions.map(({ id, label, gradient }) => (
          <li key={id}>
            <div className="radio-container">
              <input
                type="radio"
                id={`color-${id}`}
                name="color"
                value={id}
                onChange={onChangeHandler}
              />
              <label htmlFor={`color-${id}`} className="radio-label color-label">
                <span
                  style={{
                    display: "inline-block",
                    width: "16px",
                    height: "16px",
                    background: gradient,
                    marginRight: "8px",
                    borderRadius: "50%",
                    verticalAlign: "middle",
                  }}
                />
                {label}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Colors;
