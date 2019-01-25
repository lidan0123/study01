import React from 'react'
import ReactDOM from 'react-dom'

//创建虚拟DOM元素
const myh1 = React.createElement('h1',{id:"myh1",title:"this is a h1"},'这是一个h1')
const mydiv = React.createElement('div',null, '这是一个div',myh1)
//使用ReactDOM把虚拟DOM渲染到页面
ReactDOM.render(mydiv, document.getElementById('app'))