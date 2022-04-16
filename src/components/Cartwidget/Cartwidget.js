import React from "react";
import Cart from "../svg/cart.svg";

const Cartwidget=()=>{
    return(
        <div className="cart-icon badge bg-secondary">
            <img src={Cart} alt="" width="30"/>
        </div>

    );
};

export default Cartwidget;