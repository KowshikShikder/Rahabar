import React, { useState } from 'react'
import AOS from 'aos';

import { useAuth0 } from '@auth0/auth0-react'
import 'aos/dist/aos.css';
import axios from 'axios';
AOS.init();




export default function ProductView2Item(props) {


const {user, isAuthenticated}= useAuth0()

const [MyCartItems, setMyCartItems] = useState([])

const AddCart=(x,y,z)=>{



if(isAuthenticated){



    const CartData={
        
        username: user.name,
        userid: user.sub,
        Useremail: user.email,
        cart:[
            {
                image: x,
                code: y,
                price: z
            }
        ]
    }


    axios({
        url:'/api/AddToCart',
        method:"post",
        data: CartData
    })

    .then(data=>{
        console.log("New Item added to Cart")

    })

    .catch(error=>{
        console.log("New Item failed to add in cart")
    })

}
else{
    alert("Please Login First")
}

}

    var {image, code,  price} = props;





    return (
            <div className="proImg" data-aos="zoom-out-up" data-aos-offset="10">
                
            <img src={window.location.origin + image } alt="" />

            <a href="product.html" className="click link-dark">
                                Click For Details
            </a>

            <div className="card">
                <div className="price flip">
                    <div className="card-c back-card"> Code: 
                        <span> {code}  </span>
                    </div>

                    <div className="card-c font-card"> Price
                    <span>  {price} </span> Tk. 
                    </div>
                </div>
            </div>
            <div class="button-AddCart" >
                <button onClick={AddCart.bind(this,image,code,price)} > <i class="fas fa-cart-plus"></i> </button>
            </div>

        </div>
    )
}
