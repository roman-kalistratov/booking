import express from "express";
import { 
    createTour, 
    deleteTour, 
    getByCategory, 
    getByRating, 
    getTour, 
    getTours, 
    getAllTours,
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
router.get("/getAll", getAllTours);

router.get("/", getTours);
router.get("/getByCategory", getByCategory);
router.get("/getByRating", getByRating);




export default router;
