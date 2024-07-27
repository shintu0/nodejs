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
