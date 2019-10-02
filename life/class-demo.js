'use strict';

/* class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }

    getDistanceTo(point) {
        const sqr = x => x * x;
        const sqrt = Math.sqrt;

        const tmp = sqr(point.x - this.x) + sqr(point.y - this.y);
        return sqrt(tmp);
    }

    logThis() {
        console.log(this);
    }

}

const pointA = new Point(0, 0);
const pointB = new Point(3, 3);

pointA.move(-1, -1);
pointB.move(2, 2);

console.log(pointA);
console.log(pointB);

const distange = pointA.getDistanceTo(pointB);
console.log(distange);

console.log('-'.repeat(20));
const logThis = pointB.logThis;

pointB.logThis();
logThis();
logThis.call(123);

pointA.move.call(pointB, 200, 300);
console.log(pointA);
console.log(pointB);

console.log('-'.repeat(20));
console.log(pointA.__proto__.move);
 */