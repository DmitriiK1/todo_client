const todoInput = document.querySelector(".todo-form__text");
const addButton = document.querySelector(".todo-form__button");
const todoList = document.querySelector(".todo-list");

class TodoItem {
  constructor(todoList, value){
    this.todoList = todoList;
    this.el = document.createElement("li");
    this.el.innerHTML = `
    ${value}
    <button class="delete"></button>
    <i class="update">u</i>
    `;
    this.deleteIcon = this.el.querySelector('.delete');
    this.updateIcon = this.el.querySelector('.update');
    this.addEventListeners();
    this.todoList.appendChild(this.el);
  }
  addEventListeners(){
    this.deleteIcon.addEventListener('click', this.removeTodoItem.bind(this));
    this.updateIcon.addEventListener('click', this.updateTodoItem.bind(this));
  }

  removeTodoItem() {
    this.todoList.removeChild(this.el);
  }
  
  updateTodoItem(){
    alert('open Popup')
  }
}

const addTodoItem = (event) => {
  event.preventDefault();
  if(!todoInput.value) {
    return false;
  }
  const todItem = new TodoItem(todoList, todoInput.value);
  todoInput.value = '';
}

addButton.addEventListener('click', addTodoItem)