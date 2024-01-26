import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{

    const [resInfo,setresInfo] = useState(null);

    useEffect(() =>{
            fetchMenu();
    },[]);

    const fetchMenu = async () =>{

        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
    
          const json = await data.json();
    
          console.log(json);
          setresInfo(json.data);

          
    };

    const {cuisine} =   resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        return (resInfo === null) ? <Shimmer /> : (
        <div className="menu">
            
                <h1>{cuisine}</h1>

                <ul>
                    <li>Biryani</li>
                    <li>Burgers</li>
                    <li>Diet Coke</li>
                </ul>
        </div>
    )
}


export default RestaurantMenu;