const Product = ({
  img,
  title,
  reviews,
  prevPrice,
  newPrice,
  company,
  color,
  category,
  rating,
}) => {
  return (
    <div className="product">
      <img src={img} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-reviews">{reviews}</p>
      <p className="product-prices">
        <span className="prev-price">${prevPrice}</span>
        <span className="new-price">${newPrice}</span>
      </p>
      <p className="product-company">Company: {company}</p>
      <p className="product-color">Color: {color}</p>
      <p className="product-category">Category: {category}</p>
      <p className="product-rating">Rating: {rating} stars</p>
    </div>
  );
};

export default Product;
