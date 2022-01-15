// классы. контрукторы объектов 

class Person {
    constructor(userName, age, isMarried) {
        this.userName = userName;
        this.age = age;
        this.isMarried = isMarried;
    }

    sayHi(name) {
        console.log(`privet, ${name}! poshel nahuy ot ${this.userName}`)
    }
}

const person1 = new Person('mark', 30, false);
const person2 = new Person('troy', 30, true);

console.log(person1)
console.log(person2)
person1.sayHi('ahuel')