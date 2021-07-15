import axios from 'axios'
import React,{useState, useEffect} from 'react'
import Product3ItemItem from '../Product3/Product3ItemItem'
// import data from '../Product3/Product3.json'


export default function Product3Item() {

const [GetData, setGetData] = useState([]);
const [StopUpdate, setStopUpdate] = useState();


useEffect(()=>{
    if(StopUpdate === 200){
        return
    }
    getDataFromServer();
})


const getDataFromServer=()=>{
    axios("/api/product3")
    .then(data=>{
        setStopUpdate(200);
        setGetData(data.data);
        console.log("Data get into Product 3")
    })

    .catch(error=>{
        console.log("Data didn't get into Product 3 ")
    })


}



    const cardShow= GetData.map((x, index)=>{
        return <Product3ItemItem key={index}  image={`/productCarousalImages/${x.image}`} pCode={x.code} pPrice={x.price} />
    })


    return (
        <div className="Pro3Item-main">
            {cardShow}

            <div className="button-more"> <div className="btn btn-info"> Click Here For More </div> </div>
            
        </div>
    )
}
