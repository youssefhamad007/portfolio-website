import {motion,useScroll, useTransform} from 'framer-motion'
import React,{useRef} from "react"
import './About.css'
import FallingText from './Fallen';
const section_height=1500;
const About = () => {
  const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [ section_height,section_height + 500],[1,0])
  
  return (
    <motion.div className="d-flex justify-content-evenly section2" 
    style={{
      opacity,
    }}
    >
          
        <motion.p className="poppins p"
        
        initial={{ y: 300, opacity:0 }}
        whileInView={{ y: 0, opacity:1 }}
        transition={{ease: "easeInOut",duration: 1}}
        exit={{opacity: 0}}
        >
          <FallingText
      text={`Hi,I’m Youssef Ahmed Hamad, a Frontend React Developer
      passionate about creating user-friendly, responsive web
      applications. I enjoy blending design and technology to bring ideas
      to life, always aiming for impactful and seamless digital
      experiences. When I’m not coding, you’ll find me playing tactical
      games, discovering new AI tools and trying them to stay inspired.I’m a 
      Frontend React Developer who loves
      blending creativity with technology to build
      engaging web experiences. My focus is on
      creating responsive, high-performance
      applications that not only look great but work
      flawlessly. With a knack for design and a
      problem-solving mindset, I’m passionate about
      crafting innovative digital products that make
      a real impact.`}
      highlightWords={["React", "Youssef", "Ahmed", "Hamad", "responsive","impactful"]}
      highlightClass="highlighted"
      trigger="click"
      backgroundColor="transparent"
      wireframes={false}
      fontSize='1.7vw'
      gravity={0.56}
      mouseConstraintStiffness={0.9}
      ></FallingText>
            </motion.p>
    </motion.div>
  )
}

export default About