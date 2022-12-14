const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const socketServer = require('./socketServer')


const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());

// register the routes
app.use("/api/auth", authRoutes);

const server = http.createServer(app);
socketServer.registerSocketServer(server);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://test:test@ac-vghyi4p-shard-00-00.whfm36f.mongodb.net:27017,ac-vghyi4p-shard-00-01.whfm36f.mongodb.net:27017,ac-vghyi4p-shard-00-02.whfm36f.mongodb.net:27017/?ssl=true&replicaSet=atlas-11j0q3-shard-0&authSource=admin&retryWrites=true&w=majority')
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("database connection failed. Server not started");
    console.error(err);
  });
