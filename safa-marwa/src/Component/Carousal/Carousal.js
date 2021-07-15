/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../Carousal/Carousal.css"
import CarousalItem from './CarousalItem'
// import data from '../Carousal/CarousalData.json'

export default function Carousal() {



    const [MyData, setMyData] = useState([])
    const [StopUpdate, setStopUpdate] = useState()
    
    
    
    useEffect(()=>{
        if(StopUpdate === 200){
            return;
        }
        
        GetDataFromServer()
    
    })
    
    
    
    const GetDataFromServer=()=>{
        axios.get('/api/product1')
        .then(data=>{
            setMyData(data.data);
            console.log("Data get into Product 1")
            setStopUpdate(200)
        })
    
        .catch(error=>{
            console.log("Data didn't get into Product 1")
        })
    }
    




    
      const cardShow=MyData.map((x, index)=>{
            return <CarousalItem key={index}  image={`/productCarousalImages/${x.image}`} pCode={x.code} pPrice={x.price} />
      })



    return (
        <div>
            
<section className="title">
    <div> Exceptional  </div>
</section>

<OwlCarousel 

className='owl-theme product owl-carousel jumbotron' 

autoplayTimeout={3000}  

autoplay={true}

autoplayHoverPause={true}

rewind={true}  

responsive={{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        950:{
            items:4
        },
        1230:{
            items:5
        }
    }} nav>
      
      
{cardShow}


</OwlCarousel>

</div>
    )
}
