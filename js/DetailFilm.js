const queryParams = new URLSearchParams(window.location.search);
const filmImageDetail = queryParams.get("image");
const filmTitleDetail = queryParams.get("title");
const filmDetailDetail = queryParams.get("detail");

const detailImage = document.getElementById("detail-image");
detailImage.src = filmImageDetail;

const detailTitle = document.getElementById("detail-title");
detailTitle.innerHTML = `${filmTitleDetail}`;

function PlayFilm() {
    if (filmDetailDetail) {
        const fullDetailURL = `https://perompak7samudra.vercel.app/${filmDetailDetail}`;
        window.location.href = fullDetailURL;
    } else {
        console.error("Server Error 🧢");
    }
}
