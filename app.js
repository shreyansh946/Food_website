import React from "react";
import ReactDOM  from "react-dom/client";

//React Element
/**
 *  Header:
 *  -logo
 *  -navbar
 * Body:
 *  -search
 *  -RestaurantContainer
 *  -RestaurantCard
 * Footer:
 *  -copyright
 *  -links
 *  -address
 *  -contact
 */
const Header = () =>{
    return (
        <div className="header">
                 <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_ulieTqHiPHn4AENW1oq01BtzsBWBCwJ2Q&usqp=CAU" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>home</li>
                    <li>about us</li>
                    <li>contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const resObject = {
    data : {
        
    }
}


const RestaurantCard = ({resName, cuisine}) =>{
    return (
        <div className="res-card">
                
                <img className="res-logo"
                 alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e7qwxlmhvlxj96hiaqv5" />
                <h3>{resName}</h3>
                <h4>{cuisine}</h4>
                <h4>4 stars</h4>
                <h4>30mins</h4>
        </div>
    )
}

const Body = () =>{
    return (
        <div className="body">
            <div className="search">
                    Search
            </div>
            <div className="res-container">
                <RestaurantCard resName="hunger hub" cuisine="Pizza, Burger, pasta" />
                <RestaurantCard resName="domino" cuisine="Pizza, Burger, drinks"/>
            </div>
        </div>
    )
}


const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);