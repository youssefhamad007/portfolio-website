
import Projects from './Projects'
import Card from './Projects3dcard'
import './Projects.css'
import React,{useRef} from "react"
import {motion,useScroll, useTransform} from 'framer-motion'
const section_height=1500;
const Proj = () => {
    const {scrollY} = useScroll();
  const opacity = useTransform(scrollY, [ section_height+2000, section_height+2500],[1,0])
  const scale = useTransform(scrollY, [0, section_height+1800 ],["0%","100%"])
const ref =useRef(null);
const {scrollYProgress} = useScroll({
target:ref,
offset:["start start", "end start"],
});
const textY= useTransform(scrollYProgress , [0.5,1],["0%","-100%"]);
const scaleY= useTransform(scrollYProgress , [0.5,1],["100%","0%"]);
const opacityY= useTransform(scrollYProgress ,[0,1],["100%","0%"])
  return (
    <motion.div 
    className='photo8' id='Projects'
    ref={ref}
    style={{
     opacity:opacityY,
      scale:scaleY
    }}
    >
        <Projects></Projects>
        <Card></Card>
    </motion.div>
  )
}

export default Proj