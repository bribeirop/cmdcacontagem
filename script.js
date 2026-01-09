<!-- NÃO coloque <html> aqui -->
<script>
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
  document.querySelectorAll("[data-modulo]").forEach(el => {
    const num = parseInt(el.dataset.modulo);
    if (progresso.includes(num)) {
      el.classList.add("concluido");
      el.innerHTML += " ✅";
    }
  });

  if (progresso.length === TOTAL_MODULOS) {
    document.getElementById("certificado").style.display = "block";
  }
}
</script>
