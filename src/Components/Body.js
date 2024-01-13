import RestaurantCard from "./Components/RestaurantCard";


const Body = () =>{
    return (
        <div className="body">
            <div className="search">
                    Search
            </div>
            <div className="res-container">
                <RestaurantCard key={restaurant.data.id}
                 resData={restaurant} />
            </div>
        </div>
    )
}

export default Body;