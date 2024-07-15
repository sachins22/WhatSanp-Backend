import express from "express";
import { registerNumber, getMobile } from "../controllers/MobileNo.controller.js";


const router = express.Router();

router.post('/registerNo', registerNumber);
router.get('/getnumber',getMobile)
export default router;
