export default function todoModule() {
  class TodoListComponent {
    constructor(anchor, data) {

      if (anchor) {
        this.anchor = anchor;
        this.anchor.innerHTML = this.render();
      }
      this.data = data;
      console.log(this.data[0].text)
    }
    render() {
      return `
      <div class="todolist">
      <div class="todolist__filter-block">
        <div class="todolist__current-task__title"></div>
        <div class="todolist__search-input">
          <input
            type="text"
            class="todolist__input"
            placeholder="Поиск задачи..."
          />
          <button class="todolist__input-btn">Найти</button>
        </div>
        <div class="todolist__filter">
          <div class="todolist__filter-text">
            <p class="todolist__text_filter">Фильтр:</p>
          </div>
          <div class="todolist__filter_date">
            <p>Дата создания</p>
          </div>
        </div>
      </div>
      
      <div class="todolist__current-task-block">
        <div class="todolist__current-task__title">Мои задачи</div>
        <div class="todolist__tasks-content">
          <div class="todolist__items">
            <div class="todolist__item">
              <input
                type="radio"
                name="task_completed"
                id="completedTask"
                class="todolist__item_radio"
              />
              ${this.data ? `
              <label for="completedTask" class="task_name">${this.data[0].text}</label>
              ` : `
              <label for="completedTask" class="task_name">!@$@%#^$</label>
              `
              }
            </div>
          </div>

          <div class="todolist__current-task-input">
            <input type="text" class="todolist__input" />
            <div class="todolist__add-btn"></div>
          </div>
        </div>
        </div>

    <div class="todolist__completed-task-block">
        <div class="todolist__completed-task__title">
          Сделано
        </div>
        <div class="todolist__tasks-content">
          <div class="todolist__items">
            <div class="todolist__item">
              <img class="completed__icon"src="./images/icon-completed_task.png" alt="completed_icon">
              <div class="task_name">Повесить полку</div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
      `
    }
  }
  return {
    TodoListComponent
  };
}