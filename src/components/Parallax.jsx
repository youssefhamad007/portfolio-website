import React from 'react'

const Parallax = () => {
    const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [ 500,900],[1,0])
    const backgroundSize = useTransform(scrollY, [600, 1200 ],["100%","50%"])
const ref =useRef(null);
const {scrollYProgress} = useScroll({
target:ref,
offset:["start start", "end start"],
});
const backgoundY= useTransform(scrollYProgress,[0,1],["0%","100%"]);
const textY= useTransform(scrollYProgress , [0,1],["0%","400%"]);
}

export default Parallax