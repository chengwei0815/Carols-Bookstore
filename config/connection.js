const mongoose = require('mongoose');

// v.6 of Mongoose
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  if(!err) {
    console.log("Successful connection with MongoDB Server");
  }
  else {
      console.log("Error with MongoDB's connectivity");
      console.log(err)
  }
});

//v.7 of Mongoose
/*
main().catch(err=> console.log(err));

async function main(){
  await mongoose.connect(process.env.DB_URL)};
*/
