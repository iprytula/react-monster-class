function Radio({ name, value, label, onChange }) {
  return (
    <div className="radio-container">
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={value} className="radio-label">
        {label}
      </label>
    </div>
  );
}

export default Radio;
