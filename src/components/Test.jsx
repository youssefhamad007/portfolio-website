import {motion,useScroll, useTransform} from 'framer-motion'
import React,{useRef} from "react"


export default function Cop(){
    const ref =useRef(null);
    const {scrollYProgress} = useScroll({
target:ref,
offset:["start start", "end start"],
    });
    const backgoundY= useTransform(scrollYProgress,[0,1],["0%","100%"]);
    const textY= useTransform(scrollYProgress , [0,1],["0%","300%"]);
    return <div className="container" >
        <motion.h1 className="h1" 
        style={{
            y:textY
        }}
        >
            Parallax
        </motion.h1>
        <motion.div className='one' 
        style={{
            y:backgoundY
        }}
        >   
        </motion.div>
        <motion.div className='two'></motion.div>
    </div>
}