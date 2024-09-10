import React from 'react'

export default function Content() {
  return (
    <div className='bg-zinc-800 py-8 px-12 h-full w-full flex items-center justify-between'>
        <Section2 />
        <Section1 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between flex-col justify-betweem w-[80%]  font-["Familjen_Grotesk"]'>
            <h1 className='text-[5vw] text-zinc-400 leading-[0.8] mt-20'>like what you see?</h1>
            <h1 className='text-[5vw] ml-[100px] text-zinc-100 leading-[0.8] mt-10'>let's work together</h1>
            <hr className='mt-16 mb-24'></hr>
            <div className="className">

            <p>EMail</p>
            <p>EMail</p>
            
            </div>
            
        </div>
    )
}

const Nav = () => {
    return (
        
            <div className='flex flex-col gap-2 items-center justify-center mr-[100px] mt-28'>
                <h3 className='mb-2 uppercase text-2xl text-zinc-300'>[socials]</h3>
                {['facebook','instagram','linkedin','github'].map((item,index)=><p className='text-zinc-300' key={index}>{item}</p>) }
                
            </div>
     
    )
}


