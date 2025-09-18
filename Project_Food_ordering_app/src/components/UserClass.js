import React from "react";

class UserClass extends React.Component
{
    constructor(props)
    {
        super(props)
        // console.log(this.props);

        this.state = {
            userinfo : {
                name : "dummy",
                location : "dummy"
            }
        }
    }

    async componentDidMount()
    {
        const data = await fetch("https://api.github.com/users/Samarth320");
        const response = await data.json();

        console.log("github api response",response);

        this.setState({
            userinfo : response
        })
    }

    render()
    {
        // const {name,location} = this.props

        const {name , location} = this.state.userinfo
        

        return(
            <div className="user-card">
                
                <h1>Name :{name}</h1>
                <h3>location :{location}</h3>
                <h3>Contact : Samarth@320</h3>
                
            </div>
        )
    }
}

export default UserClass;