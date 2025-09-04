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

export default RestaurantCard;