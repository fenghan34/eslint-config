const foo = 1

const bar = (x: string, foo: string) => {
  return foo
}

type Fn = typeof bar

const baz: Fn = () => {}

const person: Record<string, unknown> = {
  name: 'jack',
  age: 20,
}

const { a, ...rest } = person

const p: Promise<number> = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000)
})

p.then((v) => {
  console.log(v)
}).finally(() => {})
