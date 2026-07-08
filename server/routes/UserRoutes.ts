import express from "express"
import { getSingleUserThumbnail, getUsersThumbnails } from "../controllers/UserController.js";

const UserRouter = express.Router();


UserRouter.get("/thumbnails", getUsersThumbnails);
UserRouter.get("/thumbnail/:id", getSingleUserThumbnail);

export default UserRouter