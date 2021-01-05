// array_name.slice(s, e) 
// arg1 = starting index 
// arg2 = ending index (by default last index )
// returns  new array 
// The changes do not reflect in the original array. 
const cars=['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
const new_cars=cars.slice(1,4); 
console.log(new_cars)
console.log(cars)

// array_name.splice(i, n, item 1, item 2, .....item n)
// arg1 starting index
// arg2 number of element to be removed (0 in case nthing to pupUp)
// arg2...so On --> item to added at specified index
// the changes reflect in orignal array


cars.splice(2, 0, 'ambassedor', 'BMW', 'Audi'); 

console.log( "After splice orinal array :",cars)