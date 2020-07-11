import express from "express";
import { ApiController} from "../controller";
import UserRouter from "./UserRouter";

const apiRouter = express.Router();
const apiController = new ApiController();

apiRouter.get("/", apiController.Index);
apiRouter.use("/user", UserRouter);

export default apiRouter;