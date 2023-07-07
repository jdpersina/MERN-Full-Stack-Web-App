import React from 'react';

import ProductRow from '../components/ProductRow.js';
import products from '../data/products.js';

function OrderPage () {
    return (
        <>
        <section>
            <h2>Order Form</h2>
            <article>
                <h3>Choose your Order</h3>
                <p>On this page, you can order a product for your pet from one of five different companies. To process your order, we'll 
                    need your name, address, email, and any delivery instructions if applicable.
                </p>
                    <table id="itemstable">
                        <caption>Available Products</caption>
                            
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {products.map((currentItem, index) =>
                                <ProductRow products={currentItem} key={index} />)}
                            </tbody>
                            <tfoot>

                            </tfoot>
                    </table>
            </article>   
        </section>
        </>
    );
}

export default OrderPage;