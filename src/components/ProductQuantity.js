import React, { useState }  from 'react';

// Importing up and down icons
import { BiArrowToTop, BiArrowToBottom } from  'react-icons/bi';

function ProductQuantity () {
    const [amount, setAmount] = useState(0);

    const increase = () => setAmount(amount + 1);
    const decrease = () => {
        if (amount > 0) { setAmount(amount - 1)
        }
    };
    return (
        <div class="">
            <BiArrowToTop onClick={increase} class="bigger" />
            <>
            <span class="qv">{amount}</span>
            </>
            <BiArrowToBottom onClick={decrease} class="bigger" />
        </div>
    );
}

export default ProductQuantity;