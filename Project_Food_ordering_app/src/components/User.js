import { useState } from "react";


const User = (props)=>{

    const [followers] = useState(0);

    return(
        <div className="user-card">
            <h1>This is function Based component code</h1>
            <h1>Name : {props.name}</h1>
            <h3>location : Pune</h3>
            <h3>Contact : Samarth@320</h3>
            <h3>followers : {followers}</h3>
        </div>
    )
}

export default User;