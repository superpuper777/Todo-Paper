import loginModule from './components/loginComponent.js';
import todoModule from './components/todoListComponent.js';
import registrationModule from './components/registrationComponent.js';
import errorModule from './components/errorComponent.js';

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
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
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
      changePageContent(renderedComponent.innerHTML);
      document.querySelector('.error-btn').addEventListener('click', () => {
        logIn();
      })
    }

    // localStorage.setItem("login", login);
    // localStorage.setItem("password", password);

    // console.log(localStorage);

  })
}

function todoList() {
  const todoListMod = todoModule();
  const todoListComponent = new todoListMod.TodoListComponent(renderedComponent);
  changePageContent(renderedComponent.innerHTML);
  logOut();
}

function logOut() {
  document.querySelector('.header__logout-btn').addEventListener('click', () => {
    const loginMod = loginModule();
    const loginComponent = new loginMod.LoginComponent(renderedComponent);
    changePageContent(renderedComponent.innerHTML);
    localStorage.clear();
  });
}
// const​ toDoData​ = [{
//   ​
//   id​: ​1​,
//   ​text​: ​ 'Сделать тестовое задание'​,
//   ​isActive​: ​true
// }];

// function​ getData​(filters) {
//   ​ // logic with filters
//   ​
//   return new​ Promise​.​resolve​(​toDoData​);
// }