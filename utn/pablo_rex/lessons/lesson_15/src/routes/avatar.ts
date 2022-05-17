import { Router } from 'express'
//const express =require("express");

const route:Router = Router();

import {getAvatar,postAvatar} from '../controllers/avatar'

route.get("/",getAvatar);
route.post("/",postAvatar);

export default route;
//module.exports =route;
