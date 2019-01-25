// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

//2，创建虚拟DOM元素
//const myh1 = React.createElement('h1',{id:"myh1",title:"this is a h1"},'这是一个h1')
//const mydiv = React.createElement('div',null, '这是一个div',myh1)
//const mydiv = React.createElement('div', null, '这是一个div元素')
const mydiv = <div id="mydiv" title="div aaa">
这是一个div123元素
<h2>这是个h2</h2>
</div>

// 3. 调用 render 函数渲染   jsx  XML 比 HTML 严格多了
ReactDOM.render(mydiv, document.getElementById('app'))