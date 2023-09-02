
import "./Card.scss";
import { Link } from 'react-router-dom';

const Card = ({ item }) => { // Accept 'item' as a prop
  return (
    <Link to={`/product/${item.id}`}>
      <div className='card'>
       
        <div className="image">
          <img src={item.img} alt="" className='mainimage' />
          <img src={item.img} alt="" className='secondimage' />
        
          </div>
          <h3>{item.title}</h3>
          <div className="prices">
            <h2>{item.oldprice}</h2>
            <h2>{item.price}</h2>
          </div>
        </div>
      
    </Link>
  );
}

export default Card;
