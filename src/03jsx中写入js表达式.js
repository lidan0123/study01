// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'


//渲染数字
let a = 10
//渲染字符串
let art = "你好，中国"

const arrStr = ['柯南','毛利兰','小五郎','灰原哀']

// 3. 调用 render 函数渲染   jsx  XML 比 HTML 严格多了
//注意在React中   key要添加给被forEach 或 map 或 for循环直接控制的元素
ReactDOM.render(<div>
    {a + 2}
    <hr/>
    {art}
    <hr/>
    
    {arrStr.map(item => <div key ={item}><h3 >{item}</h3></div>)}
    </div>, document.getElementById('app'))