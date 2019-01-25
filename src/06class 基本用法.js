function Person(name,age){
    this.name = name
    this.age = age
    }
    //info属性，直接挂载给了构造函数，所以他是静态属性
    Person.info = 'aaa'
    
    const p1 = new Person('王多多' ,18)
    console.log(p1)
    
    //-------------分界线------------------------------
    
    
    
    
    
    
    
    
    //创建一个动物类
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
        
        
        
        
        
        
        
        }
        
        
        const al = new Animal('大黄', 3)
        console.log(al)
        //console.log(al.name) //实例属性
        //console.log(al.age)  //实例属性
        console.log(Animal.info) // info是Animal的静态属性