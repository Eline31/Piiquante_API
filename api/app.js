const express = require("express");
const app = express();
const mongoose = require("mongoose");

/**Connexion de l'API à la base de données MongoDB */
mongoose.connect("mongodb+srv://Piiquante_API:pyzMrvQgGdjHgziB@cluster0.2ol13jn.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connexion à MongDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));
/**Middleware pour extraire le corps JSON afin de gérer la requête post */
app.use(express.json());

// const userSchema = require("./models/user");
app.use((req, res) => {
    res.json({ message: "Requête reçue !" });
});

module.exports = app;