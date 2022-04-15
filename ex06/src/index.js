let rockStar = new Map();
rockStar.set = ("artist","The Rolling Stones");
rockStar.set = ("song","Angie");
rockStar.set =("album","Goats Head Soup");
rockStar.set = ("singer","Mick Jagger");

let newRock= new Map(rockStar.filter( el => el.upperCase().indexOf(query.toCase()) !== -1));
console.log(newRock,"a");
module.exports = { rockStar, newRock };