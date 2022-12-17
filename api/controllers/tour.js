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
    const { destination, min, max, category, rating, limit, ...others } = req.query;

    try {
        let crntCategory;
        let crntRating;
        let crntLimit = limit || 10;

        category === 'ALL'
            ? crntCategory = ["Art & Culture", "Food & Drink", "Outdoor Activities", "Unique Experiences", "Seasonal & Special"]
            : crntCategory = category;

        rating === 'ALL' || rating === undefined
            ? crntRating = [1, 2, 3, 4, 5]
            : crntRating = rating;

        const crntDestination = await Destination.find({ name: destination.toLowerCase() });

        const tours = await Tour.find({
            ...others,
            _id: crntDestination[0].tours,
            price: { $gt: min | 1, $lt: max || 9999 },
            category: crntCategory,
            rating: crntRating,
        }).limit(crntLimit);

        res.status(200).json(tours)

    } catch (err) {
        next(err)
    }
}
export const getAllTours = async (req, res, next) => {
    // try {
    //     const crntDestination = await Destination.find();

    //     const tours = await Tour.find({            
    //         _id: crntDestination[0].tours         
    //     });
     

    //     res.status(200).json(tours);

    // } catch (err) {
    //     next(err)
    // }
}

export const getByCategory = async (req, res, next) => {
    try {
        const tours = await Tour.find({
            category: req.query.category,
        }).limit(req.query.limit);

        res.status(200).json(tours);
    } catch (err) {
        next(err);
    }
}
export const getByRating = async (req, res, next) => {
    try {
        const tours = await Tour.find({
            rating: req.query.rating,
        }).limit(req.query.limit);

        res.status(200).json(tours);
    } catch (err) {
        next(err);
    }
}
