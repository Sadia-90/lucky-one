import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBowlFood } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Products.css';

const Produtcs = (props) => {
    const {img, name, price} = props.product;
    return (
        <div className='food-detail'>
            <div className='food-image'>
            <img src={img} alt="" /> 
           
               <h1>name:{name}</h1>
               <p>price: ${price}</p>
            </div>
            
            <button className='order-list'>
             <p>add order</p>
             <FontAwesomeIcon icon={faBowlFood}></FontAwesomeIcon>
         </button>

        </div>
    );
};

export default Produtcs;