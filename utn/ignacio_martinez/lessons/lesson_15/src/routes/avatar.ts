import { Router } from "express";


const route:Router = Router();

import {getAvatar, postAvatar} from "../controllers/avatarController";


route.get("/",getAvatar);
route.post("/",postAvatar);


export default route;
//module.exports = route;