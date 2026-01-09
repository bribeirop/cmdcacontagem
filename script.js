const TOTAL_MODULOS = 4;

function concluirModulo(numero) {
  let progresso = JSON.parse(localStorage.getItem("progressoCurso"));

  if (!progresso) {
    progresso = [];
  }

  if (!progresso.includes(numero)) {
    progresso.push(numero);
    localStorage.setItem("progressoCurso", JSON.stringify(progresso));
  }

  window.location.href = "aluno.html";
}

function carregarProgresso() {
  let progresso = JSON.parse(localStorage.getItem("progressoCurso")) || [];

  document.querySelectorAll("[data-modulo]").forEach(card => {
    const numero = parseInt(card.getAttribute("data-modulo"));

    if (progresso.includes(numero)) {
      card.classList.add("concluido");

      const botao = card.querySelector(".btn");
      if (botao) {
        botao.innerHTML = "Concluído ✅";
        botao.style.pointerEvents = "none";
        botao.style.opacity = "0.6";
      }
    }
  });

  if (progresso.length === TOTAL_MODULOS) {
    const cert = document.getElementById("certificado");
    if (cert) cert.style.display = "block";
  }
}
