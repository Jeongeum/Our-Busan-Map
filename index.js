const startBtn = document.querySelector(".startBtn");
const lapStartCont = document.querySelector(".laptop-lock"); // 랩탑잠금화면
const deskStartCont = document.querySelector(".desktop-lock"); // 데스크탑시작화면
startBtn.addEventListener("click", () => {
  lapStartCont.classList.add("hide");
  deskStartCont.classList.add("hide");
});

// 잠금화면 시간 표시
const time = lapStartCont.querySelector("time");

let date = new Date();
let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
let min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

time.innerText = `${hours}:${min}`;
