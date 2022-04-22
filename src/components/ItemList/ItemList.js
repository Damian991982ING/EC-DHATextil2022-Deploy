import React from "react";
import Item from "../Item/Item";



const ItemList = ({items}) => {
    
    return(
        <div id="ItemList">
            
            {items.map((items)=>(
                <Item key={items.id}
                 title={items.title}
                 pictureUrl={items.pictureUrl}
                 description={items.description}
                 price={items.price}
                 stock={items.stock}

                 /> 

            ))}

        </div>

    );

};
export default ItemList;