/* =========================
   LOGIN
========================= */
function verificarLogin() {
  const aluno = localStorage.getItem("aluno_nome");
  if (!aluno) {
    window.location.href = "index.html";
  } else {
    const campo = document.getElementById("alunoNome");
    if (campo) campo.innerText = aluno;
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
  let progresso = JSON.parse(localStorage.getItem("progresso")) || {
    modulo1: false,
    modulo2: false,
    modulo3: false,
    modulo4: false
  };

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const modulo = card.dataset.modulo;
    const botao = card.querySelector(".btn");

    if (modulo === "1") {
      botao.classList.remove("bloqueado");
      botao.innerText = progresso.modulo1 ? "Concluído ✅" : "Acessar";
      botao.href = "modulo1.html";
    }

    if (modulo === "2" && progresso.modulo1) {
      botao.classList.remove("bloqueado");
      botao.innerText = progresso.modulo2 ? "Concluído ✅" : "Acessar";
      botao.href = "modulo2.html";
    }

    if (modulo === "3" && progresso.modulo2) {
      botao.classList.remove("bloqueado");
      botao.innerText = progresso.modulo3 ? "Concluído ✅" : "Acessar";
      botao.href = "modulo3.html";
    }

    if (modulo === "4" && progresso.modulo3) {
      botao.classList.remove("bloqueado");
      botao.innerText = progresso.modulo4 ? "Concluído ✅" : "Acessar";
      botao.href = "modulo4.html";
    }
  });

  if (progresso.modulo4) {
    const cert = document.getElementById("certificado");
    if (cert) cert.style.display = "block";
  }
}

/* =========================
   CONCLUIR MÓDULO
========================= */
function login(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;

  if (nome.trim() === "") {
    alert("Digite seu nome");
    return;
  }

  localStorage.setItem("aluno_nome", nome);

  window.location.href = "area-aluno.html";
}