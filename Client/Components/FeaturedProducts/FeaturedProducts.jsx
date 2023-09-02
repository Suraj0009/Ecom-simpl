
import Card from "../Card/Card";
import "./featuredproducs.scss";

const FeaturedProducts = ({type }) => {
  const data = [
    {
      id: 1,
      title: "Jeans rocky",
      img: "https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldprice: "$100",
      price: "$80"
    },
    {
      id: 2,
      title: "Specs",
      img: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldprice: "$120",
      price: "$90"
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1923109/pexels-photo-1923109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coats",
      oldprice: "$80",
      price: "$60"
    },
   { id: 4,
    title: "Blazer",
    img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    oldprice: "$80",
    price: "$60"
  }
  ];

  return (
    <div className="featuredproducts">
      <div className="top">
        <h1>{type} </h1>
        
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />

        ))}


      </div>
    </div>
  );
};

export default FeaturedProducts;
