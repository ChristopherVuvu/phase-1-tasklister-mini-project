document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    handleToDo(e.target.value)
  })
});

function handleToDo(todo){
  let p = document.createElement('p')
  p.textContent = todo;
  document.querySelector('#list').appendChild(p)
}