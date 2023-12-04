import React from 'react';

function ProductSubtotal({ price, quantity }) {
    const subtotal = price * quantity

    return (
        <div>
            {subtotal.toLocaleString("en-US", { style: "currency", currency: "USD" })}
        </div>
    )
}

export default ProductSubtotal;