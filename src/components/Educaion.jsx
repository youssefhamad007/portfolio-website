import {motion,useScroll, useTransform} from 'framer-motion'
import React,{useRef} from "react"
import './Education.css'
const section_height=1500;
const Educaion = () => {
  const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [ section_height+800,section_height + 1000],[1,0])
  return (
    <div id="Education">
    <motion.div className="d-flex justify-content-center" 
    style={{opacity}}
    
    initial={{ y: 300, opacity:0 }}
        whileInView={{ y: 0, opacity:1 }}
        transition={{ease: "easeInOut",duration: 1}}
        exit={{opacity: 0}}>
        <motion.p className="poppins h1 j"   >Education</motion.p>
    </motion.div>
    </div>
  )
}

export default Educaion