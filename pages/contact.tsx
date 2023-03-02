import React from 'react'
import { motion } from 'framer-motion';
import { routeAnimation } from './../utils/animtions';

const Contact = () => {
  return (
    <motion.div variants={routeAnimation} animate='animate' initial='initial'>
      Contact
      </motion.div>
  )
}
export default Contact