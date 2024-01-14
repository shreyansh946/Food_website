import React from "react";
import RestaurantCard from "./RestaurantCard";
import resDataList from "../Utils/mockData";

const Body = () => {
  return (
   <div className="body" >
    <div className="search">
        <div className="res-container">
            {
                resDataList.map((restaurant) =>{
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                })
            }
        </div>
      
      </div>
    </div>
  );
};

export default Body;
