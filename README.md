# List Tasks - Fullstack Club

Projeto simples de lista de tarefas criado durante o Curso Fullstack Club.  
Interface minimalista para adicionar, marcar como concluída e remover tarefas (front-end).

---

## Demonstração rápida

- Abra `index.html` no navegador para ver a aplicação funcionar.
- Cada tarefa pode ser marcada clicando no texto (classe `.done`) e removida com o ícone de lixeira.

---

## Estrutura do projeto

O repositório contém os seguintes arquivos/pastas principais:

index.html
css/
js/
images/

(arquivos front-end e assets do projeto). :contentReference[oaicite:0]{index=0}

---

## Tecnologias

- HTML
- CSS
- JavaScript

Essas linguagens são as utilizadas no projeto. :contentReference[oaicite:1]{index=1}

---

## Como rodar localmente

Opção 1 — **Abrir direto no navegador**  
1. Clone o repositório:
   ```bash
   git clone https://github.com/andredantasti/list-tasks-fullstackClub.git


Abra index.html com duplo clique no seu navegador.

Opção 2 — Rodar com um servidor local (recomendado se usar fetch ou módulos)

# usando Python 3
cd list-tasks-fullstackClub
python -m http.server 5500
# depois abra http://localhost:5500 no navegador

U## 🧑‍💻 Uso

- Digite a tarefa no input e clique em **Adicionar**.  
- Clique no texto da tarefa para **marcar/desmarcar como concluída**.  
- Clique na **lixeira** para remover a tarefa.

> Observação: o comportamento pode variar dependendo da implementação no diretório `js/`.

---

## 🤝 Como contribuir

1. Faça um **fork** deste repositório.  
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/nova-coisa
Commit suas mudanças:

bash
Copiar código
git commit -m "Minha feature"
Envie para sua branch:

bash
Copiar código
git push origin feature/nova-coisa
Abra um Pull Request explicando suas alterações.

Sugestões de contribuição:
Adicionar localStorage para salvar as tarefas.

Implementar edição das tarefas (inline).

Criar categorias ou etiquetas.

Melhorar a acessibilidade (atalhos, aria-labels, foco).

💡 Boas práticas e dicas rápidas
Evite usar li.textContent junto com um <span> com o mesmo texto, pois isso gera duplicação visual.

Para marcar como concluída, altere a classe do li (ex.: li.classList.toggle('done')) e estilize via CSS.

Se as tarefas estiverem sendo criadas duas vezes, confira se não há submit + click sendo tratados simultaneamente.

Solução rápida: usar type="button" ou tratar somente o evento submit do <form>.

📄 Licença
Nenhuma licença especificada no repositório.
Se quiser adicionar uma (MIT, Apache 2.0, GPL etc.), posso gerar pra você.

📬 Contato
# Desenvolvedor: @andredantasti