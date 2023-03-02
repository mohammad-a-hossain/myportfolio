import React,{FC} from 'react'

import { Services } from './../utils/type';




const ServiceCard:FC<{service:Services}> = ({service:{Icon,about,title}}) => {
  return (
    <div className='flex items-center p-2 space-x-4'>
      <Icon className='w-12 h-12 text-green'/>
        <div>
        <h4 className='font-bold'>{title}</h4> 
        <p>{about}</p>
        </div>
      </div>
  )
}

export default ServiceCard