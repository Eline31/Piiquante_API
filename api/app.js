const express = require("express");
const app = express();
const mongoose = require("mongoose");
const apiSauceRoutes = require("./routes/sauce");
const apiUserRoutes = require("./routes/user");

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
app.use((req, res, next) => {
    res.json({ message: "Requête reçue !" });
    next();
});

app.use("/api/sauces", apiSauceRoutes);
app.use("/api/auth", apiUserRoutes);

module.exports = app;