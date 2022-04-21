import React from "react";
//import "./Item.css";

const Item=({id,title, description, price, stock, pictureUrl})=>{
    
    return(
        <div className="products">
            <div className="card" key={id}>
                <a href="/">
                    <img src={pictureUrl} alt=""/>
                </a>
                <div className="box">
                    <h3 title={title}>
                        <a href="/">{title}</a>

                    </h3>
                    <p>{description}</p>
                    <h4>${price}</h4>
                </div>
            </div>
        </div>

        
    )

}
export default Item;