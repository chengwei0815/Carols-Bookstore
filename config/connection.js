const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  if(!err) {
    console.log("Successful connection with MongoDB Server");  
  }
  else {
      console.log("Error with MongoDB's connectivity");
      console.log(err)
  }
});