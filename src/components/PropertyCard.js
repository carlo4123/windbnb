import React from 'react';
import { FaStar } from 'react-icons/fa';

function PropertyCard(props){

    const {images, superHost, rating,name, type} = props

   

    return (
        
        <div className="property-card">
        <div className="img-container">
            <img src={images} alt={images} className="images"/>
        </div>
        <div className="property-card__description">
            {superHost && <span className="property-card__superHost">Super Host</span>}
           
            <span className="property-card__type">{type}</span>
            <span className="property-card__rating">
             <FaStar className="rating-icon"/>
                {rating}</span>
        </div>
       
        <p className="property-card__name">{name}</p>
    </div>
    )
}

export default PropertyCard