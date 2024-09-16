
import { motion,  useScroll, useTransform } from 'framer-motion';
import { Globe, Truck, BarChart, Leaf, ShieldCheck, Users } from 'lucide-react';

export const Hero = () => {
    const { scrollYProgress } = useScroll();
    const backgroundY:unknown = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
    const opacity:any = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const star = [
        {
            name: 'star1',
            url: './assets/star.svg'
        },
        {
            name: 'star1',
            url: './assets/star.svg'
        },
        {
            name: 'star1',
            url: './assets/star.svg'
        },
        {
            name: 'star1',
            url: './assets/star.svg'
        },
        {
            name: 'star1',
            url: './assets/star.svg'
        },
    ]
    const work = [
        {
            name: 'uknown',
            url: './assets/work1.jpg',
            height: '200px',
            smHeight: '189px',
            mt: '60px',
        },
        {
            name: 'uknown',
            url: './assets/work2.jpeg',
            height: '400px',
            smHeight: '389px',
            mt: '20px',
        },
        {
            name: 'uknown',
            url: './assets/work3.jpg',
            height: '200px',
            smHeight: '189px',
            mt: '60px',
        },
    ]
    return(
    <div
    style={{
        backgroundImage: 'url("./assets/bg3.jpeg")', // Replace with a high-quality image of a vast agricultural landscape
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       
        opacity
      }}
    className="w-[100%] flex  ml-auto mr-auto mt-[] lg:mt-[65px]  rounded-b-2xl h-auto items-center justify-center  lg:py-5 py-1 px-3 lg:h-auto">
       <div className="lg:w-[90%] w-[100%] flex flex-col items-center justify-center">
        <div className="lg:w-[80%] lg:mt-[100px] mt-[230px] w-[90%] flex items-center justify-center">
            <p className="lg:text-6xl text-2xl text-center  text-white/80 font-bold">Your trusted partner in Agricultural trade, delivering excellence and profit</p>
        </div>
       <div className="lg:w-[47%] w-[90%] mt-16 rounded-full lg:py-2 py-1 lg:px-4 px-2 lg:h-10 lg:bg-[#97B4DE]/40">
         <p className="text-center lg:text-[16px] text-[14px] text-white/75 lg:text-black/90">{`Unlocking the world's agricultural potential, delivering exceptional value and profit`}</p>
       </div>
       <div className="lg:w-[50%] w-[80%] lg:text- text-[14px] mb-10  mt-[120px] rounded-full py-2 px-3 items-center justify-center flex">
         <button className="lg:w-[300px] w-[90%] bg-black/90   text-white/85 lg:h-12 h-11 rounded-lg">
            Discover Our Expertise
         </button>
       </div>
       <div className="lg:w-[11%] w-[200px] lg:mt-[60px] mt-5 bg-black/70 rounded-full lg:py-0.5 py-1 px-3 items-center justify-center flex">
         {
            star && star.map((item,i) => (
                <div  key={i}>
                   <img src={item.url} className="lg:w-7 w-6 lg:h-7 h-6" />
                </div>
            ))
         }
         <p className="lg:ml-1 lg:mr-1 ml-2.5 mr-2.5 lg:text-[14px] text-[14px]">
            {`5.0`}
         </p>
       </div>
       <div className="lg:w-[50%] w-[80%] lg:mt-[10px] mt-[5] rounded-full py-2 px-3 items-center justify-center flex">
         <p className="text-[14px]">From 20 Reviews</p>
       </div>
       <div className="lg:w-[98%] w-[100%] lg:mt-[40px] mt-2 rounded-full py-2 lg:px-3 px-1 items-center justify-center flex">
         <div className="w-[100%] lg:mb-0 mb-[720px] h-[500px] py-8 mt-8 px-2 md:px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-cols-max ml-auto items-start rounded-xl bg-white/0">
             
               {
                 work && work.map((item,i) => (
                    <div key={i}>
                        <img src={item.url} className={`w-[98%] lg:h-[${item.height}] h-[${item.smHeight}] lg:mt-[${item.mt}] mt-5 rounded-2xl`} />
                    </div>
                 ))
               }
             
         </div>
       </div>
       </div>
    </div>
)
}