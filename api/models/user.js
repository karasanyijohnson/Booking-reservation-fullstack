import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos: {
        type: [String]
    },
    desc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String],

    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
})
export default mongoose.model("user", hotelSchema)