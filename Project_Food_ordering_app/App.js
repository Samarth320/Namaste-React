import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {

    return(
        <div className="header">

            <div className="logo-container">
                <img className="logo" src="https://media.licdn.com/dms/image/v2/D4E22AQHfh3P5CA-WmQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1706744374573?e=2147483647&v=beta&t=BQ1bVX4M8zypRMW6vV5NSc-0gguCxSZ0KRt7y0BQUFA" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const RestaurantCard = ({cardData}) => {
    return(

        <div className="res-card">
            <img className="food-img" src={cardData.imgSrc} />
            <h3 className="res-name">{cardData.resName}</h3>

            <div className="res-details">
                <h4>{cardData.cuisine}</h4>
                <h4>{cardData.ratings}</h4>
                <h4>{cardData.time}</h4>
            </div>
        </div>
    )
}

const Body = () => {

    const resData = [
        {
            index : 1,
            imgSrc : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/16/7cbbb087-5eb9-4464-bce2-8e8a392d19a2_1046102.jpg",
            resName : "Meghana Foods",
            cuisine : "Biryani , North India , Dal Bati",
            ratings : "4.4 stars",
            time : "38 minutes"
        },
         {
            index : 2,
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
            resName: "Meghana Foods",
            cuisine: "Biryani, North Indian, Dal Bati",
            ratings: "4.4 stars",
            time: "38 minutes"
        },
        {
            index : 3,
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0adf25c57357161b20c11281d8a443e6",
            resName: "Paradise Biryani",
            cuisine: "Biryani, Mughlai, Kebab",
            ratings: "4.2 stars",
            time: "32 minutes"
        },
        {
            index : 4,
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4944f0cfdcbca2bec1f3ab8e3db3f7",
            resName: "Truffles",
            cuisine: "Burgers, American, Fast Food",
            ratings: "4.5 stars",
            time: "28 minutes"
        },
        {
            index : 5,
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mtr8w6msayubnigqmbkn",
            resName: "Behrouz Biryani",
            cuisine: "Biryani, Mughlai, Hyderabadi",
            ratings: "4.3 stars",
            time: "40 minutes"
        },
        {
            index : 6,
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nigqvxgzvyxtfjuqasgg",
            resName: "Empire Restaurant",
            cuisine: "South Indian, North Indian, Chinese",
            ratings: "4.1 stars",
            time: "35 minutes"
        }
    ]

    return(
        <div className="body">
              
            <div className="search">Search</div>

            <div className="res-container">
               {
                    resData.map( (data,index) => (
                                <RestaurantCard key={index} cardData={data} />
                    ))
               }
            </div>

        </div>
    )
}

const AppLayout = () => {

    return(
        <div>

            <Header />

            <Body />

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);