const startbtn = document.querySelector(".anchor");

function fire(ratio, opt) {
  confetti(
    Object.assign({}, opt, {
      origin: { y: 0.6 },
      particleCount: Math.floor(200 * ratio),
    })
  );
}

startbtn.addEventListener("click", () => {
  setTimeout(() => {
    fire(0.25, {
      spread: 30,
      startVelocity: 60,
    });
    fire(0.2, { spread: 60 });
    fire(0.35, {
      spread: 100,
      decay: 0.9,
      scalar: 1,
    });
    fire(0.1, {
      spread: 130,
      startVelocity: 30,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.2, {
      spread: 120,
      startVelocity: 45,
    });
  }, 500);
});

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

function openModal(message) {
  document.getElementById("modalMessage").textContent = message;
  modal.style.display = "block";

  setTimeout(function () {
    modal.style.display = "none";
  }, 3000);
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.getElementById("copyEmail").addEventListener("click", function () {
  const emailInput = document.getElementById("emailInput");

  navigator.clipboard
    .writeText(emailInput.value)
    .then(() => {
      openModal("E-mail copiado!");
    })
    .catch((err) => {
      openModal("Falha ao copiar o e-mail.");
      console.error("Erro ao copiar o e-mail: ", err);
    });
});
