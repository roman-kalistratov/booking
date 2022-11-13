import Tour from "../models/Tour.js";
import Destination from "../models/Destination.js";

export const createTour = async (req, res, next) => {

    const destinationId = req.params.destinationId;
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();
        try {
            await Destination.findByIdAndUpdate(destinationId, {
                $push: { tours: savedTour._id },
            });
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedTour)

    } catch (err) {
        next(err)
    }
}

export const updateTour = async (req, res, next) => {
    try {
        const updatedTour = await Tour.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true });

        res.status(200).json(updatedTour)
    } catch (err) {
        next(err)
    }
}
export const deleteTour = async (req, res, next) => {
    const destinationId = req.params.destinationId;

    try {
        await Tour.findByIdAndDelete(req.params.id);

        try {
            await Destination.findByIdAndUpdate(destinationId, {
                $pull: { tours: req.params.id },
            });
        } catch (err) {
            next(err)
        }

        res.status(200).json("Tour has been deleted.")
    } catch (err) {
        next(err)
    }
}
export const getTour = async (req, res, next) => {
    try {
        const tour = await Tour.findById(req.params.id);

        res.status(200).json(tour)
    } catch (err) {
        next(err)
    }
}


export const getTours = async (req, res, next) => {
    try {
        const tours = await Tour.find();

        res.status(200).json(tours)
    } catch (err) {
        next(err)
    }
}
