/* =========================
   LOGIN
========================= */

function verificarLogin() {
  if (localStorage.getItem("alunoLogado") !== "true") {
    window.location.href = "index.html";
  }

  const nome = localStorage.getItem("alunoNome");
  if (nome) {
    document.getElementById("alunoNome").innerText = nome;
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

/* =========================
   PROGRESSO DO CURSO
========================= */

function carregarProgresso() {
  const progresso = JSON.parse(localStorage.getItem("progresso")) || {
    1: true,
    2: false,
    3: false,
    4: false
  };

  document.querySelectorAll(".card").forEach(card => {
    const modulo = card.dataset.modulo;
    const botao = card.querySelector(".btn");

    if (progresso[modulo]) {
      botao.classList.remove("bloqueado");
      botao.innerText = "Acessar";
      botao.href = `modulo${modulo}.html`;
    } else {
      botao.classList.add("bloqueado");
      botao.innerText = "Bloqueado";
      botao.removeAttribute("href");
    }
  });

  // Certificado
  if (progresso[1] && progresso[2] && progresso[3] && progresso[4]) {
    document.getElementById("certificado").style.display = "block";
  }
}

/* =========================
   CONCLUIR MÓDULO
========================= */

function concluirModulo(numero) {
  const progresso = JSON.parse(localStorage.getItem("progresso")) || {};

  progresso[numero] = true;
  progresso[numero + 1] = true;

  localStorage.setItem("progresso", JSON.stringify(progresso));

  alert("Módulo concluído com sucesso!");
  window.location.href = "area-aluno.html";
}
