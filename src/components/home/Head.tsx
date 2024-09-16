import { useState } from "react";
import {motion} from 'framer-motion'
const Head = () => {
    const [expand,setExpand] = useState(true)
    return(
    <header className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md`}>
      <nav className={`container mx-auto px-6 ${expand ? 'py-12':'py-6'}`}>
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="lg:text-3xl text-xl lg:font-bold text-light">Sambaau</h1>
          </motion.div>
          <div className='lg:block hidden'>
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-8"
          >
            {['Services',  'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-green-400 transition-colors">{item}</a>
              </li>
            ))}
          </motion.ul>
          </div>
          <div className='flex lg:hidden'>
             <button className='bg-green-400/45 h-7 w-[140px] rounded-lg'>
                contact us
             </button>
          </div>
        </div>
      </nav>
    </header>
  );

};