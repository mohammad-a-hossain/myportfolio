import React,{useState} from 'react'
import { ProjectCard } from '../components/ProjectCard'
import ProjectNavbar from '../components/ProjectNavbar'
import { projects as projectData } from '../data'
import {motion} from 'framer-motion'
import { stagger } from '../utils/animtions'
import { Category } from '../utils/type'
import { fadeInUp, routeAnimation } from './../utils/animtions';

const Projects = () => {
  const [projects,setProjects] = useState(projectData)
  const [active,setActive] = useState('all')
  const [showDetails,setShowDetails]= useState<number | null>(null)

  const handleFilterCategory=(category:Category | 'all')=>{
        if(category === 'all'){
          setProjects(projectData) 
          setActive(category)
          return
        }
        const getCategoryItem= projectData.filter((project)=> project.category.includes(category))
        setProjects(getCategoryItem)
        setActive(category)
  }

  return (
    <motion.div className='px-5 py-2 overflow-y-scroll' style={{ height: "85vh" }} variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
    <div className='flex'>
     <ProjectNavbar handlerFilterCategory={handleFilterCategory} active={active}/>
      </div>
    <motion.div  className='relative grid grid-cols-12 gap-4 my-3' variants={stagger} animate='animate' initial='initial'>
       {
      projects.map((project) =>(
        <motion.div className='col-span-12 sm:col-span-6 lg:col-span-4' variants={fadeInUp} key={project.name}>
          <ProjectCard project={project} showDetails={showDetails} setShowDetails={setShowDetails} />
        </motion.div>
        
      ))
    }
     
    </motion.div>
    
      </motion.div>
  )
}

export default Projects