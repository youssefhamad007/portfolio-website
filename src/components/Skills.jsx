import React,{useRef} from "react"
import {motion,useScroll, useTransform} from 'framer-motion'
const section_height=1500;
import Personalskills from './Personalskills'
import Personalskillscontent from './Personalskillscontent'

const Skills = () => {
    const {scrollY} = useScroll();
  const opacity = useTransform(scrollY, [ section_height+3000, section_height+3800],[1,0])
  const scale = useTransform(scrollY, [0, section_height+2700 ],["-40%","100%"])
const ref =useRef(null);
const {scrollYProgress} = useScroll({
target:ref,
offset:["start start", "end start"],
});
const opacityY= useTransform(scrollYProgress , [0,1],["100%","0%"]);
const scaleY= useTransform(scrollYProgress , [0.5,1],["100%","0%"]);

  return (
    <motion.div className='photo9'
    ref={ref}
    style={{
    opacity:opacityY,
    scale:scaleY,
    }} id="Personal-Sklills" >
    <Personalskills></Personalskills>
    <Personalskillscontent></Personalskillscontent>
    </motion.div>
  )
}

export default Skills