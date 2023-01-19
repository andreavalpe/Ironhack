// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsList = moviesArray.map((movie) => movie.director);
      return directorsList;
}
console.log (getAllDirectors(moviesArray));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (moviesArray) {
  let stevenSpielbergDrama = moviesArray.filter((movie) => {
    return (movie.director ==="Steven Spielberg" && movie.genre.includes("Drama"));    
  });
  return stevenSpielbergDrama.length;
  };
console.log (howManyMovies (moviesArray));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
 function scoresAverage (moviesArray) {
  if (moviesArray.length === 0)
        return 0;
  let average = moviesArray.reduce ((accumulator, currentValue) => {
    if (currentValue.score) {
    return currentValue.score + accumulator;
    } else {
        return accumulator;
    }
  }, 0);
  let averageResult = (average / moviesArray.length).toFixed(2);
  return Number(averageResult);
}
console.log (scoresAverage (moviesArray));       

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore (moviesArray) {
  if (moviesArray === 0)
    return 0;
let listDrama = moviesArray.filter ((movie) =>  movie.genre.includes("Drama"));
let listDramaAverage = scoresAverage (listDrama);
  return listDramaAverage;
}
console.log (dramaMoviesScore (moviesArray));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (moviesArray){
  let moviesArrayTwo = moviesArray.map ((movie) => {
    return movie;
  });
  moviesArrayTwo.sort((movieA, movieB) => {
    if (movieA.year > movieB.year) return movieA.year - movieB.year;
    if (movieA.year < movieB.year) return movieA.year - movieB.year;
    else return movieA.title.localeCompare(movieB.title);
     });
     return moviesArrayTwo;
}
console.log(orderByYear(moviesArray));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (moviesArray) { 
  return moviesArray
    .map((movie) => movie.title) 
    .sort() 
    .slice(0, 20); 
}
console.table(orderAlphabetically(moviesArray));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
