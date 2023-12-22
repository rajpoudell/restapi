import { Express } from "express";

const router  = express.Router();

router.get("/users", (req,res) => {
    res.send('Hello from users routes')
});


export default router;