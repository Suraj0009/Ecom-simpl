import React from 'react'
import "./cart.scss"
import DeleteIcon from '@mui/icons-material/Delete';
const Cart = () => {
  const data = [
    {
      id: 1,
      title: "Jeans rocky",
      img: "https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldprice: "$100",
      price: "$80",
      desc:"pants",
    },
    {
      id: 2,
      title: "Specs",
      img: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldprice: "$120",
      price: "$90",
      desc:"pants",
    },
  ];
  return (
    <div className='cart'>
     
      <h1> IN CART</h1>
      {data?.map(item=>(
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />

          <div className="details">
          <h1>{item.title}</h1>
          <p> {item.desc?.substring(0,100)}</p>
          <div className="price">
            1 x ${item.price}
          </div>
          </div>
          <DeleteIcon className='delete'/>
           </div>
      ))}
      
      <div className="total">
        <span>SUBTOTAL </span>
        <span>$123 </span>
      </div>
      <button> PROCEED TO CHECKOUT</button>
      <span className='reset'>Reset Cart</span>



    </div>
  )
}

export default Cart
