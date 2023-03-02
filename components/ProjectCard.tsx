import React,{FC, useState} from 'react'
import { IProject } from './../utils/type';
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInUp, stagger } from './../utils/animtions';
import {motion} from 'framer-motion'


export const ProjectCard:FC<{
    project:IProject;
    showDetails:null| number,
    setShowDetails:(id:null | number)=> void
}> = ({
   project: {
          id,
        name,
        image_path,
        description,
        deployed_url,
        github_url,
        category,
        key_techs 
    },
    showDetails,
    setShowDetails,
}) => {

    // const [showDetail, setShowDetail] = useState(false);
  return (
   
    <div>
        {name}
        <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetails(id)}
        height="150"
        width="300"
      />
       <p className="my-2 text-center">{name}</p>

{showDetails ===id && (
  <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2
   text-black bg-gray-100 md:grid-cols-2 gap-x-12
    dark:text-white dark:bg-dark-100">
    <motion.div variants={fadeInUp}>

      <Image
        src={image_path}
        alt={name}
        layout="responsive"
        onClick={() => setShowDetails(id)}
        height="150"
        width="300"
      />
      <div className="flex justify-center my-4 space-x-3">
        <a
          href={github_url}
          className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
        >
          <AiFillGithub /> <span>Github</span>
        </a>
        <a
          href={deployed_url}
          className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
        >
          <AiFillProject /> <span>Project</span>
        </a>
      </div>
    </motion.div>

    <motion.div variants={stagger} animate='animate' initial='initial'>
      <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
      <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>

      <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
        {key_techs.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </motion.div>

    <button
      onClick={() => setShowDetails(null)}
      className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
    >
      <MdClose size={30} />
    </button>
  </div>
)}
    </div>
  )
}
