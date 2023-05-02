import express from "express";
import restrictAge from "../../middleware/restrictAge.js";

const userRouter = express.Router();


//route level middleware
userRouter.use(restrictAge);

// userRouter.get("/", (req, res) => {
//   res.status(200).send("Welcome to user");
// });

userRouter.post("/", (req, res) => {
    res.status(200).send("Welcome to user");
});





export default userRouter;