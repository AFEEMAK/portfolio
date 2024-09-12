import React from 'react'
import {useFeatureStore} from './store'


function Card({gradient, children, id}) {
    const inViewFeature = useFeatureStore((state)=> state.inViewFeature)
  return (
    <div className={`absolute inset-0 h-full w-full rounded-2xl transition-all duration-[500ms] bg-gradient-to-br ${gradient} ${ inViewFeature === id ? 'opacity-1' : 'opacity-0'}`}>{children}</div>
  )
}

export const Todo1 = ({id}) =>{
    return(
    <Card id={id} gradient={'from-[#f7f0ff] to-[#a78afe]'}>
        <span/>
    </Card>
    )
}
export const Todo2 = ({id}) =>{
    return(
    <Card id={id} gradient={'from-[#f5fbff] to-[#addeff]'}>
        <span/>
    </Card>
    )
}
export const Todo3 = ({id}) =>{
    return(
    <Card id={id} gradient={'from-[#f5fff7] to-[#adf8ff]'}>
        <span/>
    </Card>
    )
}
export const Todo4 = ({id}) =>{
    return(
    <Card id={id} gradient={'from-[#f7fff5] to-[#adffd8]'}>
        <span/>
    </Card>
    )
}


