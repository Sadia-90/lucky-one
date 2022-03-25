import React from 'react';
import './Product.css'
import Produtcs from './Produtcs';
import productsData from './ProductData';

const Product = () => {
    


    return (
        <div className='food-container'>
            <div className="food-menu">
            {
                 productsData.map(product=> <Produtcs 
                    key={product.id}
                    product ={product}

                    ></Produtcs>)
            }
            </div>
       
            <div className="food-order">
               <h1>order list</h1>
           </div>

        </div>
    );
};

export default Product;