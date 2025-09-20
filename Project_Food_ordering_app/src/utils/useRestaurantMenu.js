import { useEffect, useState } from "react";
import { menuAPI_URL } from "../utils/constant";

const useRestaurantMenu = (resId)=>{

    const [resMenu , setResMenu] = useState(null)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        
        const data = await fetch(menuAPI_URL + resId);
        const json = await data.json();

        setResMenu(json.data);
    }

    return resMenu;
}

export default useRestaurantMenu;