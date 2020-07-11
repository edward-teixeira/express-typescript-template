import { UserController } from "../controller";
import express from "express";
const userController = new UserController();
const UserRouter = express.Router();

UserRouter.get("/", userController.Index);
UserRouter.post("/", userController.Create);

export default UserRouter;