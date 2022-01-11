// for in обход объектов циклов -- for in может обходить неитерируемые объекты

 const person = {
    userName: 'imya',
    age: 30,

    sayHi: function (name) {
        console.log(this)
        console.log(`Privet, ${name}, menya zovit ${this.userName}` );
    }
 }

for (let key in person) {
    console.log(key )
}

// ньюанс const и изменение объекта или массива 


const personTest = {
    userName: 'imya',
    age: 30,
}

personTest.prof = "tosterEbaniy";
console.log(personTest)