import React from "react";
import Hiladora from "../../assets/Hiladora.jpg";


const Greeting=({greeting})=>{
    return(
        <div className="container card mt-3 border-0">
            <img src={Hiladora} className="card-img" alt=""/>
            <div className="card-img-overlay text-dark d-flex align-items-center justify-content-center">
                <h1 className="card-title font-weight-bold text-uppercase">{greeting}</h1>

            </div>

        </div>

    )
}
export default Greeting;