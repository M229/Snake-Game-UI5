sap.ui.define([
    "sap/ui/base/Object"
], function (Object) {
    "use strict";
    return Object.extend("sap.ui.demo.basicTemplate.Objects", {
        constructor: function (canvas, snake, color) {
            while (true) {
                var isTouching = false;
                this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size;
                this.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size;
                for (var i = 0; i < snake.tail.length; i++) {
                    if (snake.tail[i].x === this.x && snake.tail[i].y === this.y) {
                        isTouching = true;
                    }
                }
                if (!isTouching) {
                    break;
                }
            }
            this.color = color;
            this.size = snake.size;
            console.log(this.x, this.y);
        }
    });
});