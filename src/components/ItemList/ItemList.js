import React,{useState, useEffect} from "react";
import Item from "../Item/Item";
import Loading from "../Loading/Loading.js";
import BH1 from "../../assets/BH1.jpg";
import BH2 from "../../assets/BH2.jpg";
import BH3 from "../../assets/BH3.jpg";
import BH4 from "../../assets/BH4.jpg";
import BH5 from "../../assets/BH5.jpg";
import BH6 from "../../assets/BH6.jpg";




const productsobj =[
    {id:1,title:"BH1",description:"Polyamide thread spool",category:"Polyamide",price:100,stock:10,pictureUrl:BH1},
    {id:2,title:"BH2",description:"Polyester thread spool",category:"Polyester",price:200,stock:10,pictureUrl:BH2},
    {id:3,title:"BH3",description:"Acrylic thread spool",category:"Acrylic",price:300,stock:10,pictureUrl:BH3},
    {id:4,title:"BH4",description:"Plasma polymerization polyamide thread spool",category:"Polyamide",price:200,stock:10,pictureUrl:BH4},
    {id:5,title:"BH5",description:"Plasma polimerization polyester thread spool",category:"Polyester",price:400,stock:10,pictureUrl:BH5},
    {id:6,title:"BH6",description:"Plasma polimerization acrylic thread spool",category:"Acrylic",price:600,stock:10,pictureUrl:BH6},

];



const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{

        const task = new Promise((resolve, reject)=>{
            setTimeout(()=>{

                resolve(productsobj);
            },2000)});

            task.then(
                res=>{
                    setProducts(res);
                    setLoading(false)
                },
                err=>{console.log(err)},
            );
            task.catch(err=>{
                console.log(err);
            });
            task.finally(()=>{
                console.log("Se resolvio la promesa");
            });
    },[]);
    


    return(
        <div id="ItemList">
            {loading && <Loading/> }
            {products.map((product)=>(
                <Item key={product.id}
                 title={product.title}
                 pictureUrl={product.pictureUrl}
                 description={product.description}
                 price={product.price}
                 stock={product.stock}

                 />
                

            ))}

        </div>

    );

};
export default ItemList;