import React from 'react'
//import photo from './../images/photo.png'
import { AiFillGithub,AiOutlineLinkedin,AiOutlineYoutube }from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {useTheme} from 'next-themes'


const Sidebar = () => {
  const {theme, setTheme} = useTheme()

  const changeTheme=()=>{
    setTheme(theme==='light' ? 'dark':'light')
  }
  return (
    <div>
       <img src="https://media.istockphoto.com/id/1358330778/photo/deep-learning-artificial-intelligence-abstract-background.jpg?s=612x612&w=is&k=20&c=9B_T1xGjqpgAl8yAkqTiVj1i6kUc10v_hLc1rtk2bN8=" alt="image avatar" 
       className='w-32 h-32 mx-auto rounded-full '/>
    
     <h2 className='text-3xl font-medium tracking-wider my-4-m font-kaushan'>
        name <span>abu</span> </h2>
        <p className='px-2 py-1 my-3 bg-gray-400 dark:bg-dark-100 rounded-full'>web developer</p>
        <p className='px-2 py-1 my-3 bg-gray-400 dark:bg-dark-200 rounded-full'>
          <a href="../public/images/perfect-resume"
        download="perfect-resume">
           download-resume
          </a>
         
          </p>
        <div className='flex justify-around my-5 text-green-500 md:w-full'>
            <a href="##" ><AiFillGithub className='w-8 h-8 cursor-pointer'/></a>
              <a href="##"><AiOutlineLinkedin className='w-8 h-8 cursor-pointer'/></a>
                 <a href='##'><AiOutlineYoutube className='w-8 h-8 cursor-pointer'/></a>
        </div>
        <div className='py-4 my-5 bg-green-200 dark:bg-dark-200'>
            <div className='flex items-center justify-center'>
                <GoLocation/>
                <span>address</span>
            </div>
            <p>email: abus@gmiall.com</p>
            <p>mobile: 01744444</p>
        </div>
        <button className='w-8/12 px-5 py-2 my-2 bg-gray-400 rounded' onClick={()=>window.open('mailto:aabu.hossain.md@gmail.com')}>email</button>
        <button onClick={changeTheme} className='w-8/12 px-5 py-2 my-2 bg-gray-400 rounded'>
           dark</button>
    </div>
  )
}

export default Sidebar