import React, {useState} from 'react';
import axios from 'axios';

export default function Form() {

    const [FormData, setFormData] = useState({
        title: "",
        body:""
    })

    const {title, body} = FormData;

//     const [MyApiData, setMyApiData] = useState([]);

//     const [WeFoundData, setWeFoundData] = useState();






// const getData= ()=>{

//     axios.get('/api')  //to get data from this URL

//     .then(data=>{
//         console.log("data found successfully in form");  // Set Data into [ AllData ] from url
//         // console.log(data.data)
//         setMyApiData(data.data)
//         setWeFoundData(200)
//     })
//     .catch(error=>
//         console.log("there is an error in form") )  // if failed to get data
    
// }



// useEffect(()=>{
//     if(WeFoundData === 200 ){
//         return;
//     }
//         // getData();
// })

// console.log(MyApiData.map((x)=>{
//     return x.image
// }))





// Set changed data

    const Changing= (x)=>{
        setFormData({ ...FormData, [x.target.name]: x.target.value})
    }



    //Sending data
const SendData= (e)=>{
    e.preventDefault();

    const payLoad ={
        title,
        body
    };
console.log(payLoad)



//axios
axios({
    url: "/api/save",
    method: "post",
    data: payLoad
})

.then(data=>{
    console.log("Data passed successfully");
    
})

.catch(error=>
    console.log("Data didn't pass successfully") )  // if failed to get data



resetData();

}




//Reset Data
const resetData = ()=>{
    setFormData({
        title: "",
        body:""
    })
}


    return (
        <div>
            <form>
                <label> Title   </label>
                <input for="title" name="title" value={title} onChange={Changing} placeholder="title" />
            <br/><br/>
                <label> Body  </label>
                <input for="body" name="body" value={body} onChange={Changing}  placeholder="body" />
            <br/><br/>
                <button onClick={SendData} > Submit </button>
            </form>


        </div>
    )
}
