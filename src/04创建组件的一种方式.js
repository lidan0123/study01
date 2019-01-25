// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'
//第一种创建组件的方式
function Hello(props){
//如果 在一个组件中return一个null,则表示此组件是空的，什么都不会渲染
// return null
//在组件中，必须返回一个 合法的jsx虚拟DOM元素

 console.log(props)

    return <div>这是一个Hello组件---{props.name} ---{props.age} ---{props.gender}</div>
}
const dog = {
  name:'大黄',
  age:3,
  gender:'雄'
}

// 3. 调用 render 函数渲染   jsx  XML 比 HTML 严格多了

ReactDOM.render(<div>
  123
  {/*直接把组件的名称，以标签形式，丢到页面上即可 */}
   {/*<Hello name ={dog.name} age = {dog.age} gender = {dog.gender}></Hello>*/}
   <Hello {...dog}></Hello>
    </div>, document.getElementById('app'))