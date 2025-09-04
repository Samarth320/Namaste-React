import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState , useEffect} from "react";

const Body = () => {

    const [restaurantData , setRestaurantData] = useState(resData);

    useEffect(() => {
                    console.log("updated data", restaurantData);
            }, [restaurantData]);

    return(
        <div className="body">
              
            <div className="filter">

                <button className="filter-btn" onClick={
                    ()=>{
                        console.log("before" , restaurantData);

                        let filterData = restaurantData.filter((data)=> data.ratings > 4);

                        setRestaurantData(filterData);

                    }
                }>
                    Top Rated Restaurants
                </button>

            </div>

            <div className="res-container">
               {
                    restaurantData.map( (data,index) => (
                                <RestaurantCard key={index} cardData={data} />
                    ))
               }
            </div>

        </div>
    )
}

export default Body;