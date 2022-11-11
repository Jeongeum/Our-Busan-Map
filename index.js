const startBtn = document.querySelector(".startBtn");
const lapStartCont = document.querySelector(".laptop-lock"); // 랩탑잠금화면
const deskStartCont = document.querySelector(".desktop-lock"); // 데스크탑시작화면
const imgStartCont = document.querySelector(".img-char"); //시작화면 나타나는 캐릭터
const imgLogo = document.querySelector(".img-logo"); //로고

startBtn.addEventListener("click", () => {
  lapStartCont.classList.add("hide");
  deskStartCont.classList.add("hide");
  imgStartCont.classList.remove("hide");
  imgLogo.src = "./images/logo_color.png";
  document.querySelector("body").style.backgroundImage =
    "url(./images/main-background.png";
});

// 잠금화면 시간 표시
const time = lapStartCont.querySelector("time");

function getTime() {
  let date = new Date();
  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let min =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  time.innerText = `${hours}:${min}`;
}

function init() {
  setInterval(getTime, 1000);
}

init();

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: {
      lat: 35.1413916,
      lng: 129.0887639,
    },
  });
  for (let i = 0; i < locations.length; i++) {
    let marker = new google.maps.Marker({
      map: map,
      label: {
        text: locations[i].place,
        color: "#c70e20",
      },
      position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
    });
  }
}

const locations = [
  { place: "추억 보물섬", lat: 35.0998642, lng: 129.0273577 },
  { place: "부평 깡통시장", lat: 35.1018526, lng: 129.0259122 },
  { place: "광안리 해수욕장", lat: 35.1531696, lng: 129.118666 },
  { place: "황소해물탕", lat: 35.1550344, lng: 129.121015 },
  { place: "수변최고돼지국밥 본점", lat: 35.1567627, lng: 129.134279 },
  { place: "아리에티화원", lat: 35.158925, lng: 129.0646584 },
  { place: "녹아내려", lat: 35.1541685, lng: 129.1148619 },
  { place: "조방낙지 범일직영점", lat: 35.1387813, lng: 129.0618939 },
];
