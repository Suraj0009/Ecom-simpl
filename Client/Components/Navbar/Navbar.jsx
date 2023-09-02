import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import Person4Icon from '@mui/icons-material/Person4';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link} from 'react-router-dom';
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>   
         
      <div className="wrapper">
          
      <div className="left"> 
      <div className="item"> <img src="\img\en.png" alt=" " /> 
      <KeyboardArrowDownIcon/>
      
      </div>
        
        <div className="item">
          <span>USD</span>
          <KeyboardArrowDownIcon/>
        </div>
        
        <div className="item">
        <Link className='link' to='/products/1'>Men</Link >
          
        </div>
        
        <div className="item">
          <Link className='link' to='/products/2'>Women</Link >
          
        </div>
        
        <div className="item">
        <Link className='link' to='/products/3'>Children</Link >
          
        </div>
        
        <div className="item">
        <Link className='link' to='/products/4  '>Accessories</Link >
         
        </div>
        
        
       </div>

        <div className="center"> 
        
        <Link className='link' to='/'>Rawat's-Collection</Link >

         </div>
        <div className="right"> </div>
               
        <div className="item">
        <Link className='link' to='/'>Homepage</Link >
          
        </div>
        
        <div className="item">
          <Link className='link'>About</Link>
          
        </div>
        
        <div className="item">
          <Link className='link'>Contact</Link >
          
        </div>
        
        <div className="item">
          <Link className='link'>Stores</Link >
          
        </div>
        
        <div className="icons">
          
        <SearchIcon/>
         
    
          
          <Person4Icon/>
           
      
          <FavoriteIcon/>
           
           <div>
          <ShoppingCartIcon/>

          <span>0</span>
          </div>
          </div>
          
          
          




      </div>
    </div>
  )
}

export default Navbar
