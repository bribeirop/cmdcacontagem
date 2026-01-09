console.log("script.js carregado");

function concluirModulo(numero) {
  alert("Função concluirModulo chamada: " + numero);

  let progresso = JSON.parse(localStorage.getItem("progressoCurso")) || [];
  progresso.push(numero);
  localStorage.setItem("progressoCurso", JSON.stringify(progresso));

  window.location.href = "aluno.html";
}
