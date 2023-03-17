const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

/**Création d'un schéma de données contenant les champs souhaités */
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

/**On exporte le schéma en tant que modèle mongoose le rendant dispo pour l'application Express */
module.exports = mongoose.model("User", userSchema); 