sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/commons/layout/AbsoluteLayout",
	"../Objects/Snake",
	"../Objects/Apple"
], function (Controller, AbsoluteLayout, Snake, Apple) {

	var canvas,
		snake,
		apple,
		canvasContext,
		frame,
		backgroundColor = "black";

	return Controller.extend("sap.ui.demo.basicTemplate.App", {

		onInit: function () {

		},

		onAfterRendering: function () {
			oJSON_State = this.getView().getModel("JSON_State");
			let bRendered = oJSON_State.getProperty("/isRendered");

			if (!bRendered) {
				frame = 0;
				canvas = $('canvas')[0]; // JQuery :^(
				canvasContext = canvas.getContext('2d');

				snake = new Snake(20, 20, 20);
				apple = new Apple(canvas, snake, "pink");

				oJSON_State.setProperty("/isRendered", true);

				this.gameLoop();
			}
		},

		gameLoop: function () {
			setInterval(() => {
				this.show();
			}, 1000/20);
		},

		update: function () {
			canvasContext.clearRect(0, 0, canvas.width, canvas.height);
			
			// console.log("0x: " + snake.tail[0].x + " 0y: " + snake.tail[0].y);
			snake.move();
			//eatApple();
			//checkHitWall();
		},

		show: function () {
			this.update();
			this.draw();
		},

		onPress: function () {
			this.createRect(10, 10, 100, 100, "red");
		},

		createRect: function (x, y, width, height, color) {
			canvasContext.fillStyle = color;
			canvasContext.fillRect(x, y, width, height);
		},

		backgroundBlink: function (color, delay, qty) {
			let counter = qty;
			let previousColor = backgroundColor;
			backgroundColor = color;
			new Promise((resolve, reject) => {
				setTimeout(() => {
					backgroundColor = previousColor;
					counter--;
					resolve(counter);
				}, delay);
			}).then((decrementedCounter) => {
				if (decrementedCounter > 0) {
					backgroundColor = previousColor;
					setTimeout(() => {
						backgroundBlink(color, delay, decrementedCounter);
					}, delay);
				}
			});
		},

		draw: function () {
			this.createRect(0, 0, canvas.width, canvas.height, backgroundColor);
			this.createRect(0, 0, canvas.width, canvas.height);
			snake.tail.forEach((item, index, arr) => {
				this.createRect(item.x + 2.5, item.y + 2.5, snake.size - 5, snake.size - 5, snake.color);
			});

			canvasContext.font = "20px Arial";
			canvasContext.fillStyle = "#00FF24";
			canvasContext.fillText("Score: " + (snake.tail.length - 1), canvas.width - 120, 18);
			this.createRect(apple.x, apple.y, apple.size, apple.size, apple.color);
			console.log(snake.tail[0].x, snake.tail[0].y);
		}

	});
});