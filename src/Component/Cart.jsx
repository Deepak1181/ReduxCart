import React from 'react'
import {AiFillDelete} from "react-icons/ai"

const Cart = () => {
  return (
    <div className='cart'>
        <main>
         <CartItem  imgSrc name price qty decrement increment deletehandler id/>
        </main>
        <aside>
            <h2>subtotal:{200}</h2>
            <h2>shipping:{200}</h2>
            <h2>Tax:{200}</h2>
            <h2>Total:{1200}</h2>
        </aside>
    </div>
  )
}

 const CartItem=({imgSrc,name,price,qty,decrement,increment,deletehandler,id})=>(
    <div className='cartItem'>
        <img src={imgSrc} />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>

        </article>
        <div>
            <button onClick={()=>decrement(id)}> -</button>
            <p>{qty}</p>
            <button onClick={()=>increment(id)}> +</button>
        </div>
        <AiFillDelete onClick={()=>deletehandler()}/>
    </div>

 )

export default Cart