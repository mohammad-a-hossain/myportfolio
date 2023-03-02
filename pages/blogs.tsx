import React from 'react'
import { motion } from 'framer-motion';
import { routeAnimation } from './../utils/animtions';

const Blogs = () => {
  return (
    <motion.div variants={routeAnimation} initial='initial' animate='animate' exit='exit'> 
    Blogs page
    </motion.div>
  )
}
export default Blogs