import Categories from "../../../Components/Categories/Categories"
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
    </div>
    
  )
}

export default Home
