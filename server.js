const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

//connect DB
connectDB();

//Init Middleware //bodyparser is included in express now
app.use(express.json({ extended: true, limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

//Define Routes
app.use("/api/", require("./api/product"));

//Serve Static Assets in Production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Listening to PORT ${PORT}`));
