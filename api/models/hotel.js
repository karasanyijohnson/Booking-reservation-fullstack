import mongoose from 'mongoose';
const { Schema } = mongoose;

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
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
        type: [string],
    },
    desc: {
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
    chipestPrice: {
        type: Number,
       required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    featured:{
        type:Boolean,
        default:false
    },
})
export default mongoose.model("Hotel", hotelSchema)