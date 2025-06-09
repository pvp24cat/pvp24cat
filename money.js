
function createMoney() {
  const money = document.createElement('div');
  money.classList.add('money');
  money.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(money);
  setTimeout(() => money.remove(), 5000);
}

setInterval(createMoney, 500);
