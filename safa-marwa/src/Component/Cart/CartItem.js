import axios from 'axios';
import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function CartItem(props) {

    const {user, isAuthenticated }= useAuth0()
    const {image, code, price}= props;

    const [TotalPrice, setTotalPrice] = useState(price)

    const calculateTotalPrice=(x)=>{
        const unit = x.target.value;
        const TotalPrice= (unit * price) 
        setTotalPrice(TotalPrice);
    }



    const RemoveProduct=(x,y,z)=>{

        if(isAuthenticated){

        const cart={
            image: x,
            code:y,
            price:z
        }
        console.log(cart)

        const removData={
            username: user.name,
            userid: user.sub,
            Useremail: user.email,
            cart: cart
        }

    axios({
        url:'/api/cart/remove',
        method:"post",
        data: removData
    })

        }
    }





    
    return (
        <section >

            <div className="cart">
                <div className="img "> <img src={window.location.origin+ image } alt="" /> </div>
                <div className="product-code"> <span> {code} </span> </div>
                <div className="product-price"> <span> {price}</span> ৳ </div>
                <div className="input"> <input onChange={calculateTotalPrice} type="number" defaultValue="1" min="1" max="99"  />  </div>
                <div className="total_price"> <span> {TotalPrice} </span> ৳ </div>
                
                <button className="cart-close btn btn-primary" onClick={RemoveProduct.bind(this, image,code,price)}>  X  </button>
            </div>

        </section>
    )
}
