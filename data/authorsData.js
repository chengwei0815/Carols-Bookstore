const { v4:uuid } = require('uuid');

module.exports = [
  {
    _id: uuid(),
    firstName:'Solomon', 
    lastName: 'Northrup',
    birthYear: 1808, 
    bio: 'Solomon Northup was an American abolitionist and the primary author of the memoir Twelve Years a Slave. A free-born African American from New York, he was the son of a freed slave and a free woman of color. A farmer and a professional violinist, Northup had been a landowner in Washington County, New York.'
  },
  {
    _id: uuid(),
    firstName:'Katsuhiro', 
    lastName: 'Otomo',
    birthYear: 1954, 
    bio: 'Katsuhiro Otomo is a Japanese manga artist, screenwriter, animator and film director. He is best known as the creator of Akira, in terms of both the original 1982 manga series and the 1988 animated film adaptation.'
  },
  {
    _id: uuid(),
    firstName:'Roald', 
    lastName: 'Dahl',
    birthYear: 1916, 
    bio: 'Khaled Hosseini is an Afghan-American novelist, physician, activist, humanitarian, and UNHCR goodwill ambassador.'
  }
];