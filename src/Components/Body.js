import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() =>{
      console.log("useEffect Called");
  },[]);

    const fetchData = async () =>{
      const data = await fetch();

      const  json = await data.json();

      return json;
    }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredRestaurants);
            console.log(filteredRestaurants);
          }}
        >
          Top Filter Restaurant
        </button>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
