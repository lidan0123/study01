function Person(name,age){
this.name = name
this.age = age
}
//info属性，直接挂载给了构造函数，所以他是静态属性
Person.info = 'aaa'

//这是实例方法
Person.prototype.say = function(){
    console.log('这是Person 的实例方法')
}
//静态方法
Person.show = function(){
    console.log('这是Person 的静态show方法')
}

const p1 = new Person('王多多' ,18)
console.log(p1)
p1.say(0) //这是实例方法
Person.show()




//-------------分界线------------------------------








//创建一个动物类
//注意1：在class的{}区间内，只能写构造器，静态方法和静态属性，实例方法
//注意2：class关键字内部，还是用原来的配方实现的，所以说，我们把class关键字称作 语法糖。
class Animal{
    //这是类中的构造器，如果我们程序员没有手动指定构造器，那么可以认为类内部有隐形的，看不见的，空构造器，类似于constructor(){}
    //构造器作用，每当new 这个类的时候，必然会优先执行构造器中的代码
    constructor(name,age){
        //实例属性
       this.name = name
       this.age = age
        }
    //在class内部，通过static修饰的属性，就是静态属性
    static info ="eee" //(今后用的不多)
    
    //这是动物的实例方法，经常用
    jiao(){
        console.log('动物的实例方法')
    }
    
    
    static  show(){
        console.log('动物的静态方法，用的不多')
    }
    
    
    
    
    }
    
    
    const al = new Animal('大黄', 3)
    console.log(al)
    //console.log(al.name) //实例属性
    //console.log(al.age)  //实例属性
    console.log(Animal.info) // info是Animal的静态属性
    Animal.show()