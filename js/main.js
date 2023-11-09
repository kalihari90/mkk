const mobileNav = document.querySelector(".nav")
const burgerBtn = document.querySelector(".hamburger")
const buttonOne = document.querySelector(".button-one")

burgerBtn.addEventListener("click", function () {
    mobileNav.classList.toggle("active")
})

buttonOne.addEventListener("click", () => {
    const isOpened = buttonOne.getAttribute("aria-expanded");
    if (isOpened === "false") {
        buttonOne.setAttribute("aria-expanded", "true")
    } else {
        buttonOne.setAttribute("aria-expanded", "false")
    }
})