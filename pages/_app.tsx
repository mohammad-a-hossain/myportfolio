import Navbar from '../components/Navber';
import '../styles/globals.css'
import Sidebar from './../components/sidebar';
import { ThemeProvider } from 'next-themes'
 import { AnimatePresence } from 'framer-motion';



function MyApp({ Component, pageProps,router }) {
    return(
      <ThemeProvider attribute='class'>
     
      <div className='grid grid-cols-12 gap-2'>

        <div className='h-full col-span-12 p-4 text-center bg-white
         dark:bg-dark-500 shadow-custom-light  lg:col-span-3 rounded-xl'>
          <Sidebar/>
          </div>
        <div className='flex flex-col col-span-12 overflow-hidden
         bg-white dark:bg-dark-500 lg:col-span-9 rounded-xl'>
           <Navbar/>
           <AnimatePresence exitBeforeEnter>
           <Component {...pageProps} key={router.route}/>
           </AnimatePresence>
        
        </div>
      </div> 
      </ThemeProvider>
    )


}

export default MyApp
