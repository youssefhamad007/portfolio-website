import Header from './components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import { useParallax } from 'react-scroll-parallax';
import "./General.css"
import {ReactLenis} from "lenis/dist/lenis-react";
import React from "react"
import Educate from './components/Educate';
import Proj from './components/Proj';
import Skills from './components/Skills';
import First from './components/First';
import Maincontact from './components/Maincontact';


function App() {
 
  return (
<ReactLenis root 
  options={{
      lerp:0.03,
  }}
    >
    <div className='containerMost' >
      <Header></Header>
      <Title ></Title>
      <First></First>
      <Educate></Educate>
      <Proj></Proj>
      <Skills></Skills>
      <Maincontact></Maincontact>
  </div>
</ReactLenis>
  );
}

export default App
