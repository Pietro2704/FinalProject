# Comandos GIT


## Configurar:
- Configurar nome global: 
**git config --global user.name <seu_nome>**

- Configurar email gloabl: 
**git config --global user.email <seu_email>**

**Dica:** Para ver se já está configurado: 
**git config user.name** ou **git config user.email**


## Inicio:
- Iniciar Repositório:
**git init**

- Guardar Mudanças:
**git add .**

- Confirmar Mudanças:
**git commit -m 'mensagem falando o que foi alterado'**


## Branches
- Listar branches:
**git branch**

- Criar nova_branch:
**git branch nova_branch**

- Trocar para a Branch Criada:
**git switch nova_branch**

- Unir duas branches:
**_(certificar que está na branch main)_**

- **git merge nova_branch**


## GitHub:
Entrar no github e criar um repositório com o mesmo nome da pasta

## Primeira vez
- ``git remote add origin <link_do_repositorio>``
- ``git branch -M main``
- ``git push -u origin main``

## Próximas vezes
- ``git add .``
- ``git commit -m 'mensagem falando o que foi alterado'``
- ``git fetch``
- ``git pull``
- ``git push origin main``


# GitHub dos Alunos
- Rafa: ``https://github.com/Rafael582480/FinalProject``
- Murilo: ``https://github.com/muripixel6485-droid/FinalProject``



# Projeto: 
Criar **3 páginas** para praticar o uso de DOM em todas elas

## Página Principal (index.html):
**Objetivo:** Treinar criação, remoção e manipulação de Tags/Elementos

- Mostrar uma lista inicial com 3 valores ja estabelecidos. (item 1, item 2, item 3)

- Criar 3 botões:
	1. Adicionar item (item 4, item 5...)
	2. Remover o ultimo item (opcional: remover item específico)
	3. Limpar a lista toda


## Página Sobre (sobre.html):
**Objetivo:** Treinar esconder/mostrar coisas no DOM

- Criar um "FAQ" com 3 perguntas (O que é DOM, Para que serve, Como praticar)

- Ao clicar na pergunta, mostrar a resposta logo abaixo

- Se clicar denovo, a resposta some

- Não exibir duas respostas ao mesmo tempo


## Página Contato (contato.html):
**Objetivo:** Treinar formulários + criação dinãmica de elementos

- Criar um formulário com: Nome, Email e Mensagem

- Ao clicar em Enviar, os dados aparecem em uma **tabela abaixo**

- Cada linha da tabela terá os dados digitados e um botão **Remover** que apaga só aquela linha


<!-- 

let people = {
        name: user_name,
        email: user_email
    }

[object, object, object]


peoples[0]['name'] -> 
-->


<!-- 
form

	label for="nome"
	input type="text"

	label for="email"
	input type="email"

	textarea cols='26' rows='5'

	button type='button'

/form 
-->