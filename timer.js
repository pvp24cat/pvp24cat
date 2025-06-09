
document.addEventListener("DOMContentLoaded", () => {
  let countdown = document.getElementById("countdown");
  let time = 345600; // 4 дня в секундах

  function updateTimer() {
    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    countdown.textContent =
      (days < 10 ? "0" : "") + days + "д " +
      (hours < 10 ? "0" : "") + hours + "ч " +
      (minutes < 10 ? "0" : "") + minutes + "м " +
      (seconds < 10 ? "0" : "") + seconds + "с";

    if (time > 0) {
      time--;
      setTimeout(updateTimer, 1000);
    } else {
      countdown.textContent = "00д 00ч 00м 00с";
    }
  }

  updateTimer();
});
