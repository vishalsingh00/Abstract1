const { Schema, model } = require("mongoose");

const cardsSchema = new Schema({
  id: { type: "String", require: "true" , unique: "true" },
  title: { type: "String", require: "true", },
  description: { type: "String", require: "true" },
  
});

module.exports = model("Cards", cardsSchema);