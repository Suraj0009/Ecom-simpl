/* eslint-disable no-undef */

import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./featuredproducs.scss";
import axios from "axios";

const FeaturedProducts = ({ type }) => {

  const [data, setData ]= useState([]);
  
  const apiURL = import.meta.env.VITE_REACT_APP_API_URL;
  const apiToken = import.meta.env.VITE_REACT_APP_API_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      try {
        

        const res= await axios.get(apiURL + '/products?populate=*', {
          headers: { Authorization: "Bearer " + apiToken },
        });
        setData(res.data.data);

        
      } catch (err) {
        console.error(err);
      }
    };
   
    fetchData();
  }, []);
console.log(data);
  return (
    <div className="featuredproducts">
      <div className="top">
        <h1>{type} </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
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
