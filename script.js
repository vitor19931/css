// Adiciona novo aluno à lista dinamicamente
const form = document.querySelector('.form-aluno');
const input = document.querySelector('.input-aluno');
const lista = document.querySelector('.alunos-list');

if (form && input && lista) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = input.value.trim();
    if (nome) {
      const li = document.createElement('li');
      li.className = 'aluno-item';
      li.textContent = nome;
      lista.appendChild(li);
      input.value = '';
      input.focus();
    }
  });
}
