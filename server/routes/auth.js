import express from 'express';

const router = express.Router();

router.get("/", (req,res)=> {
    res.send("sagagah");
});
router.get("/register", (req,res)=> {
    res.send("sagagah");
});
router.get("/login", (req,res)=> {
    res.send("sagagah");
});

export default router;