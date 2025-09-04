/*
Desconhecidos:

Elemento.children
Elemento.lastElementChild
*/


const lista = document.querySelector('#lista')
const inputItem = document.querySelector('#inputItem')

// Adiciona item padrão (Item X)
document.querySelector('#btnAdd').addEventListener('click', () => {
  const li = document.createElement('li')
  li.className = 'card p-2 mb-2 text-primary fw-bold shadow-sm'
  li.textContent = `Item ${lista.children.length + 1}`
  lista.appendChild(li)
})

// Adiciona item escrito no input
document.querySelector('#btnAddCustom').addEventListener('click', () => {
  const texto = inputItem.value.trim()
  if (texto) {
    const li = document.createElement('li')
    li.className = 'card p-2 mb-2 text-success fw-semibold shadow-sm'
    li.textContent = `${texto} - (Item ${lista.children.length + 1})`
    lista.appendChild(li)
    inputItem.value = ''
  }
})

// Remover último item
document.querySelector('#btnRemove').addEventListener('click', () => {
  if (lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild)
  }
})

// Limpar lista
document.querySelector('#btnClear').addEventListener('click', () => {
  lista.innerHTML = ''
})