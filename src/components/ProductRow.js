import React from 'react';
import ProductQuantity from '../components/ProductQuantity.js';

function ProductRow({ products }) {
    return (
        <tr>
            <td>{products.company}</td>
            <td>{products.product}</td>
            <td>{products.price}</td>
            <td><ProductQuantity /></td>
        </tr>
    );
}

// toLocaleString('en-US',(style: "currency",currency))}

export default ProductRow;