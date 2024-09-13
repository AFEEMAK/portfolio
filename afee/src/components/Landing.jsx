import { motion } from 'framer-motion'
import React from 'react'
import Footer from './Footer/Footer'

function Landing({loading}) {
    
  return (
    <>
    <motion.div 
    initial={{borderRadius: loading ? '50px': '0'}}
    animate={{borderRadius: loading ? '50px': '0'}}
    transition={{ease : [0.76, 0, 0.24, 1],duration: 1.5}}
    className={`w-full h-screen bg-zinc-200 pt-1`}>
        <div className='flex justify-between'>

            <div className="textstructure mt-32 px-20 w-full">
                {["afee","maknojia","Developer"].map((item,index)=>{
                    return  (
                        <div  key={index} className="masker">
                        <div className='w-fit flex items-center'>
                            {index === 1 && (<motion.div initial={{width:'0'}} animate={{width:'8vw'}} transition={{ease : [0.76, 0, 0.24, 1],duration: 1,delay:3}}  className='w-[8vw] h-[6vw] relative top-[1vw] bg-red-500'></motion.div>)}   
                            <h1 className='lowercase text-[10vw] font-["Familjen_Grotesk"] leading-[7.2vw] tracking-tighter font-semibold'>{item}</h1>
                        </div>
                    </div>)
                })}
            
            </div>
            <motion.div
            className='flex items-end w-[450px] font-semibold pr-20'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeIn', duration: 1, delay: 1.5 }}
          >
            <p className='self-end font-["Familjen_Grotesk"] text-pretty'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              animi nobis esse magnam labore vitae maxime corporis officia,
              maiores voluptatibus! asda sd asdasdasda adds
            </p>
          </motion.div>
           
        </div>
        <div className="border-t-[1px] border-zinc-400 mt-32 flex justify-between items-center py-5 px-20">
            {['for public and private companies', 'Scroll'].map((item,index)=>(
                <motion.p key={index} 
                
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 + index * 0.1, ease: 'easeOut' }} className='text-md font-regular tracking-tight leading-none font-["Familjen_Grotesk"]'>{item}</motion.p>
            ))}
        </div>
    </motion.div>
        {/* <Footer/> */}
            </>
  )
}

export default Landing