import express from "express";
import { AddName, getName } from "../controllers/Name.controller.js";


const router = express.Router();

router.post('/NameAdd', AddName);
router.get('/getName',getName)
export default router;