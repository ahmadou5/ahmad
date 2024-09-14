import TSwiper from "./TeamSwiper"




export const Team = () => {

    return(
    <div className='w-[100%] lg:bg-black/35 bg-black/15 lg:h-[750px] h-[500px] '>
      <div className='w-[100%] py-5 flex items-center justify-center'>
        <div className="w-[100%] flex  lg:mt-10 mt-2 items-center justify-center">
          <p className='lg:text-7xl text-3xl text-white/75 lg:mt-12 mt-4 mb-8 font-light'>Meet Our Team</p>
        </div>
      </div>
      <div className='w-[100%] mt-2 lg:mt-20'>
       <TSwiper />
      </div>
    </div>
)
}