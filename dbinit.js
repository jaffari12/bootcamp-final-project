//Setup for connecting MonogoDB Database
//Mongoose liabrary will take care of everything with regard to MongoDB starting for connection itself.


// So firsttime here we require mongoose
const mongoose = require('mongoose');

//we create function connectDB this has bunch of options are needed for mongoose
// all of the options needs to set to true to work fey didn't know why it is like that.

const connectDB = async () => {
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  };

  // for connection we use async await, it offers pretty easy way to start we await for connection data return to us
  // and we need MongoDB URI to connect which will save in .env file.
  const conn = await mongoose.connect(process.env.MONGO_URI, options);

  // after the connetion to make sure MongoDB is connected we can console log to confirm
  console.log(`Mongo DB connected ${conn.connection.host}`.yellow.underline);
}

module.exports = connectDB; 