import React from 'react'
import "../Carousal/Carousal.css"



export default function Product3ItemItem(props) {

    var {image, pCode, pPrice} = props;

    return (
            <div className="product3-item" data-aos="zoom-in-right" data-aos-offset="10">
                <div className="item3">
                <img src={window.location.origin + image } alt="" />

                <a href="product.html" className="click clicks link-dark">
                            Click For Details
                </a>

                <div className="card cards">
                    <div className="price flip">
                        <div className="card-c back-card"> Code: <span> {pCode}  </span> </div>
                        <div className="card-c font-card"> Price <span> {pPrice}  </span> Tk. </div>
                    </div>
                </div>



                </div>




            </div>

    )
}
