sap.ui.define([
    "sap/ui/base/Object"
], function (Object) {
    "use strict";

    return Object.extend("sap.ui.demo.basicTemplate", {
        constructor: function (x, y, size) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.tail = [{ x: this.x, y: this.y }];
            this.rotateX = 0;
            this.rotateY = 1;
            this.color = "white";
        },

        move: function () {
            {
                var newRect;

                if (this.rotateX === 1) {
                    newRect = {
                        x: this.tail[this.tail.length - 1].x + this.size,
                        y: this.tail[this.tail.length - 1].y
                    }
                } else if (this.rotateX === -1) {
                    newRect = {
                        x: this.tail[this.tail.length - 1].x - this.size,
                        y: this.tail[this.tail.length - 1].y
                    }
                } else if (this.rotateY === 1) {
                    newRect = {
                        x: this.tail[this.tail.length - 1].x,
                        y: this.tail[this.tail.length - 1].y + this.size
                    }
                } else if (this.rotateY === -1) {
                    newRect = {
                        x: this.tail[this.tail.length - 1].x,
                        y: this.tail[this.tail.length - 1].y - this.size
                    }
                }
                this.tail.shift();
                this.tail.push(newRect);
            }
        }
    });
});