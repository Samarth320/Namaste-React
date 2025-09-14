import RestaurantCard from "./RestaurantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

    const [restaurantData , setRestaurantData] = useState([]);
    const [filterRestaurant , setFilterRestaurant] = useState([]);

    const [searchText , setSearchText] = useState("");

    
    useEffect(()=>{
        console.log("state variable restaurant data updated" , filterRestaurant)
    },[filterRestaurant])


    // note "https://corsproxy.io/" used as a prefix to api link to bypassed cors issue

    const fetchData = async ()=>{

      try{
        const response = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.579343&lng=73.9089168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_");

        const transformData = await response.json();

        console.log("overall data is" , transformData);

        // previously I assumed that restaurants data are at cards[2]..., but Swiggy’s API sometimes changes the index.

                // const mainData = transformData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                // console.log("API restaurant data" , mainData);
                // setRestaurantData(mainData);


        // Hence safer data extraction suggested by AI is
                const cards = transformData?.data?.cards || [];
                const restaurantsCard = cards.find(
                        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
                );


        const mainData = restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setRestaurantData(mainData);
        setFilterRestaurant(mainData);

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

                <div className="search">

                    <input 
                       type="text" 
                       value={searchText}
                       onChange={(e)=> setSearchText(e.target.value)}
                       className="search-box" 
                    />


                    <button className="btn" onClick={()=> {
                        const filterData = restaurantData.filter( (restaurant)=> restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) )

                        filterData.length > 0 ? (setFilterRestaurant(filterData)) : (console.log("No restaurant found in Search"))
            
                    }}>
                        search
                    </button>

                </div>

                <button className="btn" onClick={
                    ()=>{
                        // console.log("before" , restaurantData);

                        const filterData = restaurantData.filter((data)=> data.info.avgRating > 4.5);

                        setFilterRestaurant(filterData);

                    }
                }>
                    Top Rated Restaurants
                </button>

            </div>

            {
                restaurantData.length === 0 ? (<Shimmer />) : 
                (
                   <div className="res-container">
                        {
                                filterRestaurant?.map( (data) => (
                                            <Link to={"/restaurants/"+data.info.id} key={data?.info?.id} className="link-style">
                                                <RestaurantCard cardData={data} />
                                            </Link>
                                ))
                        }
                    </div>
                )
            }

        </div>
    )
}

export default Body;