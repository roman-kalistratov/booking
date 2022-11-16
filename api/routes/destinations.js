import express from "express";
import { countTours, createDestination, deleteDestination, getDestination, getDestinations, updateDestination } from "../controllers/destination.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createDestination);
//UPDATE
router.put("/:id",verifyAdmin, updateDestination);
//DELETE
router.delete("/:id",verifyAdmin, deleteDestination);

//GET
router.get("/find/:id", getDestination);
//GET ALL
router.get("/", getDestinations);

router.get("/countTours", countTours);

export default router;
