import React from 'react'
import Pro3Des from '../Product4/Product4Description'
import Pro3Item from '../Product4/Product4Item'
import '../Product4/Product4.css'

export default function Product4() {
    return (<div>

            <section className="title">
                  <div> Beautiful Collection!  </div>
            </section>



        <div className="product3-main product3-main-product4">
            <div> <Pro3Item /> </div>
            <div> <Pro3Des /> </div>
        </div>
</div>
    )
}
