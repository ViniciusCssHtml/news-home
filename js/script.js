function menuMobile() {
  const button = document.querySelector(".container");
  const menu = document.querySelector(".navegacao");

  button.addEventListener("click", handleButtonClick);
  button.addEventListener("touchstart", handleButtonClick);

  function handleButtonClick(event) {
    if (event.type === "touchstart") event.preventDefault();
    event.stopPropagation();
    this.classList.toggle("change");
    this.classList.toggle("active");
    menu.classList.toggle("active");

    handleClickOutside(menu, () => {
      menu.classList.remove("active");
      button.classList.remove("active");
      button.classList.remove("change");
    });
  }

  function handleClickOutside(element, callback) {
    const html = document.documentElement;
    function handleHtmlClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute("data-target");
        html.removeEventListener("click", handleHtmlClick);
        html.removeEventListener("touchstart", handleHtmlClick);
        callback();
      }
    }
    if (!element.hasAttribute("data-target")) {
      html.addEventListener("click", handleHtmlClick);
      html.addEventListener("touchstart", handleHtmlClick);
      element.setAttribute("data-target", "");
    }
  }
}
menuMobile();
