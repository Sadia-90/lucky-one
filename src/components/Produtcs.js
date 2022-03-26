import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBowlFood } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Products.css';

const Produtcs = ({product, handelAddOrderClick}) => {
    //  const {product, handelAddOrderClick} = props;
    const {img, name, price} = product;
    
    return (
        <div className='food-detail'>
            <div className='food-image'>
            <img src={img} alt="" /> 
           
               <h1>name:{name}</h1>
               <p>price: ${price}</p>
            </div>
            
            <button onClick={() => handelAddOrderClick(product)} className='order-list'>
             <p>add order</p>
             <FontAwesomeIcon icon={faBowlFood}></FontAwesomeIcon>
         </button>

        </div>
    );
};

export default Produtcs;