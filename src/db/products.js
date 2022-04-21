
const products = [
    {id:1,title:"BH1",description:"Polyamide thread spool",price:100,stock:10,pictureUrl:"./assets/BH1.jpg"},
    {id:2,title:"BH2",description:"Polyester thread spool",price:200,stock:10,pictureUrl:"./assets/BH2.jpg"},
    {id:3,title:"BH3",description:"Acrylic thread spool",price:300,stock:10,pictureUrl:"./assets/BH3.jpg"},
    {id:4,title:"BH4",description:"Plasma polymerization polyamide thread spool",price:200,stock:10,pictureUrl:"./assets/BH4.jpg"},
    {id:5,title:"BH5",description:"Plasma polimerization polyester thread spool",price:400,stock:10,pictureUrl:"./assets/BH5.jpg"},
    {id:6,title:"BH6",description:"Plasma polimerization acrylic thread spool",price:600,stock:10,pictureUrl:"./assets/BH6.jpg"}

]

export const getProducts=()=>{
    return new Promise((resolve,reject)=>{
        resolve(products);
    });
};

export const getProductById=(id)=>{
    return new Promise((resolve,reject)=>{
        resolve(products.find((p)=> p.id === Number(id)))
    });

};

export default products

