# Comandos GIT
> **GitHub dos Alunos:**
>> **Rafa:** ``https://github.com/Rafael582480/FinalProject``
>
>> **Murilo:** ``https://github.com/muripixel6485-droid/FinalProject``


## Configurar:
- Configurar nome global: ``git config --global user.name <seu_nome>``

- Configurar email global: ``git config --global user.email <seu_email>``

> **Dica:** Para ver se já está configurado: ``git config user.name`` ou ``git config user.email``


## Inicialização
- Iniciar Repositório: ``git init``

- Guardar Mudanças: ``git add .``

- Confirmar Mudanças: ``git commit -m 'mensagem falando o que foi alterado'``

- Ver status: ``git status``


## Histórico
- Ver alterações: ``git diff``

- Histórico de commits: 
	1. ``git log (detalhado)``
	2. ``git log --oneline (resumido)``


## Branches
- Listar branches: ``git branch``

- Criar nova_branch: ``git branch nova_branch``

- Trocar para a Branch Criada: ``git switch nova_branch``

- Criar e trocar: ``git switch -c nome_da_branch``

- Unir duas branches:
	1. **ATENÇÃO:** _(certifique-se que está na branch main)_
	2. ``git merge nova_branch``

- Deletar branch:
	1. ``git branch -d nome_da_branch (local)``
	2. ``git push origin --delete nome_da_branch (remota)``

## GitHub:
Entrar no github e criar um repositório com o mesmo nome da pasta

### Primeira Vez
- Adicionar remoto: ``git remote add origin <link_do_seu_repositorio>``

- Renomear branch principal para MAIN: ``git branch -M main``

- Enviar para remoto: ``git push -u origin main``

### Próximas Vezes
- ``git add .``

- ``git commit -m 'mensagem falando o que foi alterado'``

- Puxar atualizações do remoto: ``git fetch``

- Mescla remoto na sua branch local: ``git pull``

- ``git push origin main``

### Da Escola Para Casa
- ``git clone <link_do_seu_repositorio>``

- ``git add .``

- ``git commit -m 'mensagem falando o que foi alterado'``

- ``git push origin main``


### Trabalhando Em Equipe
1. Entre no GitHub, vá até o repositório que deseja clonar e clique em Fork

2. Clone seu fork: ``git clone <link_do_seu_fork>``

3. Adicione o repositório original como upstream (para poder receber atualizações do original):
``git remote add upstream <link_do_repositorio_original>``

4. Faça alterações em uma **nova branch**

5. Commit e push:
```bash
git add .
git commit -m 'mensagem falando o que foi alterado'
git push origin minha_branch
```

6. No GitHub, clique em ``Compare & pull request`` no seu fork.

7. Manter seu fork atualizado com alterações do original:
```bash
git fetch upstream
git switch main
git merge upstream/main
git push origin main
```


# Projeto: 
Criar **3 páginas** para praticar o uso de DOM em todas elas