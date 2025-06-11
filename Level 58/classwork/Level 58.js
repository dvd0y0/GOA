class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    calculateVolume() {
        return this.length * this.width * this.height;
    }
}

const cuboid = new Cuboid(5, 3, 2);

console.log(`The volume of the cuboid is: ${cuboid.calculateVolume()}`);