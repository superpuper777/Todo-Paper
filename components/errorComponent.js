export default function errorModule() {
  class ErrorComponent {
    constructor(anchor) {
      this.anchor = anchor;
      if (anchor) {
        this.anchor.innerHTML = this.render();
      }
      document.querySelector('footer').style.display = "none";
    }

    render() {
      return `
      <div class="form__wrapper">
      <div class="form__title">Туду</div>
      <div class="form__logo">
        <img src="./images/svg/logo.svg" alt="datamola-logo" class="logo-pic" />
      </div>
      <div class="error-message">
        <div class="error-message__title">
          <p class="error-message__title-text">Упс, возникла ошибка</p>
        </div>
        <div class="error-message__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
            auctor neque vitae tempus quam. Id venenatis a condimentum vitae
            sapien pellentesque habitant. Auctor neque vitae tempus quam
            pellentesque. Facilisis sed odio morbi quis commodo odio. Id cursus
            metus aliquam eleifend mi in nulla. Morbi tincidunt augue interdum
            velit euismod in pellentesque massa placerat. Purus ut faucibus
            pulvinar elementum integer enim. Purus sit amet volutpat consequat
            mauris nunc. Ac ut consequat semper viverra nam libero. Viverra
            maecenas accumsan lacus vel facilisis volutpat est velit egestas.
            Hac habitasse platea dictumst quisque sagittis purus sit amet. Eget
            duis at tellus at urna condimentum. Sit amet consectetur adipiscing
            elit pellentesque habitant morbi tristique. Ac turpis egestas
            maecenas pharetra convallis posuere morbi leo. Eget duis at tellus
            at urna condimentum mattis. Augue interdum velit euismod in
            pellentesque massa placerat duis ultricies. Vitae purus faucibus
            ornare suspendisse sed nisi lacus. Viverra mauris in aliquam sem
            fringilla ut morbi tincidunt augue. Fringilla ut morbi tincidunt
            augue interdum. Eget aliquet nibh praesent tristique magna sit amet.
          </p>
        </div>
        <div class="error-message__btn">
          <button class="error-btn">На главную</button>
        </div>
      </div>
    </div>
      `;
    }
  }

  return {
    ErrorComponent
  }
}