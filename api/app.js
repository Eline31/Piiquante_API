const express = require("express");
const app = express();
/**Middleware pour extraire le corps JSON afin de gérer la requête post */
app.use(express.json());

// const userSchema = require("./models/user");
app.use((req, res) => {
    res.json({ message: "Requête reçue !" });
});

module.exports = app;