
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { IoStarSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = ()=>{

    const {resId} = useParams();

    // Using  custom Hook useRestaurantMenu to fetch the data
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />

    // Destructuring the data from resInfo
    const {name , cuisines , costForTwoMessage,totalRatingsString , avgRating , areaName } = resInfo?.cards[2]?.card?.card?.info;
    const {slaString} = resInfo?.cards[2]?.card?.card?.info?.sla;

    // getting the menu data from resInfo
    const allCards = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    console.log("allcards are",allCards);

    const mainCardObject = allCards.find((item)=>{
                        return item.card.card.itemCards
                     })

    const menuCard = mainCardObject.card.card.itemCards || [];                
    console.log("menuCard data is",menuCard);

    return(
        <div className="menu-page">

            {/* hotel name */}
            <h1 className="Res-Name">{name}</h1>

            {/* hotel details location and delivery time */}
            <div className="menu-container">
                <div className="ratings">
                    <h2> <IoStarSharp className="star" /> {avgRating}  ( {totalRatingsString} )</h2>
                    <h2>{costForTwoMessage}</h2>
                </div>

                <div className="delivery-details">
                    <h3>{areaName} <FaLocationDot className="icon" /> </h3>
                    <h3>{slaString} <MdDeliveryDining className="icon" /> </h3>
                </div>
            </div>

            {/* menu --> all dishes */}
            <div className="menu-list">
                {
                    menuCard.map( (item)=>(
                        <div key={item?.card?.info?.id} className="menu-item">
                            <h2>{item?.card?.info?.name}</h2>
                            <h4 className="item-price">Rs-{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}</h4>
                        </div>
                     ) )
                }
            </div>

        </div>
    )

}


export default RestaurantMenu;