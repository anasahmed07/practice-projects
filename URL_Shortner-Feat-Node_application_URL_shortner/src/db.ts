import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/urls'; // Replace with your MongoDB URI

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectDB;