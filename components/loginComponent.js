export default function loginModule() {
  class LoginComponent {
    constructor(anchor) {
      this.anchor = anchor;
      if (anchor) {
        this.anchor.innerHTML = this.render();
      }
      document.querySelector('header').style.display = "none";
      document.querySelector('footer').style.display = "none";
    }

    render() {
      return `
      <div class="form__wrapper">
      <div class="form__title">Туду</div>
      <div class="form__logo">
        <img src="./images/svg/logo.svg" alt="datamola-logo" class="logo-pic" />
      </div>
      <div class="form">
        <div class="form__registration-link">Регистрация</div>
        <div class="input-text">
          <input
            type="text"
            class="form__input user-name"
            placeholder="Имя пользователя"
          />
        </div>
        <div class="input-text">
          <input
            type="password"
            class="form__input user-password"
            placeholder="Пароль"
          />
        </div>

        <button class="form__authorization-btn">Войти</button>
      </div>
    </div> 
        `;
    }
  }

  return {
    LoginComponent
  };
}