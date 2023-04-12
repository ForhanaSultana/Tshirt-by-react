import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt}) => {
    const {name,price,picture}=tshirt
    return (
        <div className='Tshirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
};

export default Tshirt;