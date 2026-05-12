import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

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
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const stars = Array.from({ length: fullStars }, (_, index) => (
    <IoMdStar key={index} />
  ));

  if (hasHalfStar) {
    stars.push(<IoMdStarHalf key="half" />);
  }

  const totalStars = fullStars + (hasHalfStar ? 1 : 0);
  const outlineStars = Math.max(0, 5 - totalStars);
  for (let i = 0; i < outlineStars; i += 1) {
    stars.push(<IoMdStarOutline key={`outline-${i}`} />);
  }

  return (
    <div className="product">
      <img src={img} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <div className="product-reviews">{reviews}</div>
      <div className="product-prices">
        <div className="prev-price">Old price: {prevPrice}$</div>
        <div className="new-price"><strong>New price: {newPrice}$</strong></div>
      </div>
      <div className="product-company">Company: {company}</div>
      <div className="product-color">Color: {color}</div>
      <div className="product-category">Category: {category}</div>
      <div className="product-rating">Rating: {stars}</div>
    </div>
  );
};

export default Product;
