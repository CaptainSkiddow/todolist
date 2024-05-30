

const todoList = document.querySelector('#todos');

const todos = [
  { text: 'Order cat food', completed: false },
  { text: 'Clean kitchen', completed: true },
  { text: 'Buy food', completed: true },
  { text: 'Do work', completed: false },
  { text: 'Exercise', completed: true, }
];

// loop through the todos array and create a new p for each todo

// ik wil todo's kunnen toevoegen
// een onSubmit event die afvangen
// de value van een input pakken
// dat toevoegen aan de array
// dan moet de render todo's gebeuren
// dus misscien wel een functie die todo's rendert
// een functie een todo aanmaakt?
// en wanneer er 1tje is gemaakt, dan de functie van renderen aanroepen.



function addTodo(event) {
  event.preventDefault();

  const formInput = document.getElementById("todo").value;

  let newTodo = {
    text: formInput,
    completed: false,
  }

  todos.push(newTodo)


  console.log(todos) // OM te testen hoe de array eruit ziet, zonder dat de html hoeft worden gerefreshed. 

  const list = document.getElementById('todos');

  //list.reload();
  //list.load();     - Blijkbaar werkt dit niet? https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/load //
  // Push.state() gebruiken?
  // Het is dus todos.push(newTodo). Fixed!

  document.getElementById('addForm').reset(); // Reset het 'input' veld van de form. 


  const todoList = document.getElementById('todos');
  todoList.innerHTML = '';

  /*
    todos.forEach(function (todo) {
      const todoElement = document.createElement('li');
      const todoText = document.createElement('span');
      todoText.textContent = todo.text;
      todoElement.className = 'todoItem';
      todoElement.appendChild(todoText);
      todoList.appendChild(todoElement);
  
    });
  
    */



  renderTodos();

}

const toAddForm = document.getElementById("addForm");

toAddForm.addEventListener('submit', addTodo);




function renderTodos() {

  const todoList = document.getElementById('todos');
  todoList.innerHTML = '';

  todos.forEach(function (todo, index) {
    const todoElement = document.createElement('li');
    const todoText = document.createElement('span');
    todoText.textContent = todo.text;
    todoText.addEventListener('click', () => toggleCompleted(index));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTodo(index));


    todoElement.className = 'todoItem';

    todoElement.appendChild(todoText);
    todoElement.appendChild(deleteButton);
    todoList.appendChild(todoElement);

    checkComplete(index);

  })

};

renderTodos();

function deleteTodo(index) {
  todos.splice(index, 1)
  renderTodos();
}

function toggleCompleted(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}



// ik wil todos kunnen verwijderen

// ik wil de status van de todo kunnen veranderen, completed, true false



function checkComplete() {
  if (todo.completed) {
    todoElement.classList.add('completed');
  }
}