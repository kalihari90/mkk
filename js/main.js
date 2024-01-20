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

// COUNTER - counting numbers animation

document.addEventListener("DOMContentLoaded", function () {
	const counters = document.querySelectorAll(".counter");

	const isElementInViewport = el => {
		const rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	};

	const handleScroll = () => {
		counters.forEach(counter => {
			if (isElementInViewport(counter)) {
				const target = +counter.getAttribute("data-target");
				const duration = +counter.getAttribute("data-duration") || 2;

				if (!counter.hasAttribute("data-animated")) {
					const updateCount = () => {
						const count = +counter.innerText;
						const speed = target / duration;

						if (count < target) {
							counter.innerText = Math.ceil(count + speed);
							setTimeout(updateCount, 1000 / 60);
						} else {
							counter.innerText = target;
							counter.removeAttribute("data-animated");
						}
					};

					updateCount();
					counter.setAttribute("data-animated", "true");
				}
			}
		});
	};

	// Uruchom funkcję handleScroll po przewinięciu strony
	window.addEventListener("scroll", handleScroll);

	// Uruchom funkcję handleScroll od razu, aby obsłużyć przypadki, gdy elementy są już w widoku przy załadowaniu strony
	handleScroll();
});
