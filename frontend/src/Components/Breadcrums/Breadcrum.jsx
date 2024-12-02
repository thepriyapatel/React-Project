import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const { product } = props;

    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="" /> SHOP 
            <img src={arrow_icon} alt="" />
            {product?.category ? product.category : "Category"} 
            <img src={arrow_icon} alt="" />
            {product?.name ? product.name : "Product Name"}
        </div>
    )
}

export default Breadcrum;
