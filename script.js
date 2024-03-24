// Створення ігрового персонажа з використанням класів
class Character {
	constructor(name, type, level) {
		this.name = name 
		this.type = type 
		this.level = level 
	}

	// Метод отримання імені персонажа
	getName() {
		return this.name
	}

	// Метод встановлення імені персонажа
	setName(newName) {
		this.name = newName
	}

	// Метод отримання типу персонажа
	getType() {
		return this.type
	}

	// Метод встановлення типу персонажа
	setType(newType) {
		this.type = newType
	}

	// Метод отримання рівня персонажа
	getLevel() {
		return this.level
	}

	// Метод встановлення рівня персонажа
	setLevel(newLevel) {
		this.level = newLevel
	}

	// Метод переміщення персонажа
	move(x, y) {
		
	}
}

// Створення нащадка класу Character
class Default extends Character {
	constructor(name, level) {
		super(name, 'Default Character', level) 
	}
}

console.log('Створення ігрового персонажа та нащадка:')
const defaultCharacter = new Default('Боб', 5)
console.log(defaultCharacter)
console.log('-')
console.log('-')
console.log('-')

// Функція конструктор для автомобіля
function Car(brand, model, year, color) {
	this.brand = brand // Бренд автомобіля
	this.model = model // Модель автомобіля
	this.year = year // Рік випуску автомобіля
	this.color = color // Колір автомобіля
}

// Додавання методів до прототипу об'єкту Car
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
	return `Машина рухається до координат ${x}, ${y}` 
}

console.log("Створення об'єкта автомобіля та виклик його методів:")
let car = new Car('Toyota', 'Camry', 2020, 'чорний')
console.log(car)
console.log(car.getBrand())
console.log(car.getModel())
console.log(car.getYear())
console.log(car.getColor())
car.setColor('синій')
console.log(car.getColor())
console.log(car.move(100, 200))
console.log('-')
console.log('-')
console.log('-')

console.log('Використання методів .bind(), .call() та .apply():')
const moveCar = Car.prototype.move.bind(car, 50, 100)
console.log(moveCar())

Car.prototype.move.call(car, 150, 200)

Car.prototype.move.apply(car, [250, 300])
