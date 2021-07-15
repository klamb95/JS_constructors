const Pet = function (name, spieces) {
    this.name = name;
    this.spieces = spieces;
};

Pet.prototype.eat = function (food) {
    console.log(`${this.name} ate a ${food}`);
};

module.exports = Pet;