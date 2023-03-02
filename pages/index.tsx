import { GetServerSidePropsContext,GetStaticPropsContext, NextPage } from 'next';
import React from 'react'
import ServiceCard from '../components/ServiceCard';
import { services } from './../data';
//import { Service } from '../utils/type';
import {motion} from 'framer-motion'
import {fadeInUp, stagger,routeAnimation } from '../utils/animtions'





 const Aboute: NextPage = () => {

  //console.log('client',services);

  return (
    <motion.div className='flex flex-col flex-grow pt-1' variants={routeAnimation} initial='initial' animate='animate'>
      
      <h6 className="my-3 text-base font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h6>
      <div className='px-4 py-4 mt-5 bg-gray-500 dark:bg-dark-500'>
        <h3>what i offer</h3>
        <motion.div className='grid gap-6 lg:grid-cols-2'
         variants={stagger}
          animate='animate'
           initial='initial'>
       
         {
      services.map(service=>(
        <motion.div variants={fadeInUp}  className='bg-gray-200 dark:bg-dark-700 rounded-lg lg:col-span-1'>
              <ServiceCard service={service}/>
        </motion.div>
      
       
      ))
    }
     </motion.div>
      </div>
   
      
      </motion.div>
  )
}
export default Aboute

// export const getServerSideProps= async( context:GetServerSidePropsContext)=>{
//         const res=  await fetch('http://localhost:3000/api/service') 
//         const data =await res.json()

//         console.log('server',services );
//   return{
//     props:{
//       services:data.services,
//     },
//   }
// }

// export const getStaticProps= async( context:GetStaticPropsContext)=>{
//   const res=  await fetch('http://localhost:3000/api/service') 
//   const data =await res.json()

//   console.log('server',services );
// return{
// props:{
// services:data.services,
// },
// }
// }