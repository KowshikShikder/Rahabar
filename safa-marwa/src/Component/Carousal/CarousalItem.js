import React from 'react'
import "../Carousal/Carousal.css"

export default function CarousalItem(props) {

    var {image, pCode, pPrice} = props;

    return (
            <div className="fab-img-a" style={{height: "280px", width: "240px"}}>


                <div className="item fab-img" id="pic10">
                    <img src={window.location.origin + image } alt="" />

                    <a href="product.html" className="click link-dark">
                            Click For Details
                    </a>

                        <div className="card">

                            <div className="price flip">
                                <div className="card-c back-card"> Code: <span> {pCode}  </span> </div>
                                <div className="card-c font-card"> Price <span> {pPrice}  </span> Tk. </div>
                            </div>
                        </div>
                </div>

<button className="btn btn-dark cart-add" > <i className="fas fa-cart-plus fa-lg"></i></button>
</div>

    )
}
