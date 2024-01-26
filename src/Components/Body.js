import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [FilterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText,setSearchText] = useState("");

  console.log("body render")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      console.log(json);
      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurants(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return listOfRestaurants.length === 0 ? (<Shimmer />  ): (
    <div className="body">
      <div className="filter">
        <div className="search">
                <input type="text" className="search-box" value={searchText} 
                      onChange={(e) =>{
                            setSearchText(e.target.value);}}  
                />
                  <button onClick={() =>{
                       console.log(searchText)
                     const filteredRestaurant =  listOfRestaurants.filter((res)=> res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));

                      setFilterRestaurants(filteredRestaurant);

                  }}>Search</button>
        </div>


        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Filter Restaurant
        </button>
        <div className="res-container">
          {FilterRestaurants?.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
