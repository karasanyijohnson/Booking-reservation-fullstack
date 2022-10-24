import express from "express";
import { createHotel, getHotel, getHotels, updateHotel,deleteHotel, countByCity, countByType } from "../controller/hotel.js";
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
router.get('/find/:id', getHotel);
//GET ALL
router.get('/', getHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
export default router