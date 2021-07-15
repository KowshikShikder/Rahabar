import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product3ItemItem from '../Product4/Product4ItemItem'
// import data from '../Product4/Product4.json'




export default function Product3Item() {


const [MyData, setMyData] = useState([])
const [StopUpdate, setStopUpdate] = useState()



useEffect(()=>{
    if(StopUpdate === 200){
        return;
    }
    
    GetDataFromServer()

})



const GetDataFromServer=()=>{
    axios.get('/api/product4')
    .then(data=>{
        setStopUpdate(200)
        setMyData(data.data);
        console.log("Data get into Product 4")
    })

    .catch(error=>{
        console.log("Data didn't get into Product 4")
    })
}




    const cardShow= MyData.map((x, index)=>{
        return <Product3ItemItem key={index} image={`/productCarousalImages/${x.image}`} pCode={x.code} pPrice={x.price} />
    })


    return (
        <div className="Pro3Item-main">
            {cardShow}

            <div className="button-more"> <div className="btn btn-info"> Click Here For More </div> </div>
            
        </div>
    )
}
