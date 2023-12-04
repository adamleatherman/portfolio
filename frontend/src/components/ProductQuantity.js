import React, { useState } from 'react';
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";

function ProductQuantity ({ quantity, setQuantity }) {
    function increaser() {
        setQuantity(quantity + 1);
    }
    
    function decreaser() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div>
            <GoArrowUp onClick={increaser} style={{ marginRight: '5px' }} />
            {quantity}
            <GoArrowDown onClick={decreaser} style={{ marginLeft: '5px' }} />
        </div>
    )
}

export default ProductQuantity;