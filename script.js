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

  // QUIZ MÓDULO 1
function validarQuizModulo1() {
  const resposta = document.querySelector('input[name="q1"]:checked');
  const msg = document.getElementById("msgQuiz1");

  if (!resposta) {
    msg.innerText = "Selecione uma resposta.";
    msg.style.color = "red";
    return;
  }

  if (resposta.value === "certo") {
    msg.innerText = "Resposta correta! Você pode concluir o módulo.";
    msg.style.color = "green";
    document.getElementById("btnConcluir1").style.display = "block";
  } else {
    msg.innerText = "Resposta incorreta. Tente novamente.";
    msg.style.color = "red";
  }
}


}

// CONCLUIR MÓDULO
function concluirModulo(numero) {
  localStorage.setItem("moduloConcluido", numero);
  window.location.href = "area-aluno.html";
}
