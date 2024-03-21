const todoList = document.querySelector('#todos');

const todos = [
  { text: 'Order cat food', completed: false },
  { text: 'Clean kitchen', completed: true },
  { text: 'Buy food', completed: true },
  { text: 'Do work', completed: false },
  { text: 'Exercise', completed: true }
];

// loop through the todos array and create a new p for each todo
todos.forEach(function (todo) {
  const todoElement = document.createElement('li');
  todoElement.textContent = todo.text;
  todoList.appendChild(todoElement);
});

// ik wil todo's kunnen toevoegen
// een onSubmit event die afvangen
// de value van een input pakken
// dat toevoegen aan de array
// dan moet de render todo's gebeuren
// dus misscien wel een functie die todo's rendert
// een functie een todo aanmaakt?
// en wanneer er 1tje is gemaakt, dan de functie van renderen aanroepen.



function addTodo() {
  const input = document.getElementsByName("todo")
  const inputValue = input.value;

  let newTodo = {
    text: inputValue,
    todos: false
  }
  todos.push = newTodo
}


// addForm.addEventListener('submit', addTodo){

// }
const toAddForm = document.getElementById("addForm");

toAddForm.addEventListener('submit', addTodo);






// ik wil todos kunnen verwijderen

// ik wil de status van de todo kunnen veranderen, completed, true false

