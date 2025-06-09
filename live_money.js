
document.addEventListener("DOMContentLoaded", () => {
  let money = 0;
  const display = document.getElementById("live-money");

  function updateEarnings() {
    money += Math.floor(Math.random() * 10 + 1);
    display.textContent = money.toLocaleString() + "₽";
  }

  setInterval(updateEarnings, 1000);
});
