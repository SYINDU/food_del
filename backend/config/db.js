import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://MutisyaOnesmus:687888@cluster0.etapdqv.mongodb.net/food-delivery-website').then(()=>console.log("DB Connected"));
}