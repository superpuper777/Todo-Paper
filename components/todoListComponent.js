export default function todoModule() {
  class TodoListComponent {
    constructor(anchor, data) {
      this.options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      this.data = data;
      console.log(this.data[0].text)
      if (anchor) {
        this.anchor = anchor;
        this.anchor.innerHTML = this.render();
      }

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
          <div class="todolist__item_wrapper">
          <div class="todolist__item">
              <input
                type="radio"
                name="task_completed"
                id="completedTask"
                class="todolist__item_radio"
              />
              ${this.data.map((item) => `
              <label for="completedTask" class="task_name">${item.text}</label>
              `).join('')  
              }
            </div>

            <span>${new Date().toLocaleDateString('ru-RU', this.options)}</span>
          </div>
            
          </div>

          <div class="todolist__current-task-input">
            <input type="text" class="todolist__input createTodo" />
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