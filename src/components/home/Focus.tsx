import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import FSwiper from './FocusSwiper';


export const Focus = () => {

    return(
    <div className='bg-green-500/20 bg-opacity-30  lg:h-[900px] h-[700px] '>
      <div className='w-[100%] py-5 flex items-center justify-center'>
        <div>
          <motion.p
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className='lg:text-4xl text-2xl mt-9 lg:mt-12 mb-8 text-white/75 font-light'>Our Focused Products</motion.p>
        </div>
      </div>
      <motion.div 
       initial={{ opacity: 0, x: 50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5 }}className='mt-5 lg:mt-20'>
       <FSwiper />
      </motion.div>
    </div>
)
}