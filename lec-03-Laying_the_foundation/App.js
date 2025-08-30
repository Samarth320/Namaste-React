import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1",{id:"heading"}, "lets Learn React");


// React Element ( JSX - HTML like syntax )
// const heading = <div id="heading" className="main">hello react learners</div>

//functional component

const HeadingComponent1 = () => {

    return (
        <div>
           <h1>Namaste react from component</h1>
           <h3>hello ji</h3>
       </div>
    )
    
}

// const HeadingComponent2 = () => (

//         <div>
//            <h1>Namaste react from component</h1>
//            <h3>hello ji</h3>
//        </div>

// )


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <HeadingComponent1 /> );