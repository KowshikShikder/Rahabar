import React from 'react'
import "../Carousal/Carousal.css"
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();




export default function Product4ItemItem(props) {

    var {image, pCode, pPrice} = props;

    return (
            <div className="product3-item" data-aos="zoom-in-left" data-aos-offset="10">
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
