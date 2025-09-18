import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component
{

    constructor()
    {
        super()
        // console.log("parent constructor");
    }

    componentDidMount()
    {
        // console.log("parent component did mount");
    }

    render()
    {

        // console.log("rendering the parent component");

        return(
            <div>
                This is FoodPot services

                <UserClass name={"Sammy"} location={"pune"} />
            </div>
        )
    }
}


export default About;