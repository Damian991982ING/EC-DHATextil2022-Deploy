import React, {useState} from "react";
import "./ItemCount.css";


const ItemCount = ({initial, min, max}) => {
    const [counter, setCounter] = useState(initial)

    const handleIncrement=()=>{
       counter < max ? setCounter(counter + 1) : alert("Maximo Alcanzado");
    }
    const handleDecrement=()=>{
        counter > min ? setCounter(counter - 1) : alert("Minimo Alcanzado");
    }
    return(
        <div className="amount">
            <button className="count" onClick={handleDecrement}>-</button>
             <span>{counter}</span>
            <button className="count" onClick={handleIncrement}>+</button>
        </div>
        


        
        
         

        

    );
}

export default ItemCount