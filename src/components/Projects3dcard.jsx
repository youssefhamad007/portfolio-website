import {motion,useScroll, useTransform} from 'framer-motion'
import React,{useRef} from "react"
import styled from 'styled-components';
import './Projects.css'
const section_height=1500;
const Card = () => {
    const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [ section_height+2300,section_height + 2600],[1,0])
  return (
    <motion.div class="d-flex justify-content-evenly section3 "
    initial={{ y: 300, opacity:0 }}
    whileInView={{ y: 0, opacity:1 }}
    transition={{ease: "easeInOut",duration: 1}}
    >
    <StyledWrapper>
    <div className="parent">
        <div className="card">
        <div className="content-box">
            <span className="card-title">Clothes shopping site</span>
            <span className="see-more">See More</span>
        </div>
        <div className="date-box">
            <span className="month">March</span>
            <span className="date">3</span>
        </div>
        </div>
    </div>
    </StyledWrapper>
    <StyledWrapper>
    <div className="parent parent2">
        <div className="card">
        <div className="content-box">
            <span className="card-title">Flight booking website</span>
            <span className="see-more">See More</span>
        </div>
        <div className="date-box">
            <span className="month">Augest</span>
            <span className="date">20</span>
        </div>
        </div>
    </div>
    </StyledWrapper>
    <StyledWrapper>
    <div className="parent parent3">
        <div className="card">
        <div className="content-box">
            <span className="card-title">Portfolio Website bro</span>
            <span className="see-more">See More</span>
        </div>
        <div className="date-box">
            <span className="month">May</span>
            <span className="date">8</span>
        </div>
        </div>
    </div>
    </StyledWrapper>
    <StyledWrapper>
    <div className="parent parent4">
        <div className="card">
        <div className="content-box">
            <span className="card-title">Interactive To-Do List</span>
            <span className="see-more">See More</span>
        </div>
        <div className="date-box">
            <span className="month">JUNE</span>
            <span className="date">29</span>
        </div>
        </div>
    </div>
    </StyledWrapper>
    </motion.div>
);
}

const StyledWrapper = styled.div``;

export default Card;
