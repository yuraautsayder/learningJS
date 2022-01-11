// this

 const person = {
    userName: 'imya',
    age: 30,

    sayHi: function (name) {
        console.log(this)
        console.log(`Privet, ${name}, menya zovit ${this.userName}` );
    }
 }

 person.sayHi('toster')