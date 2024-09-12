import React from 'react'
import Title from './Title'
import { Todo1, Todo2, Todo3, Todo4 } from './Card'

const FEATURES = [
  {
    title : 'Use your calendar as a todo list',
    id: 'todo-list1',
    card: Todo1
  },
  {
    title : 'Use your calendar as a todo list',
    id: 'todo-list2',
    card: Todo2
  },
  {
    title : 'Use your calendar as a todo list',
    id: 'todo-list3',
    card: Todo3
  },
  {
    title : 'Use your calendar as a todo list',
    id: 'todo-list4',
    card: Todo4
  },
]


function Project() {
  return (
    <div className='mx-auto my-52 max-w-6xl px-8'>

      <section className='w-full gap-20 flex items-start'>
        <div className='w-full py-[50vh]'>
          <ul>
            {FEATURES.map(feature=>(
              <li key={feature.id}><Title id={feature.id}>{feature.title}</Title></li>
            ))}
          </ul>
        </div>
        <div className='sticky w-full top-0 h-screen flex items-center p-10'>
          <div className='relative w-full aspect-square rounded-2xl bg-zinc-300'>
          {FEATURES.map(feature=>(
              <feature.card id={feature.id} key={feature.id}></feature.card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Project