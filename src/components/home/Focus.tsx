import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import FSwiper from './FocusSwiper';


export const Focus = () => {

    return(
    <div className='bg-green-500/20 bg-opacity-30  lg:h-[900px] h-[700px] '>
      <div className='w-[100%] py-5 flex items-center justify-center'>
        <div>
          <p className='lg:text-4xl text-2xl mt-9 lg:mt-12 mb-8 text-white/75 font-light'>Our Focused Products</p>
        </div>
      </div>
      <div className='mt-5 lg:mt-20'>
       <FSwiper />
      </div>
    </div>
)
}