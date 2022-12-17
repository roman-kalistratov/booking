import express from "express";
import { 
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
    getOrders
} from "../controllers/order.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();
//CREATE
router.post("/:dateTour", createOrder);
// UPDATE
router.put("/:id", verifyAdmin, updateOrder);
// DELETE
router.delete("/:id", verifyAdmin, deleteOrder);

//GET
router.get("/find/:id", getOrder);
router.get("/", getOrders);

// router.get("/", getTours);
// router.get("/getByCategory", getByCategory);
// router.get("/getByRating", getByRating);




export default router;