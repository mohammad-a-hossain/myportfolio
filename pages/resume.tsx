import React from 'react'
import { Bar } from '../components/Bar';
import { languages } from '../data'
import { tools } from './../data';
import {motion} from 'framer-motion'
import { fadeInUp } from '../utils/animtions';
import { routeAnimation } from './../utils/animtions';

const Resume = () => {
  
  return (
    <motion.div className='px-6 py-4 dark:bg-dark-700' variants={routeAnimation}
     initial='initial' animate='animate' exit='exit'>
     
      <div className='grid gap-6 bg-gray-400 md:grid-cols-2'>

        <motion.div variants={fadeInUp} animate='animate' initial='initial'>
          
          <h5 className='my-3 text-2xl font-bold'>education</h5>
          <div>
            <h5>eduxatoin institutions</h5>
            <p className='font-semibold'>terh difdf idfjdifd df </p>
            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Reiciendis, error nesciunt!</p>
          </div>

        </motion.div>


        <motion.div>
          
          <h5 className='my-3 text-2xl font-bold'>experiancea</h5>
          <div>
            <h5>exprrianece institutions</h5>
            <p className='font-semibold'>terh difdf idfjdifd df </p>
            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Reiciendis, error nesciunt!</p>
          </div>
        </motion.div>

        
      </div>


 {/* lowrer part */}

        <div className='grid gap-6 bg-gray-200 md:grid-cols-2'>  
        <div>
               <h5 className='my-3 text-2xl font-bold'>Language & Framework</h5>
               <div className='my-2'>
                  {languages.map((language, i) => (
                     <Bar data={language} key={i} />
                  ))}
               </div>
            </div>

            <div>
               <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
               <div className='my-2'>
                  {tools.map((tool, i) => (
                     <Bar data={tool} key={i} />
                  ))}
               </div>
            </div>
            
        </div>

        
       
      </motion.div>
  )
}

export default Resume