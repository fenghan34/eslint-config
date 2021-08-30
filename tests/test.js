const foo = 1

const bar = (x, foo) => {
  return foo
}

function baz() {}

var person = {
  name: 'jack',
  age: 20,
}

const { a, ...rest } = person

let p = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000)
})

p.then((v) => {
  console.log(v)
}).finally(() => {})
