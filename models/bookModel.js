const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A first name is required.'],
    minlength:[1,'Minimun length for the first name is 1 characters.']
  },
  author: {
    type: String,
    required: [true, 'The author\'s name is required.'],
    minlength:[5,'Minimun length for the author\'s name is 5 characters.']
  },
  price: {
    type: Number,
    required: [true, 'The price is required.'],
    min: [1, 'Minimun price is 1']
  },
  starRating: {
    type: Number,
    required: [true, 'The price is required.'],
    min: [1, 'Minimun number of star rating is 1']
  },
  synopsis: {
    type: String,
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;