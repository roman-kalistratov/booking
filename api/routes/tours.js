import express from "express";
import { 
    createTour, 
    deleteTour, 
    getTour, 
    getTours, 
    updateTour 
} from "../controllers/tour.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();
//CREATE
router.post("/:destinationId", verifyAdmin, createTour);
//UPDATE
router.put("/:id", verifyAdmin, updateTour);
//DELETE
router.delete("/:id/:destinationId", verifyAdmin, deleteTour);

//GET
router.get("/find/:id", getTour);
//GET ALL
router.get("/", getTours);



export default router;
