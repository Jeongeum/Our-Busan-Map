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
  document.querySelector("body").style.backgroundImage="url(./images/main-background.png"
});

// 잠금화면 시간 표시
const time = lapStartCont.querySelector("time");

let date = new Date();
let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
let min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

time.innerText = `${hours}:${min}`;
