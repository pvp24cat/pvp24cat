
document.addEventListener("DOMContentLoaded", () => {
  const faqBox = document.createElement("div");
  faqBox.id = "faq-assistant";
  faqBox.innerHTML = `
    <div class="faq-header">❓ Нужна помощь?</div>
    <div class="faq-body">
      <p><strong>💬 Как начать?</strong><br>Напиши нашему боту и выполни простые шаги.</p>
      <p><strong>📦 Это бесплатно?</strong><br>Да! Мы не требуем вложений.</p>
      <p><strong>💸 Когда выплаты?</strong><br>Еженедельно, без задержек.</p>
      <a href="https://t.me/operator_cat24" target="_blank" class="faq-btn">Писать оператору</a>
    </div>
    <span class="faq-close">×</span>
  `;
  document.body.appendChild(faqBox);

  document.querySelector(".faq-close").onclick = () => {
    faqBox.style.display = "none";
  };
});

// Показываем через 10 секунд
setTimeout(() => {
  const box = document.getElementById("faq-assistant");
  if (box) box.classList.add("show");
}, 10000);
