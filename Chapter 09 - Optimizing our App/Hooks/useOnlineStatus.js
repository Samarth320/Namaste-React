import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{

    const [onlineStatus , setOnlineStatus] = useState(navigator.onLine);
    // navigator.onLine gives the current network status at page load.

    const handleOffline = ()=>{
        setOnlineStatus(false);
    }

    const handleOnline = ()=>{
        setOnlineStatus(true);
    }

    useEffect(()=>{

        window.addEventListener("offline" , handleOffline)

        window.addEventListener("online", handleOnline)

        // cleanup to avoid memory leaks
        // this ensures React cleans up listeners when the component unmounts.
        return () => {
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        };

    },[])

    return onlineStatus;
}

export default useOnlineStatus;