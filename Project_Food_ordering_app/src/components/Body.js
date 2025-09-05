import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState , useEffect} from "react";

const Body = () => {

    // const [restaurantData , setRestaurantData] = useState(resData);

    const [restaurantData , setRestaurantData] = useState(resData);

    
    useEffect(()=>{
        console.log("restaurant data updated" , restaurantData)
    },[restaurantData])


    const fetchData = async ()=>{

      try{
          const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.579343&lng=73.9089168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_");

        const transformData = await response.json();

        console.log("overall data is" , transformData);

        const mainData = transformData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || resData;

        setRestaurantData(mainData);
      }
      catch(error)
      {
        console.log(error);
        console.log("API CALL error");
      }
    }       
    
    useEffect(() => {
        fetchData();
    }, []); 

    return(
        <div className="body">
              
            <div className="filter">

                <button className="filter-btn" onClick={
                    ()=>{
                        // console.log("before" , restaurantData);

                        let filterData = restaurantData.filter((data)=> data.info.avgRating > 4.5);

                        setRestaurantData(filterData);

                    }
                }>
                    Top Rated Restaurants
                </button>

            </div>

            <div className="res-container">
               {

                    restaurantData?.map( (data) => (
                                <RestaurantCard key={data?.info?.id} cardData={data} />
                    ))
               }
            </div>

        </div>
    )
}

export default Body;