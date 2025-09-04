const tabela = document.getElementById('tabelaMensagens').querySelector('tbody')

document.querySelector('#Enviar').addEventListener('click', () => {
  const nome = document.getElementById('nome').value.trim()
  const email = document.getElementById('email').value.trim()
  const mensagem = document.getElementById('mensagem').value.trim()

  if (!nome || !email || !mensagem) {
    alert('Preencha todos os campos antes de enviar!')
    return
  }

  const linha = document.createElement('tr')
  linha.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td>${mensagem}</td>
        <td>
          <button class="btn btn-danger btn-sm">Remover</button>
        </td>
      `

  linha.querySelector('button').addEventListener('click', function () {
    linha.remove()
  })

  tabela.appendChild(linha)
  document.getElementById('contatoForm').reset()
})