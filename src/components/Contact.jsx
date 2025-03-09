import {motion,useScroll, useTransform} from 'framer-motion'
import React,{useRef} from "react"
import './Contact.css'
const section_height=1500;
const Contact = () => {
  const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [ section_height,section_height + 500],[1,0])
  return (
    <motion.div className="d-flex justify-content-left last" 
      initial={{ y: 300, opacity:0 }}
        whileInView={{ y: 0, opacity:1 }}
        transition={{ease: "easeInOut",duration: 1}}
        >
        <motion.p className="poppins h1 l">Contact</motion.p>
        <div className="d-flex justify-content-left last ">
        <motion.p className='poppins h2 g '>Email</motion.p>
        <p className='h4 s poppins'>youssefhamad007@gmail.com </p>
        <a className='linked' href='https://mail.google.com/mail/u/0/' target='blank'>
        <button className='gm'>
        <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 48 48">
<path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
</svg>
  <span>Gmail</span>
</button>
</a>
        </div>
        <div className="d-flex justify-content-left last">
        <motion.p className='poppins h2 g'>LinkedIn</motion.p>
        <p className='h4 s poppins'>www.linkedin.com/in/youssef-hamad-uxui </p>
        <a className='linked' href='https://www.linkedin.com/in/youssef-hamad-uxui/'target='blank'>
        <button className='in'>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="currentColor"
    class="bi bi-twitter"
    viewBox="0 0 24 24"
  >
    <path
      d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"
    ></path>
  </svg>
  <span>LinkedIn</span>
</button>
</a>
        </div>
        <div className="d-flex justify-content-left last">
        <motion.p className='poppins h2 g'>Github</motion.p>
        <p className='h4 s poppins'>https://github.com/youssefhamad007</p>
        <a className='linked' href='https://github.com/youssefhamad007' target='blank'>
        <button>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="28"
    width="28"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"
    ></path>
  </svg>
  <span>GitHub</span>
</button>
</a>
        </div>
        <div className="d-flex justify-content-left last">
        <motion.p className='poppins h2 g'>Phone Number</motion.p>
        <p className='h4 s poppins'>+201200745033</p>
        </div>
    </motion.div>
    
  )
}

export default Contact