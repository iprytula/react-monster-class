const Button = ({ text, value, type, onClickHandler }) => {
  return (
    <button className="btn" value={value} type={type} onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default Button;
