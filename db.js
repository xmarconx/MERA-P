import mongoose from 'mongoose';

const conn = () => {
    // mongoose.connect(process.env.DB_URI, {
    mongoose.connect("mongodb://localhost:27017", {
        dbName: "meda-tr",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected To DB");
    }).catch((err) => {
        console.log(`Error: ${err}`);
    });
};

export default conn;