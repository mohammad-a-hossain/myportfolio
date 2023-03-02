import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'



const NavItem:FC<{

  activestate :string,
  setActivestate:Function,
  name:string,
  route:string,
}>  =({activestate,name,route,setActivestate})=>{
  return(
    activestate !== name ? (
      <Link href={route}>
        
          <span className='hover:text-green-800' onClick={()=> setActivestate(name)}>{name}</span>    
          
      </Link>
  ):null
  )

}


const Navbar:FC = () => {
    const [activestate,setActivestate] = useState<string>('')

    const{ pathname}= useRouter()

    useEffect(()=>{
        if(pathname === '/') setActivestate('about')
        if(pathname === '/projects') setActivestate('projects')
        if(pathname === '/resume') setActivestate('resume')
        if(pathname === '/blogs') setActivestate('blogs')
        if(pathname === '/contact') setActivestate('contact')
    },[])

  return (
    <div className='flex justify-between px-5 py-5 '>
      <span className='text-blue-500 font-bold'>{activestate}</span>
        <div className='text-red-500 font-lg flex space-x-3 font-lg'>
        <NavItem 
        activestate={activestate} 
        setActivestate={setActivestate}
        name='about' 
        route='/'
        />
        <NavItem
         activestate={activestate}
         setActivestate={setActivestate}
         name='projects'
         route='/projects'
         />
        <NavItem
        activestate={activestate} 
        setActivestate={setActivestate}
        name='resume' 
        route='/resume'
         />
            <NavItem
        activestate={activestate} 
        setActivestate={setActivestate}
        name='blogs' 
        route='/blogs'
         />
            <NavItem
        activestate={activestate} 
        setActivestate={setActivestate}
        name='contact' 
        route='/contact'
         />
         
        </div>


        </div>
  )
}

export default Navbar