import React,{ useEffect, useState } from 'react'
import CartItem from './CartItem'
import './Cart.css'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'


export default function Cart() {

    const { isAuthenticated, user  } = useAuth0();

    const [CartData, setCartData] = useState([])
    const [StopLoading, setStopLoading] = useState()


    useEffect(()=>{
        if(StopLoading === 200){
            return
        }
        else{
            getDataCart();
        }
    })


const getDataCart=()=>{


if(isAuthenticated){

    const newUsers={
        username: user.name,
        userid: user.sub,
        Useremail: user.email,
        cart: []
    }

    axios({
        url:'/api/LoginUser',
        method: "post",
        data: newUsers
    })


    .then(data=>{
        setStopLoading(200)
        console.log(`Data get into cart`)
        const datas= data.data.cart;

        setCartData(datas);
        const mapData= datas.map((x)=>{
            return console.log(`Data is here ${x.image}`)
        })

    })

    .catch(err=>{
        console.log('there is a err in axios of cart')
    })

}
}



const carts= CartData.map((x)=>{
    return <CartItem image={x.image} code={x.code} price={x.price} />
})

    return (
        <div className="cart-div">
            <h2> Cart </h2>
                <div className="cart cart-head">
                        <div class="chc"> Image   </div>
                        <div class="chc"> Code   </div>
                        <div class="chc"> Price   </div>
                        <div class="chc"> Quantity  </div>
                        <div class="chc"> Total Price   </div>
                </div>

        <section className="Cart-Parent" >

            {carts}

            <h2 style={{margin: "auto"}}> {isAuthenticated ? "": "Please login first"} </h2>
            
        </section>
        </div>
    )
}


