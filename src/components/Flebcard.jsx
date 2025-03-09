import {motion,useScroll, useTransform} from 'framer-motion'
import React,{useRef} from "react"
import styled from 'styled-components';
import "./Education.css"
const section_height=1500;
const Card = () => {
  const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [ section_height+900,section_height+1600 ],[1,0])
    const ref = useRef(null)
    const {scrollYprogress} = useScroll({
      target:ref,
      offset:["staart start","end start"]
    })
  return (
    <motion.div class="d-flex justify-content-evenly section4 "             
    initial={{ y: 300, opacity:0 }}
    whileInView={{ y: 0, opacity:1 }}
    transition={{ease: "easeInOut",duration: 1}}
    >
    <motion.dev>
      <div className="container2">
        <div className="card2">
          <div className="front">
            <p className="front-heading" >Front End React <br/>web developer</p>
            <p>Hover Me</p>
          </div>
          <div className="back">
            <p className="back-heading">React</p>
            <p>Let Me</p>
          </div>
        </div>
      </div>
    </motion.dev>
    <motion.div >
      <div className="container2">
        <div className="card2">
          <div className="front">
            <p className="front-heading">IT Department</p>
            <p>Hover ME</p>
          </div>
          <div className="back back1">
            <p className="back-heading">NCTU</p>
            <p>Let Me</p>
          </div>
        </div>
      </div>
    </motion.div>
    </motion.div>
  );
}

const StyledWrapper = styled.div``;

export default Card;
