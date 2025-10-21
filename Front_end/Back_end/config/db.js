const mongoose = require('mongoose');


const dburl = "mongodb+srv://pasindu:11223344@cluster0.fhegvnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    await mongoose.connect(dburl);
    console.log('MongoDB connected');
  } catch (e) {
    console.error('Database connection error:', e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
