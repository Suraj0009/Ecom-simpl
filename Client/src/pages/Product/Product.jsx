import { useState } from "react";
import "./product.scss"
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Product = () => {
   
  const[selectedImg,setselectedImg]=useState(0);
  const[quantity,setQuantity]=useState(1);

  const images = [
    "https://images.pexels.com/photos/17403707/pexels-photo-17403707/free-photo-of-young-man-in-a-trendy-outfit-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17403708/pexels-photo-17403708/free-photo-of-young-man-in-a-trendy-outfit-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  

  return (
    <div className="product">

<div className="left">
  <div className="images">
    <img src={images[0]} alt="" onClick={() => setselectedImg(0)} />
    <img src={images[1]} alt="" onClick={() => setselectedImg(1)} />
  </div>
</div>

      <div className="mainImg">
        <img src={images[selectedImg]} alt="" />
      </div>
      <div className="right">
             
             <h1>Cargo Jeans</h1>
             <span className="price"> $200</span>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam, harum qui assumenda cum tempore voluptatum ducimus eos p
              erspiciatis mollitia natus impedit officia modi atque sit porro libero quaerat similique! </p>        

              <div className="quantity">
                <button onClick={ ()=>setQuantity((prev) => (prev===1? 1: prev-1 ) )  }>-</button>
                   {quantity}
                <button onClick={ ()=>setQuantity ((prev) => prev+1) }>+</button>
                  
              </div>

              <button className="add"> 
               
               <AddShoppingCartIcon/>Add to cart
               
              </button>
              <div className="links">
                <div className="item"> <FavoriteIcon/>ADD TO WISHLIST  </div>
                <div className="item"> <BalanceIcon/> COMPARE </div>
              </div>
              <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
      
      
    </div>
  )
}

export default Product
