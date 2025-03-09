
import Educaion from './Educaion'
import Educationcontent from './Educationcontent'
import Card from './Flebcard'
import React,{useRef} from "react"
import {motion,useScroll, useTransform} from 'framer-motion'
import './Education.css'
import Education from '../assets/Education.png'
const section_height=1500;
const Educate = () => {
    const {scrollY} = useScroll();
  const opacity = useTransform(scrollY, [ section_height+1000, section_height+1700 ],[1,0])
  const scale = useTransform(scrollY, [0, section_height+750 ],["0%","100%"])
const ref =useRef(null);
const {scrollYProgress} = useScroll({
target:ref,
offset:["start start", "end start"],
});
const opacityY= useTransform(scrollYProgress , [0,1],["100%","0%"]);
const scaleY= useTransform(scrollYProgress , [0.5,1],["100%","0%"]);
  return (
    <motion.div 
    className='photo7'
    ref={ref}
    style={{
     opacity:opacityY,
      scale:scaleY,
    }}>
        <Educaion></Educaion>
        <Educationcontent></Educationcontent>
        <Card></Card>
    </motion.div>
  )
}

export default Educate