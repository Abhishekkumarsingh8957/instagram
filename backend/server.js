const mongoose = require("mongoose");

// Replace the following with your Atlas connection string
// const url =
//   "mongodb+srv://abhisheksingh:Abhishek%405006@cluster0.7lfypix.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Cluster0";

var url =
  "mongodb://abhisheksingh:Abhishek%405006@ac-zrvtvzz-shard-00-00.7lfypix.mongodb.net:27017,ac-zrvtvzz-shard-00-01.7lfypix.mongodb.net:27017,ac-zrvtvzz-shard-00-02.7lfypix.mongodb.net:27017/GoFood?ssl=true&replicaSet=atlas-qxh8qv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
// Connect to your Atlas cluster
const mongodb = async () => {
  await mongoose.connect(url, { useNewUrlParser: true }, async (err, res) => {
    if (err) console.log("--err", err);
    else {
     console.log("connected");
    }
  });
};
module.exports = mongodb();
