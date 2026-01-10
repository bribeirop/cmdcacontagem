// LOGIN
function login(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;

  if (nome.trim() === "") {
    alert("Digite seu nome");
    return;
  }

  localStorage.setItem("alunoNome", nome);
  localStorage.setItem("moduloConcluido", 0);

  window.location.href = "area-aluno.html";
}

// VERIFICAR LOGIN
function verificarLogin() {
  const nome = localStorage.getItem("alunoNome");

  if (!nome) {
    window.location.href = "index.html";
  }

  const campoNome = document.getElementById("alunoNome");
  if (campoNome) {
    campoNome.innerText = nome;
  }
}

// LOGOUT
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

// PROGRESSO
function carregarProgresso() {
  const concluido = Number(localStorage.getItem("moduloConcluido")) || 0;

  document.querySelectorAll(".card").forEach(card => {
    const modulo = Number(card.dataset.modulo);
    const botao = card.querySelector(".btn");

    if (modulo <= concluido + 1) {
      botao.classList.remove("bloqueado");
      botao.innerText = "Acessar";
      botao.href = `modulo${modulo}.html`;
    }

    if (modulo <= concluido) {
      botao.innerText = "Concluído ✅";
    }
  });

  if (concluido >= 4) {
    document.getElementById("certificado").style.display = "block";
  }
}

// CONCLUIR MÓDULO
function concluirModulo(numero) {
  localStorage.setItem("moduloConcluido", numero);
  window.location.href = "area-aluno.html";
}
