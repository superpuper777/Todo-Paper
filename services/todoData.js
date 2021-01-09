const toDoData = [{
  id: 1,
  text: 'Сделать тестовое задание',
  isActive: true
}];

console.log(toDoData);
export default function todoService() {
  class TodoSrv {
    constructor() {}

    getData = () => {
      return new Promise((resolve, reject) => {
        resolve(toDoData)
      })
    }

    addTodo = (todo) => {
      return new Promise((resolve, reject) => {
        let newToDoData = toDoData.push(todo);
        resolve(newToDoData);
      })
    }

    getTodo = (id) => {
      return new Promise((resolve, reject) => {
        resolve(toDoData.find((todo) => todo.id === id))
      })
    }

    deleteTodo = (id) => {
      return new Promise((resolve, reject) => {
        resolve(toDoData.filter((todo) => todo.id !== id));
      })
    }

  }
  return {
    TodoSrv
  };
}