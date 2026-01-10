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
  const progresso = JSON.parse(localStorage.getItem("progressoCurso")) || [];

  document.querySelectorAll(".card").forEach(card => {
    const modulo = parseInt(card.dataset.modulo);
    const botao = card.querySelector(".btn");

    if (progresso.includes(modulo)) {
      botao.textContent = "Concluído ✅";
      botao.style.pointerEvents = "none";
      return;
    }

    if (progresso.includes(modulo - 1)) {
      botao.textContent = "Acessar";
      botao.href = `modulo${modulo}.html`;
      botao.style.pointerEvents = "auto";
      return;
    }

    botao.textContent = "Bloqueado";
    botao.style.pointerEvents = "none";
  });
}