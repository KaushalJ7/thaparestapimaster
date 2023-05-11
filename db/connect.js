const mongoose = require("mongoose");

// uri = "mongodb+srv://test:test123@cluster0.31rwbwq.mongodb.net/ThapaAPI?retryWrites=true&w=majority";
const connectDB = (uri) => {
  // console.log("connect db");
  return mongoose.connect(uri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
};

module.exports = connectDB;
