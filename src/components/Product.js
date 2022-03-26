import React, { useState } from 'react';
import './Product.css'
import Produtcs from './Produtcs';
import productsData from './ProductData';


const Product = () => {
    
     const [order, setOrder] = useState([])
    //  console.log(order);
     

     const handelAddOrderClick = (product) =>{
         // console.log(product)
            const newOrder = [...order, product];
            setOrder(newOrder);
          }
          console.log(order);

    return (
          

        <div className='food-container'>

            <div className="food-menu"> 
            {
                 productsData.map(product=> <Produtcs 
                    key={product.id}
                    product ={product}
                    handelAddOrderClick={handelAddOrderClick}
                    ></Produtcs>)
            }
            </div>

            <div className="food-order">
               <h1>order list</h1>
               {
                   order.map(order=> <p 
                    key={order.id}
                    order={order}
                    >name:{order.name}</p>   )
               }

               
               
               <button>Choose for me</button>
               
           <button>Choose again</button>
            
           </div>

           <div>
             <h1>Q: How react work?</h1>
             <p>
                 A: React work defines the logical structure.it's matching browser DOM element with react element.It's trying to find out most different.that's why js work very fast.
                 It's use XML document.
             </p>
            
            <h1> Q: props vs state?</h1>
             <p>A: Props are read only.Props can't be modified.Props are used to pass data from one component to another.</p>
             <p>
             State change can be asynchronous.State can be modified using this . setState. State is both reading and writing.    
             </p>
        </div>
           

        </div>
    );
};

export default Product;