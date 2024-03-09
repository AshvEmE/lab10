class Character {
	constructor(name, type, level) {
		this.name = name
		this.type = type
		this.level = level
	}

	getName() {
		return this.name
	}

	setName(newName) {
		this.name = newName
	}

	getType() {
		return this.type
	}

	setType(newType) {
		this.type = newType
	}

	getLevel() {
		return this.level
	}

	setLevel(newLevel) {
		this.level = newLevel
	}

	move(x, y) {
		
	}
}

class Default extends Character {
	constructor(name, level) {
		super(name, 'Dafault Character', level)
	}
}


function Car(brand, model, year, color) {
	this.brand = brand
	this.model = model
	this.year = year
	this.color = color
}

Car.prototype.getBrand = function () {
	return this.brand
}

Car.prototype.getModel = function () {
	return this.model
}

Car.prototype.getYear = function () {
	return this.year
}

Car.prototype.getColor = function () {
	return this.color
}

Car.prototype.setColor = function (newColor) {
	this.color = newColor
}

Car.prototype.move = function (x, y) {
	
}

let car = new Car('Toyota', 'Camry', 2020, 'чорний');

const moveCar = Car.prototype.move.bind(car, 50, 100);
moveCar();

Car.prototype.move.call(car, 150, 200);

Car.prototype.move.apply(car, [250, 300]);