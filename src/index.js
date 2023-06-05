document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault()
    createTodo(e.target['new-task-description'].value)
  }) 

})

function createTodo(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteTodo)
  btn.textContent = 'X'
  p.textContent = todo + " "
  p.appendChild(btn)
  document.querySelector("#tasks").appendChild(p)
};

function deleteTodo(e) {
  e.target.parentNode.remove()
};