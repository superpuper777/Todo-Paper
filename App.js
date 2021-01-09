import loginModule from './components/loginComponent.js';
import todoModule from './components/todoListComponent.js';
import registrationModule from './components/registrationComponent.js';
import errorModule from './components/errorComponent.js';
import todoService from './services/todoData.js';

const renderedComponent = document.createElement('div');

window.onload = function () {
  if (localStorage.getItem('token')) {
    todoList();
  } else {
    logIn();
  }

  document.querySelector('.form__registration-link').addEventListener('click', () => {
    const registrMod = registrationModule();
    const registrationComponent = new registrMod.RegistrationComponent(renderedComponent);
    changePageContent(renderedComponent.innerHTML);

    document.querySelector('.form__authorization-btn').addEventListener('click', () => {
      let form = document.querySelector('.form');
      let errors = form.querySelectorAll('.error')

      for (let i = 0; i < errors.length; i++) {
        errors[i].remove()
      }
      validateFields();
      let inputs = document.querySelectorAll('input');
      let userName = inputs[0].value;
      let password = inputs[1].value;
      let confirmedPassword = inputs[2].value;
      if (password === confirmedPassword) {
        const user = {
          name: userName,
          password: password
        }
        localStorage.setItem("user", JSON.stringify(user));
        console.log("reg")
        logIn();

      } else {
        console.log("Password does not match");
        let error = document.createElement('div')
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Passwords doesn\'t match';
        form.prepend(error);
      }

    })
  })
}

function changePageContent(html) {
  document.getElementById('main').innerHTML = html;
}

function logIn() {
  const loginMod = loginModule();
  const loginComponent = new loginMod.LoginComponent(renderedComponent);
  changePageContent(renderedComponent.innerHTML);

  document.querySelector('.form__authorization-btn').addEventListener('click', () => {
    let form = document.querySelector('.form');
    let errors = form.querySelectorAll('.error')

    for (let i = 0; i < errors.length; i++) {
      errors[i].remove()
    }

    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)

    validateFields();

    let inputs = document.querySelectorAll('input');
    let login = inputs[0].value;
    let password = inputs[1].value;
    if (login === user.name && password === user.password) {
      let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      console.log(login, password);
      localStorage.setItem("token", token);
      todoList();
    } else {
      const errorMod = errorModule();
      const errorComponent = new errorMod.ErrorComponent(renderedComponent);
      console.log(errorComponent);
      changePageContent(renderedComponent.innerHTML);
      document.querySelector('.error-btn').addEventListener('click', () => {
        logIn();
      })
    }
  })
}

async function todoList() {
  const todoMod = todoService();
  const todoSrv = new todoMod.TodoSrv();
  const todos = await todoSrv.getData();
  console.log(todos);
  const todoListMod = todoModule();
  const todoListComponent = new todoListMod.TodoListComponent(renderedComponent, todos);
  changePageContent(renderedComponent.innerHTML);
  logOut();
  createTodo();
}

function createTodo() {
  const todoMod = todoService();
  const todoSrv = new todoMod.TodoSrv();
  document.querySelector('.todolist__add-btn').addEventListener('click', () => {
    let newText = document.querySelector('.createTodo').value;
    let newItem = {
      id: Math.floor(Math.random() * 101),
      text: newText,
      isActive: true
    }
    todoSrv.addTodo(newItem);
    todoList();
  })
}

function logOut() {
  document.querySelector('.header__logout-btn').addEventListener('click', () => {
    const loginMod = loginModule();
    const loginComponent = new loginMod.LoginComponent(renderedComponent);
    changePageContent(renderedComponent.innerHTML);
    localStorage.clear();
  });
}

function validateFields() {
  let form = document.querySelector('.form');
  let inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      console.log('field is blank', inputs[i]);
      let error = document.createElement('div');
      error.className = 'error';
      error.style.color = 'red';
      error.innerHTML = 'Cannot be blank';
      let div = form.querySelectorAll('.input-text');
      div[i].appendChild(error);
    }
  }
}