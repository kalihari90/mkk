const mobileNav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".hamburger__button");
const navLogo = document.querySelector(".logo__img");

// BURGER ICON - switch mobile navigation on/off
burgerBtn.addEventListener("click", () => {
	mobileNav.classList.toggle("active");
});

burgerBtn.addEventListener("click", () => {
	const isOpened = burgerBtn.getAttribute("aria-expanded");
	if (isOpened === "false") {
		burgerBtn.setAttribute("aria-expanded", "true");
	} else {
		burgerBtn.setAttribute("aria-expanded", "false");
	}
});

// MOBILE NAV - close navigation after click anywhere on it
mobileNav.addEventListener("click", () => {
	mobileNav.classList.remove("active");
});

mobileNav.addEventListener("click", () => {
	const isOpened = burgerBtn.getAttribute("aria-expanded");
	if (isOpened === "true") {
		burgerBtn.setAttribute("aria-expanded", "false");
	}
});

// LOGO - close navigation after click
navLogo.addEventListener("click", () => {
	mobileNav.classList.remove("active");
});

navLogo.addEventListener("click", () => {
	const isOpened = burgerBtn.getAttribute("aria-expanded");
	if (isOpened === "true") {
		burgerBtn.setAttribute("aria-expanded", "false");
	}
});
