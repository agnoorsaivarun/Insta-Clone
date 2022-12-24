const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
//connect to DataBase
const server = process.env.DATABASE_URL || "mongodb://localhost:27017/post";

mongoose.connect(server,{ useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);
// console.log(process.env.PORT);
app.listen(process.env.PORT || 3000, () => console.log("Server running ....."));