const TOTAL_MODULOS = 4;

function concluirModulo(numero) {
  let progresso = JSON.parse(localStorage.getItem("progressoCurso")) || [];

  if (!progresso.includes(numero)) {
    progresso.push(numero);
    localStorage.setItem("progressoCurso", JSON.stringify(progresso));
  }

  window.location.href = "aluno.html";
}

function carregarProgresso() {
  let progresso = JSON.parse(localStorage.getItem("progressoCurso")) || [];

  document.querySelectorAll(".card").forEach(card => {
    const modulo = parseInt(card.dataset.modulo);
    const botao = card.querySelector(".btn");

    if (progresso.includes(modulo)) {
      botao.textContent = "Concluído ✅";
      botao.classList.remove("bloqueado");
      botao.style.pointerEvents = "none";
    }

    if (progresso.includes(modulo - 1)) {
      if (botao.textContent === "Bloqueado") {
        botao.textContent = "Acessar";
        botao.href = `modulo${modulo}.html`;
        botao.classList.remove("bloqueado");
      }
    }
  });
}
