// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'
//导入Hello组件
//默认如果不做单独的配置的话  .jsx不能省略
//import Hello from './components/Hello'
import Hello from '@/components/Hello'



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