import Categories from "../../../Components/Categories/Categories"
import Contacts from "../../../Components/Contact/Contacts"
import FeaturedProducts from "../../../Components/FeaturedProducts/FeaturedProducts"
import Slider from "../../../Components/Slider/Slider"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <FeaturedProducts type={"Featured Products"}/>
      <Categories/>
      <FeaturedProducts type={"Trending products"}/>
      
    <Contacts/>
   </div>
    
  )
}

export default Home
