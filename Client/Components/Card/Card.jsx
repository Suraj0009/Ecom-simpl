import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  const upload = import.meta.env.VITE_REACT_APP_API_UPLOAD;

  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              `${upload}${item.attributes?.img?.data?.attributes?.url}`
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              `${upload}${item.attributes?.img2?.data?.attributes?.url}`
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    attributes: PropTypes.shape({
      isNew: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            url: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      img2: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            url: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      // Add PropTypes for other attributes as needed
    }).isRequired,
    id: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
  }).isRequired,
};

export default Card;
