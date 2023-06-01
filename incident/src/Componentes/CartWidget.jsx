import React, { useState } from 'react'
import cart from './Imagenes/cart-svgrepo-com.svg'

const CartWidget = () =>
{
    const [count, setCount] = useState();
    return (
        <div>
            <img src={cart} height='50px' alt=''/>4
            
        </div>
    )
}

export default CartWidget