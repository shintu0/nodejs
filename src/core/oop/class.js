//Polymorphism when same class extended for multiple other classes
//abstraction when the complexity of a bank account's internal state (the balance) and provides a simple interface for interacting with it (deposit, withdraw, getBalance).
//Inheritance when class or interface can be extended along with properties
//Encapsulation when private data are encapsulated within class and can't be modified directly

class Animal {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    console.log(`I am ${this.name}`);
  }
}

class Dog extends Animal {
  constructor(name, species) {
    super(name);
    this.species = species;
  }
  speaks() {
    console.log(`I am ${this.name} from species ${this.species}`);
  }

  set setName(value) {
    this.name = value;
  }
  get getName() {
    return this.name;
  }
}

const sam = new Dog("Sam", "Amelia");

console.log(sam);

sam.setName = 1;
console.log(sam);

class MyClass {
  static className = "MyClass";

  static classMethod() {
    console.log("This is a static method.");
  }
  #privateProperty = "Private property";
  get privateProperty() {
    return this.#privateProperty;
  }
  #privateMethod() {
    console.log("This is a private method.");
  }
}

const obj = new MyClass();

console.log(MyClass.className);
MyClass.classMethod();
