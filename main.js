var list1 = [ 'Banana', 20, 'Apple', 12, 'Mango', 2, '1', 'Orange', 'Peach' ]
var list2 = [ 1, 'Apple', 5, 'Mango', 'Banana', 220, 12, 2, 'Orange', 'Peach', 1 ]
var list3 = [ 15, 'Orange', 'Apple',  1, 2, 4, 'Mango',  'Peach', 'Banana', ]

function dbSort(a){
    let num = a.filter(x => typeof x == 'number').sort((a,b) => a - b)
    let string = a.filter(x => typeof x == 'string').sort()
    return num.concat(string)
  }


console.log(dbSort(list1)) // => [2, 12, 20, '1', 'Apple', 'Banana', 'Mango', 'Orange', 'Peach']
console.log(dbSort(list2)) // => [1, 1, 2, 5, 12, 220, 'Apple', 'Banana','Mango', 'Orange','Peach']
console.log(dbSort(list3)) // => [1, 2, 4, 15, 'Apple', 'Banana', 'Mango', 'Orange', 'Peach']