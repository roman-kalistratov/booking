import express from "express";
import { createDestination, deleteDestination, getDestination, getDestinations, updateDestination } from "../controllers/destination.js";
import Destination from "../models/Destination.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/", createDestination);
//UPDATE
router.put("/:id", updateDestination)
//DELETE
router.delete("/:id", deleteDestination)

//GET
router.get("/:id", getDestination)
//GET ALL
router.get("/", getDestinations)

export default router;
