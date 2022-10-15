import express from 'express';
import { updateUser,deleteUser,getUser,getUsers } from '../controller/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utilies/verifyToken.js';

const router = express.Router();
// router.get("/checkauthentication" , verifyToken, (req,res)=>{
//     res.send("hello user you are logged in");
// })
// router.get("/checkuser/:id" , verifyUser, (req,res)=>{
//     res.send("hello user you are logged in and now you can delete your account");
// })
// router.get("/checkadmin/:id" , verifyAdmin, (req,res)=>{
//     res.send("hello admin you are logged in and now you  delete all your account");
// })
//UPDATE
router.put("/:id", verifyUser , updateUser);
//DELETE
router.delete("/:id",verifyUser , deleteUser);
//GET
router.get("/:id",verifyUser ,getUser);
//GET ALL
router.get("/" ,verifyAdmin, getUsers);


export default router;