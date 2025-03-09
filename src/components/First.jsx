import React,{useRef} from "react"
import {motion,useScroll, useTransform} from 'framer-motion'
import Photo from "./Photo";

import About from "./About";

const First = () => {
    const ref =useRef(null);
const {scrollYProgress} = useScroll({
target:ref,
offset:["start start", "end start"],
});
const opacityY= useTransform(scrollYProgress , [0,1],["100%","0%"]);
const scaleY= useTransform(scrollYProgress , [0.5,1],["100%","0%"]);
  return (
    <motion.div 
    className="photo6"
    ref={ref}
    style={{
        opacity:opacityY,
        scale:scaleY
    }}
    >
        <Photo></Photo>
        <About></About>
    </motion.div>
  )
}

export default First