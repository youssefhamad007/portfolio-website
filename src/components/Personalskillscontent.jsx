import {motion,useScroll, useTransform} from 'framer-motion'
import React,{useRef} from "react"
import './Personalskills.css'

const section_height=1500;
const Personalskillscontent = () => {
    const {scrollY} = useScroll();
return (
    <motion.div className="d-flex justify-content-evenly skills" 
        initial={{ y: 300, opacity:0 }}
        whileInView={{ y: 0, opacity:1 }}
        transition={{ease: "easeInOut",duration: 1}}>

        <motion.div className="container" 
        initial={{ x: -300, opacity:0 }}
        whileInView={{ x: 0, opacity:1,rotate:360 }}
        transition={{ease: "easeInOut",duration: 1}}>
                <motion.div data-text="UX Design"  className="glass" whileHover={{scale:1.2,zIndex:50
                }}
                whileTap={{scale:1.2,zIndex:50}}>
                    <p className="h3 f ">Crafting user centered experience with a focus on usability</p>
                </motion.div>
                <motion.div data-text="Frontend React"  className="glass" whileHover={{scale:1.2,zIndex:50
                }}whileTap={{scale:1.2,zIndex:50}}>
                    <p className="h3 f "> Building responsive and high-performance web applications.</p>
                </motion.div>
                <motion.div data-text="UI Design"  className="glass" whileHover={{scale:1.2,zIndex:50
                }}whileTap={{scale:1.2,zIndex:50}}>
                    <p className="h3 f "> Designing clean, modern, and intuitive interfaces</p>
                </motion.div>
                <motion.div data-text="Back End"  className="glass" whileHover={{scale:1.2,
                zIndex:50
                }}whileTap={{scale:1.2,zIndex:50}}>
                    <p className="h3 f "> Familiar with backend concepts and API integration</p>
                </motion.div>
                <motion.div data-text="Time Managing"  className="glass" whileHover={{scale:1.2,zIndex:50
                }}whileTap={{scale:1.2,zIndex:50}}>
                    <p className="h3 f "> prioritizing tasks to boost productivity and reduce stress.</p>
                </motion.div>
                <motion.div data-text="Problem Solving"  className="glass" whileHover={{scale:1.2,zIndex:50
                }}whileTap={{scale:1.2,zIndex:50}}>
                    <p className="h3 f ">analyzing issues and finding effective solutions efficiently</p>
                </motion.div>
                <motion.div data-text="Presenting"  className="glass" whileHover={{scale:1.2,zIndex:50
                }}whileTap={{scale:1.2,zIndex:50}}>
                    <p className="h3 f "> communicating ideas clearly and engagingly to an audience</p>
                </motion.div>
                <motion.div data-text="Bootstrap"  className="glass " whileHover={{scale:1.2,zIndex:50
                }}whileTap={{scale:1.2,zIndex:50}}>
                    <p className="h3 f "> Building Responsive Websites Quickly</p>
                </motion.div>
                <motion.div data-text="Animation"  className="glass" 
                whileHover={{scale:1.2,zIndex:50
                }}whileTap={{scale:1.2,zIndex:50}}
                >
                    <p className="h3 f "> Using Framer-Motion for Makeing Stunning and Smooth Animations </p>
                </motion.div>
            </motion.div >
            
    </motion.div>
)
}

export default Personalskillscontent