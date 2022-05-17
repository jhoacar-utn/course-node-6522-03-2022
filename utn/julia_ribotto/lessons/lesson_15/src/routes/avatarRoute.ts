import { Router } from 'express';
const route:Router = Router();

import {getAvatar,postAvatar} from '../controller/avatarController'

route.get("/",getAvatar);
route.post("/",postAvatar);

//module.exports = route;
export default route;