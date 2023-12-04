import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';
import ProductSubtotal from './ProductSubtotal';

function ProductRow({ product }) {
    const [quantity, setQuantity] = useState(0);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    }

    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{product.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
            <td><ProductQuantity quantity={quantity} setQuantity={handleQuantityChange} /></td>
            <td><ProductSubtotal price={product.price} quantity={quantity} /></td>
        </tr>
    );
}

export default ProductRow;