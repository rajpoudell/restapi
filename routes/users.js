import express  from "express";

const router  = express.Router();


const users = [ 
        {
            fName  : "Raj" ,
            lName  : "Poudel" ,
            age : 34 
        },
        {
            fName  : "rojina" ,
            lName  : "Poudel" ,
            age : 34 
        }
]

//all routes in here are starting with /users
router.get('/', (req,res) => {
    res.send(users)   
});

router.post('/',(req,res) =>{
    console.log("post router reached");
    const user  = req.body //post req on postman wala nabin pandey

    // users.push()
});


export default router;