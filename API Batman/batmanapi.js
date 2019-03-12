// import swal from 'sweetalert';

let btnFetch = document.getElementById("btnFetch")
let movieDiv = document.getElementById("movieDiv")
let movieLI = document.getElementById("movieLI")
let movieUL = document.getElementById("movieUL")
let newInfo = document.getElementById("newInfo")
function startPage() {
  let url = "http://www.omdbapi.com/?apikey=a90050c8&s=batman"
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url)
  xhr.send()
  xhr.onload = function() {
    console.log("Response received")
    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      console.log(JSON.parse(xhr.responseText))
    let x = JSON.parse(xhr.responseText)
    displayMovieDetails(x)
    }
  };
}
window.onload = startPage()
function displayMovieDetails(x) {
  // console.log(x)
  // console.log("this is the display movie details function")
  let movie = x.Search.map(function(y) {
    return `<table>
<tr><th rowspan="4"></th>
<th colspan="5"></th></tr>
<tr><th>${y.Title}</th></tr>
<tr><th rowspan="4"><a href="#" onclick="getMoreInfo('${y.imdbID}')">
<img src="${y.Poster}"/><th><tr>
</table>`
  })
  movieUL.innerHTML = movie.join('')
}
function getMoreInfo(z) {
  // console.log(z)
  let imdbRequest =
  'http://www.omdbapi.com/?i='+ z + '&apikey=a90050c8'
  let xhr = new XMLHttpRequest();
  xhr.open('GET', imdbRequest)
  xhr.send()
  xhr.onload = function() {
    console.log("Response received")
    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      console.log(JSON.parse(xhr.responseText))
    let x = JSON.parse(xhr.responseText)
    console.log(x)
    imdbInfo(x)
    }
  };
}

function imdbInfo(i) {
  console.log(JSON.stringify(i, null, 4));
  // moreText = JSON.stringify(i, null, 4)
  swal({
    text: JSON.stringify(i, null, 4),
    text: `${i.Title} is rated ${i.Rated}.
    Runtime: ${i.Runtime}.
    Metascore: ${i.Metascore}. imdb Rating: ${i.imdbRating}. Votes: ${i.imdbVotes}.
    ${i.Title} was produced by ${i.Production} and released on ${i.Released}.
    Director: ${i.Director}.
    Actors: ${i.Actors}.
    Plot: ${i.Plot}`
  })
}
