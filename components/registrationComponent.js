export default function registrationModule() {
  class RegistrationComponent {
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
        <div class="form__title-text">Регистрация</div>
        <div class="input-text">
          <input
            type="text"
            class="form__input user-name"
            placeholder="Введите имя"
          />
        </div>
        <div class="input-text">
          <input
            type="password"
            class="form__input user-password"
            placeholder="Введите пароль"
          />
        </div>
        <div class="input-text">
          <input
            type="password"
            class="form__input user-password"
            placeholder="Подтвердите пароль"
          />
        </div>

        <button class="form__authorization-btn">
          <p>Готово</p>
        </button>
      </div>
    </div>
        `;
    }
  }

  return {
    RegistrationComponent
  };
}