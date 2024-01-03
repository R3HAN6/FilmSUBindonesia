function search() {
  const input = document.getElementById("inpt").value;
  const apiHost = `https://perompak7samudra.vercel.app/api/search?query=${input}&providers[]=PusatFilm`;
    showLoadingAnimation();
    
    fetch(apiHost)
    .then(res => res.json())
    .then(data => {
      hideLoadingAnimation();
      updateFilmList(data);
    })
    .catch(error => {
      hideLoadingAnimation();
      console.error("Error Get Data 🧢:", error);
    });
}

function showLoadingAnimation() {
  document.getElementById("preloader").style.display = "block";
}

function hideLoadingAnimation() {
  document.getElementById("preloader").style.display = "none";
}

function updateFilmList(data) {
    const filmOutput = document.getElementById("film-output");
    filmOutput.innerHTML = '';
    data.forEach(film => {
        const filmElement = createFilmElement(film);
        filmOutput.appendChild(filmElement);
    });
}

const url = "https://api.github.com/users/R3HAN6";

$.get(url, function (data, status) {
   $("#profile").attr("src", data.avatar_url);
   $("#name").text(data.name);
   $("#followers").text(data.followers);
   $("#following").text(data.following);
});

$(document).ready(function(){
   $(".preloader").fadeOut();
});

function createFilmElement(film) {
    const filmElement = document.createElement('div');
    const linkElement = createLinkElement(film);
    filmElement.appendChild(linkElement);
    const titleElement = document.createElement('p');
    filmElement.appendChild(titleElement);
    return filmElement;
}

function createLinkElement(film) {
    const linkElement = document.createElement('a');
    const imgElement = document.createElement('img');
    linkElement.href = `../DetailFilm.html?image=${encodeURIComponent(film.thumb)}&title=${encodeURIComponent(film.title)}&detail=${encodeURIComponent(film.detail)}`;
    imgElement.src = film.thumb;
    linkElement.appendChild(imgElement);
    return linkElement;
}
