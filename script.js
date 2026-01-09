function concluirModulo(numero) {
  let progresso = JSON.parse(localStorage.getItem("progressoCurso")) || [];

  if (!progresso.includes(numero)) {
    progresso.push(numero);
    localStorage.setItem("progressoCurso", JSON.stringify(progresso));
  }

  window.location.href = "aluno.html";
}
