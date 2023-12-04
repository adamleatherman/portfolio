import React from 'react';
import ProductRow from '../components/ProductRow';
import products from '../data/products';

function OrderPage() {
    return (
        <>
            <h2>Order Products</h2>
            <article>
                <p>
                This React-based product table page incorporates a dynamic counter component to efficiently manage and display product quantities, providing an interactive and user-friendly interface for tracking and updating product quantities within the table.
                </p>
                <form>
                    <fieldset>
                        <legend>Available products:</legend>
                        <table id="order">
                            <caption></caption>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product =>
                                    <ProductRow product={product} key={product.index} />
                                )}
                            </tbody>
                        </table>
                        <button>Submit</button>
                    </fieldset>
                </form>
            </article>
        </>
    )
}

export default OrderPage;