import {motion,useScroll, useTransform} from 'framer-motion'
import React,{useRef} from "react"
import './Personalskills.css'
const section_height=1500;

const Personalskills = () => {
  const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [ section_height,section_height + 500],[1,0])
  return (
    <motion.div className="d-flex justify-content-center" 
    initial={{ y: 300, opacity:0 }}
        whileInView={{ y: 0, opacity:1 }}
        transition={{ease: "easeInOut",duration: 1}}
        exit={{opacity: 0}}>
        <motion.p className="h1 c e">Personal Skills</motion.p>
    </motion.div>
  )
}

export default Personalskills