import {motion,useScroll, useTransform} from 'framer-motion'
import React,{useRef} from "react"
import './Projects.css'
const section_height=1500;
const Projects = () => {
  
  const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [ section_height+2000,section_height + 2200],[1,0])
    const ref = useRef(null)
    const{scrollYProgress} = useScroll(
      {target:ref,
      offset:["start start", "end start"],
    });
    const opacityY = useTransform(scrollYProgress,[0,1],["100%","0%"])
  return (
    <div id='Projects'>
    <motion.div className="d-flex justify-content-center flight" 
    ref={ref} 
    initial={{ y: 300, opacity:0 }}
    whileInView={{ y: 0, opacity:1 }}
    transition={{ease: "easeInOut",duration: 1}}
    >
        <motion.p className="poppins c h1" 
            style={{opacity:opacityY}}
        >Projects</motion.p>
        </motion.div>
    </div>
  )
}

export default Projects