
function introduceMe (name: string, age: number) {
    return "hi my name is " + name + "and my age is " + age
}
let introduction = introduceMe("peter", 42)
console.log(introduction)

let list = ["James", "Peter", "Jakob", "Stine"]

for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}