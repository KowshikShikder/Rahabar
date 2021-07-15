import React, { useEffect, useState} from 'react'
import axios from 'axios'

import Product5ItemItem from '../Product5/Product5ItemItem'
// import data from '../Product5/Product5.json'


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
        axios.get('/api/product5')
        .then(data=>{
            setStopUpdate(200)
            setMyData(data.data);
            setStopUpdate(200)
            console.log("Data get into Product 5")
        })
    
        .catch(error=>{
            console.log("Data didn't get into Product 5")
        })
    }
    



    const cardShow= MyData.map((x, index)=>{
        return <Product5ItemItem key={index}  image={`/productCarousalImages/${x.image}`} pCode={x.code} pPrice={x.price} />
    })


    return (
        <div className="Pro3Item-main">
            {cardShow}

            <div className="button-more"> <div className="btn btn-info"> Click Here For More </div> </div>
            {/* <div> <p> {AllData.data} </p>      </div> */}
        </div>
    )
}
