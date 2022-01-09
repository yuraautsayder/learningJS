// циклы

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log('Finish')

//обход массива циклом for 

const autoBrands = ['test1', 'test2', 'test3', 'test4',];


// for (let item of autoBrands) {
//     console.log(item)
// }

// obhod massiv forEach()

autoBrands.forEach(function(item, index){
    console.log(`${item} => ${index}`);
})