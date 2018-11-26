window.addEventListener('DOMContentLoaded', function() {
	//инфа для работы
	let products = document.querySelectorAll('.product'),
		buttons = document.getElementsByTagName("button"),
		open = document.getElementsByClassName("open")[0];
	//функция создания корзины
	function createCart(){
		//элементы корзины
		let cart = document.createElement("div"),
			field = document.createElement("div"),
			heading  = document.createElement('h2'),
			close = document.createElement("button");
			//добавили классы элементам
		cart.classList.add("cart"),
		field.classList.add("cart-field"), 
		close.classList.add('close');
		//добавили текст элементам
		close.textContent = "Закрыть";
		heading.textContent = "В нашей корзине";
		//добавили элементы на страницу
		document.body.appendChild(cart);
		cart.appendChild(heading);
		cart.appendChild(field);
		cart.appendChild(close);

	}

	createCart();

	let field = document.querySelector('.cart-field'),
		cart = document.querySelector('.cart'),
		close = document.querySelector('.close');

	for (let i = 0; i < buttons.length; i++) {
		// вешаем обработчик события клика на каждую из кнопок
		buttons[i].addEventListener('click', function() {
			// создали копию
			let item = products[i].cloneNode(true),
				btn = item.querySelector('button');

			btn.remove();
			field.appendChild(item);
			products[i].remove();
		})
	}

	function openCart() {
		cart.style.display = "block"
	};
	function closeCart() {
		cart.style.display = "none"
	};

	open.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);

	function  remove() {
		let remove = document.createElement('closeButton');
			closeButton.textContent = "Убрать";
	}

	for (let i = 0; i < closeButton.length; i++)  {

		closeButton[i].addEventListener('click', function() {

		let item = closeButton[i].cloneNode(true);
	};
};

});