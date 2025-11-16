// Add Tarefa
// ------------------------------------------------------

const btnEnviar = document.getElementById("btnSubmit");
console.log(btnEnviar);

const inputTask = document.getElementById("tasks");
console.log(inputTask);

const lista = document.getElementById("list");
console.log(lista);

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();

  const tasks = inputTask.value.trim();

  if (tasks === "") return;

  const span = document.createElement("span");

  span.textContent = tasks;

  span.addEventListener("click", () => {
    span.classList.toggle("done");
  });

  const btnDelete = document.createElement("a");
  btnDelete.innerHTML = `<img src="./images/trash2.PNG"/>`;

  btnDelete.addEventListener("click", () => {
    li.remove();
  });

  const li = document.createElement("li");

  lista.appendChild(li);
  li.appendChild(span);
  li.appendChild(btnDelete);

  inputTask.value = "";
});
