import axios from 'axios'
import React, {useEffect, useState} from 'react'
import '../product2/ProductView2.css'
import ProductView2Item from '../product2/ProductView2Item.js'
// import data from '../product2/ProductView2Item.json'



export default function ProductView2() {






const [StopUpdate, setStopUpdate] = useState()

    useEffect(()=>{
        if(StopUpdate === 200){
            return;
        }
        GetDataFromServer();
    })




// Get Data from server;

    const [MyApiData, setMyApiData] = useState([]);

    const GetDataFromServer=()=>{
        axios.get('/api/product2')  //to get data from this URL

    .then(data=>{
        setStopUpdate(200);
        console.log("Data get into Product 2");
        setMyApiData(data.data)
    })
    .catch(error=>
        console.log("Data didn't get into Product 2") )  // if failed to get data
    }








//Treansfer data to item
const showProduct= MyApiData.map((x, index)=>{
    return <ProductView2Item key={index}  image={`/productCarousalImages/${x.image}`} code={x.code} price={x.price} />
})





var x=0;
const showMore= ()=>{
    
    if(x===0){
        document.querySelector("#showMe").classList.add("showMore")
        document.querySelector("#showMe").classList.remove("product-2")
        document.querySelector(".showMoreButton Button").innerHTML="Show Less"
        x=x+1;
    }
    else{
        document.querySelector("#showMe").classList.add("product-2")
        document.querySelector("#showMe").classList.remove("showMore")
        document.querySelector(".showMoreButton Button").innerHTML="Show More"
        x=0;
    }

}







    return (  
    <div>
          <section className="title">
                  <div> Exceptional Desing!  </div>
          </section>

        <section className="product-2 row" id="showMe" >

                {showProduct}

        </section>
    <div className="showMoreButton">   <button onClick={showMore} className="btn btn-primary" > Show More </button> </div> 

        
    </div>
)}
