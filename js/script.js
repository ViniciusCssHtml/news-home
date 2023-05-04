function menuMobile() {
  const button = document.querySelector(".container");
  const nav = document.querySelector(".navegacao");

  button.addEventListener("touchstart", btnClick);
  button.addEventListener("click", btnClick);
  function btnClick() {
    this.classList.toggle("change");
    this.classList.toggle("active");
    nav.classList.toggle("active");
  }
  nav.addEventListener("click", navClick);
  nav.addEventListener("touchstart", navClick);
  function navClick(event) {
    event.stopPropagation();
    outsideClick(this, () => {
      this.classList.remove("active");
      button.classList.remove("change");
      button.classList.remove("active");
    });
  }

  function outsideClick(element, callback) {
    const html = document.documentElement;
    html.addEventListener("click", handleOutsideClick);
    html.addEventListener("touchstart", handleOutsideClick);
    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        html.removeEventListener("click", handleOutsideClick);
        html.removeEventListener("touchstart", handleOutsideClick);
        callback();
      }
    }
  }
}
menuMobile();
