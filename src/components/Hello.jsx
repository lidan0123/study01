import React from 'react'




//第一种创建组件的方式
export default function Hello(props){
//如果 在一个组件中return一个null,则表示此组件是空的，什么都不会渲染
// return null
//在组件中，必须返回一个 合法的jsx虚拟DOM元素

 console.log(props)

    return <div>这是一个Hello组件---{props.name} ---{props.age} ---{props.gender}</div>
}

//把组件暴露出去
//export default Hello