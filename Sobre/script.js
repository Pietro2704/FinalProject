/*
Desconhecidos:

Elemento.nextElementSibling
Elemento.previousElementSibling
*/

// Seleciona todas as perguntas
const perguntas = document.querySelectorAll('.pergunta')

perguntas.forEach(perg => {
  perg.addEventListener('click', () => {    

    // Fecha todas as respostas, exceto a clicada
    document.querySelectorAll('.resposta').forEach(resp => {
      if (resp !== perg.nextElementSibling) {
        resp.style.display = 'none'
        resp.previousElementSibling.classList.remove('ativo')
      }
    })

    // Alterna a resposta da pergunta clicada
    const resposta = perg.nextElementSibling
    if (resposta.style.display === 'block') {
      resposta.style.display = 'none'
      perg.classList.remove('ativo')
    } else {
      resposta.style.display = 'block'
      perg.classList.add('ativo')
    }
  })
})