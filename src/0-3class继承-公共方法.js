class Person{
    constructor(name,age){
     this.name = name
     this.age = age
    }
    sayHello(){
        console.log('大家好')
    }
}

//子类，美国人
class American extends Person{

}

const a1 = new American('Jack', 20)
console.log(a1)
a1.sayHello()

//子类  中国人

class Chinese extends Person{
    constructor(){
        super()
    }
}
 
const b1 = new Chinese('张三',18)
console.log(b1)
b1.sayHello()