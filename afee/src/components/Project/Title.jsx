import { useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { useFeatureStore } from './store.js'

function Title( {children, id}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {margin:'-50% 0px -50% 0px'})
    const setInViewFeature = useFeatureStore((state) => state.setInViewFeature)
    const inViewFeature = useFeatureStore((state)=> state.inViewFeature)
    useEffect(()=>{
        if(isInView){
            setInViewFeature(id)
        }
        if(!isInView && inViewFeature === id) {setInViewFeature(null)}
    }, [isInView, id ,setInViewFeature, inViewFeature])

  return (
    <p ref={ref}className={`lowercase py-16 font-heading lg:text-5xl md:text-3xl font-["Familjen_Grotesk"] font-bold transition-colors ${isInView ? 'text-black' : 'text-gray-300'}`}>{children}</p>
  )
}

export default Title