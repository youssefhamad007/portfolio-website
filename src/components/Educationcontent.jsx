import {motion,useScroll, useTransform} from 'framer-motion'
import React,{useRef} from "react"
import './Education.css'
import nctu from '../assets/depi.jpg'
import depi from '../assets/kevin-canlas-cFFEeHNZEqw-unsplash.jpg'
const section_height=1500;
const Educationcontent = () => {
  const {scrollY} = useScroll();
  const opacity = useTransform(scrollY, [ section_height+1000,section_height + 1200],[1,0])
  return (
    <motion.div className="d-flex justify-content-evenly" 
    style={{opacity}}
    initial={{ y: 300, opacity:0 }}
    whileInView={{ y: 0, opacity:1 }}
    transition={{ease: "easeInOut",duration: 1}}
    exit={{opacity: 0}}>
        <motion.p className="poppins h1 d" >2024-2024 <br/>
                    DEPI Course</motion.p>
                <motion.p className="poppins h1 d">
                2023-2026 <br/>
                    New Cairo <br/>Technological University
                </motion.p>
    </motion.div>
  )
}


export default Educationcontent