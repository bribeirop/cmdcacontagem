const TOTAL_MODULOS = 4;

/* Marca módulo como concluído */
function concluirModulo(numero) {
  localStorage.setItem(`modulo${numero}`, 'concluido');
  window.location.href = 'area-aluno.html';
}

/* Validação do quiz */
function validarQuiz(numero) {
  const resposta = document.querySelector('input[name="quiz"]:checked');
  const msg = document.getElementById('quiz-msg');

  if (!resposta) {
    msg.innerText = 'Selecione uma resposta.';
    msg.style.color = 'red';
    return;
  }

  if (resposta.value === 'correto') {
    concluirModulo(numero);
  } else {
    msg.innerText = 'Resposta incorreta. Tente novamente.';
    msg.style.color = 'red';
  }
}

/* Carrega progresso corretamente */
function carregarProgresso() {
  for (let i = 1; i <= TOTAL_MODULOS; i++) {
    const card = document.querySelector(`[data-modulo="${i}"]`);
    if (!card) continue;

    const btn = card.querySelector('.btn');

    const anterior = localStorage.getItem(`modulo${i - 1}`);
    const atual = localStorage.getItem(`modulo${i}`);

    if (i === 1 || anterior === 'concluido') {
      btn.classList.remove('bloqueado');
      btn.innerText = 'Acessar';
      btn.href = `modulo${i}.html`;
    } else {
      btn.classList.add('bloqueado');
      btn.innerText = 'Bloqueado';
      btn.removeAttribute('href');
    }

    if (atual === 'concluido') {
      btn.innerText = 'Concluído ✅';
      btn.classList.remove('bloqueado');
      btn.removeAttribute('href');
    }
  }

  // Certificado
  const certificado = document.getElementById('certificado');
  if (
    localStorage.getItem('modulo1') === 'concluido' &&
    localStorage.getItem('modulo2') === 'concluido' &&
    localStorage.getItem('modulo3') === 'concluido' &&
    localStorage.getItem('modulo4') === 'concluido'
  ) {
    if (certificado) certificado.style.display = 'block';
  }
}