import express from "express";
import { createHotel, getHotel, getHotels, updateHotel,deleteHotel } from "../controller/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

// HOTEL ROUTERS
const router = express.Router();
//CREATE
router.post('/', verifyAdmin,createHotel);
//UPDATE
router.put('/:id',verifyAdmin, updateHotel);
//DELETE
router.delete('/:id', verifyAdmin, deleteHotel);
//GET
router.get('/:id', getHotel);
//GET ALL
router.get('/', getHotels);

export default router