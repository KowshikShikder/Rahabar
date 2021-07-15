import axios from 'axios';
import React, {useState} from 'react'

export default function StoreData() {

    const [StoreData, setStoreData] = useState({
        image: "",
        price: "",
        code: ""
    })

    const {image, price, code} = StoreData;




// File Upload

const [MyFile, setMyFile] = useState();

const ReceiveFile=(e)=>{
    e.preventDefault();
    const file = e.target.files[0];
    setMyFile(file);
}


const Submit= async x=>{

    x.preventDefault()
    const formData = new FormData();
    formData.append('file', MyFile);
    

    axios.post('/api/upload', formData, {
        headers:{
            'Content-Type':'multiPart/form-data'
        }
    })


    .then(data=>{
        console.log("File sent to store Successfully")
    })

    .catch(error=>{
        console.log("File failed to sent to store")
    })
}









const changedData=(x)=>{
    setStoreData({...StoreData, [x.target.name] : x.target.value })
}

// const [ProName, setProName] = useState();
const [URLs, setURLs] = useState();

const changedDataProName=(x)=>{
    setURLs("/apis/"+ x.target.value);
}


const SendData=(x)=>{
    x.preventDefault();

    console.log(StoreData)

    axios({
        url: URLs,
        method:"post",
        data: StoreData
    })

    .then(data=>{
        console.log("Data sent to store Successfully")
    })

    .catch(error=>{
        console.log("Data failed to sent to store")
    })

}







    return (
        <div>
            <form>
                    <label> Image </label> <br/>
                    <input name="image" placeholder="image" value={image} onChange={changedData} htmlFor="image" required/> <br/>

                    <label> Price </label> <br/>
                    <input name="price" placeholder="price" value={price} onChange={changedData} type="number" htmlFor="price" required /> <br/>

                    <label> Code </label> <br/>
                    <input name="code" placeholder="code" value={code} onChange={changedData} htmlFor="code"  required/> <br/> <br/>


                    <br/><br/>

<br/>
                    <select onChange={changedDataProName}  required>
                        <option> Select Option </option>
                        <option> storedata </option>
                    </select>  <br/> <br/>

                    <button type="submit" onClick={SendData}> Send Data </button>

<br/> <br/> <br/><br/>


<br/>
<br/>
<br/>
<br/>
                    <label> Insert file </label>  <br/>

                    <input type="file" onChange={ReceiveFile}/>
                    <input type="button" value="submit" onClick={Submit} />
            </form>



        </div>
    )
}
