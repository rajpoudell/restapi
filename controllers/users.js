import { v4 as uuidv4 } from 'uuid';

let users = [];    

export const getUsers = ((req,res) =>{
    res.send(users);
})


export const createUser = (req, res) => {
    const user = req.body;
  
    if (!user || !user.firstName) {
      return res.status(400).send('User data is missing or incomplete');
    }
  
    const newUser = { ...user, id: uuidv4() };
    users.push(newUser);
  
    res.send(`User with the name ${newUser.firstName} and ID ${newUser.id} added to the database!`);
  };

export const getUser =  ((req,res)  => {
    const {id}  = req.params;
    const foundUser = users.find( (user) => user.id===id);
    res.send( foundUser)
});

export const deleteUser =  (req,res)  => {
    const {id}  = req.params;
    users = users.filter((user) => user.id !== id)
    res.send(`user with the id ${id} deleted from the datebase`)
};
export const updateUser = (req,res) =>{
    const { id } = req.params;
    const {firstName, lastName , age} = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName = lastName;
    }                    
    if(age){
        user.age = age;
    }
    res.send(`user with the id ${id} has been updated`)
}