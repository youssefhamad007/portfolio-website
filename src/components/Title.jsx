import {motion,useScroll, useTransform} from 'framer-motion'
import React,{useRef} from "react"
import './Title.css'
const section_height=1500;
const Title = () => {
    const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [ 400, section_height-400 ],[1,0])
    const scale = useTransform(scrollY, [400, section_height + 500 ],["100%","0%"])

const ref =useRef(null);
const {scrollYProgress} = useScroll({
target:ref,
offset:["start start", "end start"],
});
const backgoundY= useTransform(scrollYProgress,[0,1],["0%","100%"]);
const textY= useTransform(scrollYProgress , [0,1],["0%","400%"]);
const opacityY= useTransform(scrollYProgress,[0,1],["100%","0%"]);
const scaleY= useTransform(scrollYProgress,[.5,1],["100%","0%"]);

return (
    <motion.div className="d-grid justify-content-center sec1" ref={ref} style={{
        opacity:opacityY,
        scale:scaleY,
        
    }}>
        <motion.p class="poppins h1 a" id="ph"  
        style={{
        y:textY,
        }}
        >Frontend React Web Developer</motion.p>
        <motion.div className='one'
        style={{
        y:backgoundY
    }}
        ></motion.div>
        <motion.div className='two' style={{
        }}></motion.div>
    </motion.div>
)
}

export default Title