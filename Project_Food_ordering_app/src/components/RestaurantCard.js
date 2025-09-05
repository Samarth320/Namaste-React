import { RES_IMG_URL } from "../utils/constant";

const RestaurantCard = ({cardData}) => {

    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } = cardData?.info || {};

    return(

        <div className="res-card">
            <img className="food-img" src={RES_IMG_URL + cloudinaryImageId} />
            <h3 className="res-name">{name}</h3>

            <div className="res-details">
                <h4>{cuisines?.join(", ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;