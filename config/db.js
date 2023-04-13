const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGO_URI, 
            {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            }
        )
        console.log("Mongo connected");
    } catch (err) {
        console.log(err);
        process.exit();
    }
}

module.exports = connectDB;