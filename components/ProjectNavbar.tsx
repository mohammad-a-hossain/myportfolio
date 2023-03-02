import React from 'react'
import { FC } from 'react';
import { Category } from '../utils/type';


export const NavItem:FC<{value:Category | 'all',
                        handlerFilterCategory:Function;
                        active:string}>=({value, handlerFilterCategory, active})=>{
    return(
        <li className='cursor-pointer hover:text-green capitalize' onClick={()=>handlerFilterCategory(value)}>{value}</li>
    )
}


const ProjectNavbar:FC< {handlerFilterCategory: Function;
active: string}> = (props) => {
  return (
    <div className='flex space-x-3 px-3 py-2 list-none overflow-x-auto'>
        <NavItem value='all' {...props} />
        <NavItem value='react' {...props} />
        <NavItem value='node' {...props} />
        <NavItem value='express' {...props} />
        <NavItem value='mongo' {...props} />
    </div>
  )
}

export default ProjectNavbar