const mongoose = require('mongoose');

const connection=mongoose.connect('mongodb+srv://vs028328:Vishal2singh%40@cluster0.t0oor.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to mongoDB !')).catch((e) => {
console.log('Not Connected to mongoDB!')});

module.exports=connection;