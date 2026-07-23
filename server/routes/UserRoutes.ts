import express from "express"
import { getSingleUserThumbnail, getUsersThumbnails } from "../controllers/UserController.js";
import protect from "../middlewares/auth.js";

const UserRouter = express.Router();


UserRouter.get("/thumbnails", protect, getUsersThumbnails);
UserRouter.get("/thumbnail/:id", protect, getSingleUserThumbnail);

export default UserRouter