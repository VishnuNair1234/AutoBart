// Define an array of drink objects with name and ingredients properties
const drinksList = [
  {
    name: "Margarita",
    ingredients: ["Tequila", "Triple Sec", "Lime Juice", "Salt"],
    image: require('../../../images/margarita.jpg')
  },
  {
    name: "Martini",
    ingredients: ["Gin", "Dry Vermouth", "Lemon Twist or Olive"],
    image: require("../../../images/martini.jpg")
  },
  {
    name: "Mojito",
    ingredients: ["White Rum", "Lime Juice", "Simple Syrup", "Mint Leaves", "Soda Water"],
    image: require('../../../images/mojito.jpg')
  },
  // Add more drinks as needed
];

// Export the drinks list as a module
module.exports = drinksList;
