import React from "react";
import {} from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer=(props)=>{
    return(
        <div className="title-prop">
            <h2>{props.greeting}</h2>

        </div>

        

    );

}

export default ItemListContainer;