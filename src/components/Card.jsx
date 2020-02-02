import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props){
    return(
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Avatar img={props.img}/>
            </div>
            <div className="bottom">
               {/* <Detail tell={props.tell} email={props.email}/> */}
                {/* or */}
               <Detail tell={props.tell}/>
               <Detail  email={props.email}/>
            </div>
        </div>
    )
};


export default Card;