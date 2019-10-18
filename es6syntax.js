//Object declaration

//let obj = {}
let obj = {
    type:'alias'
}
// //Short declaration in single line

let demo = ['hey','welcome']

let ob = {
    name:'varsha',
    designation:'software developer'
}
if(Object.entries(ob).length) {
    console.log(ob)
}
//destructurning an obj into var

let {name,designation} = ob

console.log(`${name} ${designation}`)

let result = ({name,designation}) => {
    return `${name} ${designation}`
} 

result(ob)

//merging objects using spread operator
let a = {key1: 'value1', key2: 'value2'}
let b = {key3: 'value3', key4: 'value4'}
let c = {...a, ...b}

console.log(c)

//array declaration and check whether it is an array or not

let arr = [1,2,3,4,5,6]
console.log(Array.isArray(arr))

//iterating over an array using foreach
arr.forEach((element) => {
    console.log(element)
})

//iterating over an array using map

var res = arr.map((element) => {
    return element*element
})

console.log(res)

//use of backtick (template literal) instead of variable name directly

var str = 'Varsha'
console.log(`Hey!! ${str}`)

//Strings longer than 80 characters should be written across multiple lines using string concatenation.

let errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.'

console.log(errorMessage)

//arrow functions
let v = 'varsha'
let val = (name) => {
    return name
}
console.log(val(v))

//default parameters(place default parameter last)
let read = (n,profile='software developer') => {
    console.log(n,profile)
}
read('varsha')

//dot notation for accessing properties
let obj1 = {
    name:'varsha',
    profile:'software developer'
}
console.log(obj1.name)

//subscript notation [] for accessing properties with variable or when key has special symbol
let luke = {
    jedi: true,
    age: 28
  }
  
let getProp = (prop) => {
    return luke[prop]
  }
let isJedi = getProp('jedi')
console.log(isJedi)

//promises

let promisedemo = () => {
    return new Promise((resolve,reject) => {
        try{
            let x = 'hello'
            let y = 'hello'
            if(x === y)  resolve('same')
            else resolve('diffrent')
        }catch(e){
            return reject(e)
        }
    })
}
promisedemo()
.then(result => { console.log(result)})
.catch(error => { console.log(error)})

//ternary conditions
console.log('ternary conditions')
let value = (1==1)?console.log('true'):console.log('false')
console.log(value)

