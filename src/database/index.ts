import mongoose from 'mongoose'

const getConnection = () => {
   const dbUri = "mongodb://localhost/local_db";
   mongoose.connect(dbUri);
   mongoose.connection.on("connected", function () {
      console.log("Mongoose default connection open to " + 'mongodb://localhost/local_db');
   });
   mongoose.connection.on("error", function (err) {
      console.log("Mongoose default connection error: " + err);
   });
   mongoose.connection.on("disconnected", function () {
      console.log("Mongoose default connection disconnected");
   });
}
export default getConnection;