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

    // Módulo concluído
    if (progresso.includes(modulo)) {
      botao.textContent = "Concluído ✅";
      botao.classList.remove("bloqueado");
      botao.removeAttribute("href");
      botao.style.pointerEvents = "none";
      return;
    }

    // Liberar próximo módulo
    if (progresso.includes(modulo - 1)) {
      botao.textContent = "Acessar";
      botao.href = `modulo${modulo}.html`;
      botao.classList.remove("bloqueado");
      botao.style.pointerEvents = "auto";
      return;
    }

    // Ainda bloqueado
    botao.textContent = "Bloqueado";
      botao.removeAttribute("href");
      botao.classList.add("bloqueado");
      botao.style.pointerEvents = "none";
  });
}
