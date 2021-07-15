const express =require('express');

const router = express.Router();

const BlogPost = require('../model/BlogPost')
const Product1 = require('../model/Product1')
const Product2 = require('../model/Product2')
const Product3 = require('../model/Product3')
const Product4 = require('../model/Product4')
const Product5 = require('../model/Product5')
const StoreData = require('../model/StoreData')
const CartData = require('../model/CartData');
const { query } = require('express');





                        //Product 1

router.get('/api/product1', (req, res)=>{

    Product1.find({ })

        .then((data)=>{
            res.json(data);
        })

        .catch((error)=>{
            console("error: ", error )
        })
})




//                          Product 2
router.get('/api/product2', (req, res) =>{

    Product2.find()

    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>{
        console(' error: ', error);
    })

});




//                          Product 3
router.get('/api/product3', (req, res) =>{

    Product3.find({ })

    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>{
        console(' error: ', error);
    })

});




                        //Product 4
    
router.get('/api/product4', (req, res)=>{

    Product4.find({ })

    .then((data)=>{
        res.json(data);
    })

    .catch((error)=>{
        console("error: ", error )
    })
    
    
})


                        //Product 5

    
    router.get('/api/product5', (req, res)=>{

        Product5.find({ })

            .then((data)=>{
                res.json(data);
            })

            .catch((error)=>{
                console("error: ", error )
            })
})




// File Upload

router.post("/api/upload/img", (req,res)=>{

if(req.files === null){
    return res.status(400).json({msg: 'No file uploaded'});
}

const file = req.files.file;

file.mv(`${__dirname}/../safa-marwa/public/upload/${file.name}` , err=>{
    if(err){
        console.log(err);
        return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/upload/${file.name}` })
})

})


// Store Data to Product 1


router.post("/api/product1",(req, res)=>{
    const data= req.body;

    const UpdateProduct1= new Product1(data);
    UpdateProduct1.save((error)=>{
        if(error){
            console.log("Failed to save data in mongoose of Product 1")
        }
        else{
            console.log("Successfully data saved in mongoose of Product 1")
        }
    })
} )



router.post("/api/product2",(req, res)=>{
    const data= req.body;

    const UpdateProduct1= new Product2(data);

    UpdateProduct1.save((error)=>{
        if(error){
            console.log("Failed to save data in mongoose of Product 2")
        }
        else{
            console.log("Successfully data saved in mongoose of Product 2")
        }
    })
} )



router.post("/api/product3",(req, res)=>{
    const data= req.body;

    const UpdateProduct1= new Product3(data);
    UpdateProduct1.save((error)=>{
        if(error){
            console.log("Failed to save data in mongoose of Product 3")
        }
        else{
            console.log("Successfully data saved in mongoose of Product 3")
        }
    })
} )




router.post("/api/product4",(req, res)=>{
    const data= req.body;

    const UpdateProduct1= new Product4(data);
    UpdateProduct1.save((error)=>{
        if(error){
            console.log("Failed to save data in mongoose of Product 4")
        }
        else{
            console.log("Successfully data saved in mongoose of Product 4")
        }
    })
} )



router.post("/api/product5",(req, res)=>{
    const data= req.body;

    const UpdateProduct1= new Product5(data);
    UpdateProduct1.save((error)=>{
        if(error){
            console.log("Failed to save data in mongoose of Product 5")
        }
        else{
            console.log("Successfully data saved in mongoose of Product 5")
        }
    })
} )















// Store image in folder

router.post("/api/store/img", async (req,res)=>{
    const data= req.files.file;
    const fileName=new Date().getTime();
    
    data.mv(`${__dirname}/../safa-marwa/public/productCarousalImages/${data.name}`), err=>{
        if(err){
            console.log("Image Stored to folder Product Image 1 Successfully");
        return res.status(500).send(err);
        }
        else{
            console.log("Failed To store image in folder product Image 1")
        return res.json({ fileName: file.name, filePath: `/upload/${file.name}` })
        }
    }
})





// Upload new product


router.post("/api/storedata", (req,res)=>{

    const data = req.body;

    const newStoreData= new StoreData(data);
    newStoreData.save((error)=>{
        if(error){
            console.log("Failed To store Data")
        }
        else{
            console.log("Data Stored Successfully")
        }
    })


} )









router.post('/api/save', (req, res) =>{

    console.log('body:', req.body);
    
    const data = req.body
    console.log(data)
    const newBlogPost = new BlogPost(data);
    newBlogPost.save((error)=>{
        if (error){
            console.log('Innalillahih')
        }
        else{
            console.log('Alhamdulillah Data has been saved')
        }
    })
})



// Login User Get Cart Or Creat Account

router.post('/api/LoginUser', (req, res) =>{

    //GET CART
    const query=req.body
    const userData={
        username: query.username,
        userid: query.userid
    }

    CartData.findOne(userData)

    .then((data)=>{

        res.json(data);
        // console.log(`Cart Data receiver in server ${data.cart[0].image}`)

        if(data === null){

            // Save new user
        const newUser = req.body
        const newData = new CartData(newUser);
        newData.save((error)=>{
            if(error){ console.log(`there is an error in sending new user info`)}
        else
            { console.log(`New user data sent successfully`) }
        })
        
            
        }

    })
    .catch((error)=>{
        console(' error: ', error);
    })

});


//Add new Product

router.post('/api/AddToCart', (req, res)=>{
    
    console.log(req.body.cart)

    const newItem= req.body

    const query={
        username:req.body.username,
        userid:req.body.userid
    }

    CartData.updateMany(query,{
        $push:{
            cart: newItem.cart
        }
    }, (error,result)=>{
        console.log("Done Alhamdulillah")
    })
    
    
})



router.post('/api/cart/remove', (req, res)=>{
    const query={
        username:req.body.username,
        userid:req.body.userid
    }
    
    const removeItem= req.body.cart

    CartData.updateOne(query,{
        $pull:{
            cart: removeItem
        }
    }, (error, result)=>{
        console.log(`Product Removed Successfully`)
    })

})














module.exports= router;