const toDoData = [{
    id: 1,
    text: 'Сделать тестовое задание',
    isActive: true
  },
  {
    id: 2,
    text: 'Подвести итоги года',
    isActive: true
  },
  {
    id: 3,
    text: 'Покататься на коньках',
    isActive: true
  }
];

console.log(toDoData);
export default function todoService() {
  class TodoSrv {
    constructor() {}

    getData = () => {
      return new Promise((resolve, reject) => {
        resolve(toDoData)
      })
    }

    // getData().then((result) => console.log(result));

    addTodo = (todo) => {
      return new Promise((resolve, reject) => {
        let newToDoData = toDoData.push(todo);
        resolve(newToDoData);
        // console.log(newToDoData);
      })
    }


    // addTodo({
    //   id: 4,
    //   text: "New",
    //   isActive: true
    // });

    getTodo = (id) => {
      return new Promise((resolve, reject) => {
        resolve(toDoData.find((todo) => todo.id === id))
      })
    }

    // getTodo(4);


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