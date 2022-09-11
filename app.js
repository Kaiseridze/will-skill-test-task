const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const button = document.querySelector(".purchase__button");

burger.addEventListener("click", () => {
	nav.classList.contains("visible")
		? nav.classList.remove("visible")
		: nav.classList.add("visible");
});

button.addEventListener("click", () => {
	alert("Заказ успешно совершен!");
});
