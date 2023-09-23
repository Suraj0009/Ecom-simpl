
import { useParams } from "react-router-dom"
import List  from "../../../Components/List/List"; 
import { useState } from "react";
import './Products.scss'  
const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(2000);
  const[sort,setSort] =useState(null);

  return (
    <div className="products">
      <div className="left">

        <div className="filter">
          <h2> Product Categories</h2>
          <div className="inputItem">
          <label htmlFor="1">Shoes</label>
            <input type="checkbox" id="1" value={1} />
            </div>
            <div className="inputItem">
          <label htmlFor="1">Shirt</label>
            <input type="checkbox" id="1" value={1} />
            </div>
            <div className="inputItem">
          <label htmlFor="1">Jeans</label>
            <input type="checkbox" id="1" value={1} />
            </div>


        </div>
        <div className="filter">
        <h2> Filter by price</h2>
          <div className="inputItem">
            <span>0</span><input type="range" min={0} max={2000} id="" onChange={(e)=>setMaxPrice(e.target.value)} /><span>{maxPrice}</span>
          </div>

        </div>
        <div className="filter">
        <h2> Sort by</h2>
        <div className="inputItem">
          <label htmlFor="asc">price(lowest first)</label>
          <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort('asc')} />
        </div>
        <div className="inputItem">
          <label htmlFor="desc">price(highest first)</label>
          <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort('asc') }/>
        </div>
      </div>
     
      </div>

      <div className="right">

      <img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="catImg" />

       <List catId={catId} maxPrice={maxPrice} sort={sort}/>

      </div>
      
    </div>
  )
}

export default Products
