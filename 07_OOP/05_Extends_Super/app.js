class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} eats`;
    }
}


class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age); // this will call the constructor from Pet (it is going to be a reference to the super class)
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOW!';
    }
}


class Dog extends Pet {

    bark() {
        return 'WOOF!';
    }

    eat() { // this will overwrite the eat from the Pet 
        return `${this.name} scarfs his food`;
    }
}

// these are going to use the constructor from Pet (if they don't find one in their class)
const cat = new Cat('Blue', 5);
const dog = new Dog('Nero', 10);

console.log(cat.eat());
console.log(dog.eat());