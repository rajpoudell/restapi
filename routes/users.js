import express  from "express";
import { v4 as uuidv4 } from 'uuid';

const router  = express.Router();


const users = [];

//all routes in here are starting with /users
router.get('/', (req,res) => {
    res.send(users)   
});

router.post('/',(req,res) =>{
    const user  = req.body //post req on postman wala nabin pandey
    
    // const userId = uuidv4() ; // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const userWithId = { ...user , id :  uuidv4()}
//creating shortcut with directly using userid and userWithId in push method

    users.push(userWithId);

    res.send(`User with the name ${user.fName} added to the datebase !`);
    console.log(`User with the name ${user.fName} added to the datebase !`);
});


export default router;