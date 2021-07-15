import axios from 'axios';
import React, {useState} from 'react'
import './StoreData.css'

export default function StoreData2() {


    const [NewImage, setNewImage] = useState();
    // const [ImageName, setImageName] = useState();

    const SetNewImage=(x)=>{
        x.preventDefault();
        setNewImage(x.target.files[0])
        SetData(x);
    }



    const [StoreData, setStoreData] = useState({
        section: "",
        image: "",
        code:"",
        price: ""
        
    })

    const {section, price, code, image} = StoreData;

    

    const SetData=(x)=>{
        x.preventDefault();

        if(x.target.name === "image"){
            setStoreData({...StoreData, [x.target.name] : x.target.files[0].name })
        }


        else{
            setStoreData({...StoreData, [x.target.name] : x.target.value })
        }

        

        }
    
    



        console.log( section, price, code, image )




        // Submit Data

    const SubmitData=(x)=>{
        x.preventDefault()

        axios.post(`/api/${section}`, StoreData)

        .then(data=>{
            console.log("New Product's info Sent to api")
        })

        .catch(error=>{
            console.log("New Product's info failed to send to api")
        })

        // Image Send
        const formData= new FormData();
        formData.append("file" , NewImage)



        
        axios.post(`/api/store/img`, formData, {
            headers:{
                "Content-Type": "multipart/form-Data"
            }
        })

        .then(data=>{
            console.log("New image sent to server from product 1")
        })

        .catch(error=>{
            console.log("New image failed to sent to server from product 1")
        })

        setStoreData({
        section: "",
        image: "",
        code:"",
        price: ""
    })

    }

console.log(NewImage)






    return (
        <div className="StoreDataParents">

            <h2> Submit New Product </h2> <br/>

            <form>
                <label> Select Section </label> <br/>

                <select  value={section} name="section" onChange={SetData} >

                    <option> upload </option>
                    <option> product1 </option>
                    <option> product2 </option>
                    <option> product3 </option>
                    <option> product4 </option>
                    <option> product5 </option>

                </select> <br/><br/>

                <label> Price </label> <br/>
                <input name="price" type="number" htmlFor="price" placeholder="Price" value={price} onChange={SetData} required/> <br/><br/>

                <label> Code </label>  <br/>
                <input name="code" type="text" htmlFor="code" placeholder="Code" value={code} onChange={SetData} required/> <br/><br/>

                <label> Product Image </label> <br/> <br/>

                <input type="file" accept="image/*" id="getImage" name="image" className="d-none"   onChange={SetNewImage} required/>
                <label  htmlFor="getImage">  <i className="fa fa-plus"   style={ {background: "#576166", padding: "40px",cursor: "cell" ,fontSize: "30px" } } >  </i> </label>
                
                
                <br/> <br/>

                <button type="submit" onClick={SubmitData} className="btn btn-primary"> Submit Data   </button>
            </form>
        </div>
    )
}
