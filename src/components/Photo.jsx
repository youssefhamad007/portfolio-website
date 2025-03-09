import {motion,useScroll, useTransform} from 'framer-motion'
import React,{useRef} from "react"
import './Photo.css'
const section_height=1500;
const Photo = () => {
  const ref =useRef(null);
const {scrollYProgress} = useScroll({
target:ref,
offset:["start start", "end start"],
});
  const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [ section_height-200, 1000 ],[1,0])
    const width = useTransform(scrollY, [section_height, 800  ],["100%","0%"])
    const backgroundSize = useTransform(scrollY, [-10, section_height-400 ],["-200%","100%"])
    const textY= useTransform(scrollYProgress , [1,0],["0%","50%"]);
  return (
    <motion.div className="section1 d-grid justify-content-center" id="About-Me" >
        <motion.div className="ph image-container"
        initial={{ y: 300, opacity:0 }}
        whileInView={{ y: 0, opacity:1 }}
        transition={{ease: "easeInOut",duration: 1}}
        whileTap={{scale:3,y:200}}
        
        >
          
        </motion.div>
    </motion.div>
  )
}

export default Photo