import { RES_IMG_URL } from "../utils/constant";
import { IoStarSharp } from "react-icons/io5";

const RestaurantCard = ({cardData}) => {

    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } = cardData?.info || {};

    return(

        <div className="res-card">
            
            <img className="food-img" src={RES_IMG_URL + cloudinaryImageId} />

            <div className="detail-container">
                <h3 className="res-name">{name}</h3>

                <div className="res-details">
                    <h4>{cuisines?.join(", ")}</h4>
                    
                    <div className="dish-cost">
                        <h4 className="rating">{avgRating} <IoStarSharp /></h4>
                        <h4 className="cost">{costForTwo}</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RestaurantCard;