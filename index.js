// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return 2 * this.radius;
    }

    set diameter(newDiam) {
        this.radius = newDiam / 2;
    }

    get circumference() {
        return 2 * Math.PI * this.radius;
    }

    set circumference(newCirc) {
        this.radius = (newCirc / Math.PI) / 2;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }

    set area(newArea) {
        this.radius = Math.sqrt(newArea / Math.PI);
    };
}