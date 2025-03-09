import React,{useRef} from 'react'
import {motion,useScroll,useTransform} from 'framer-motion'
import Contact from './Contact'
import Contactcontent from './Contactcontent'
const Maincontact = () => {
  return (
    <motion.div className='photo10' id="Contact">
        <Contact></Contact>
        
    </motion.div>
  )
}

export default Maincontact