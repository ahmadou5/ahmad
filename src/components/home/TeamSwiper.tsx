import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Item } from "@radix-ui/react-select";

interface Member {
  name: string;
  imageUrl:string;
  about:string;
  role: string;
}
[];


interface TeamList extends Array<Member> {}

export default function TSwiper() {
  const Members: TeamList = [
    {
      name: "Sani Umar Giredi",
      imageUrl: './assets/team/newqq.jpeg',
      about: 'stuffs happnes in life so just be normal and make them no understand your next move and be mentally normal ohh and dont forget to fuck em all if the fuck with Yhaaaaaa GenZZZZZZZ  ',
      role: 'CEO'
    },
    {
        name: "BabanGida Muhammad",
        imageUrl: './assets/team/manager.jpeg',
        about: 'stuffs happnes in life so just be normal and make them no understand your next move and be mentally normal ohh and dont forget to fuck em all if the fuck with Yhaaaaaa GenZZZZZZZ  ',
        role: 'Manager'
    },
    {
        name: "Salisu Abudullahi",
        imageUrl: './assets/team/sec.jpeg',
        about: 'stuffs happnes in life so just be normal and make them no understand your next move and be mentally normal ohh and dont forget to fuck em all if the fuck with Yhaaaaaa GenZZZZZZZ  ',
        role: 'Accountant'
    },
    {
        name: "Mansoor Zakariyya",
        imageUrl: './assets/team/newsec.jpeg',
        about: 'stuffs happnes in life so just be normal and make them no understand your next move and be mentally normal ohh and dont forget to fuck em all if the fuck with Yhaaaaaa GenZZZZZZZ  ',
        role: 'Secretery'
    },
  ];
  return (
    <>
      <Swiper
       slidesPerView={1}
       centeredSlides={true}
       spaceBetween={20}
       pagination={{
         clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper"
      >
        {Members && Members.map((member,i) => (
           <SwiperSlide key={i}>
            <div className="lg:w-[30%] w-[90%]  lg:h-[320px] h-[300px] flex flex-col rounded-2xl ml-auto mr-auto lg:ml-auto lg:p-5 p-3 font-light lg:mr-auto  drop-shadow-2xl bg-white/60">
               <div className="flex">
               <div className="lg:h-[120px] h-[80%] lg:w-[120px] w-[200px] rounded-2xl bg-black">
                 <img className="h-[100%] w-[100%] ml-auto mr-auto rounded-2xl" src={member.imageUrl} />
               </div>
               <div className=" w-[90%h-[300] lg:py-2 py-0 lg:px-3 px-2.5 lg:justify-between   flex flex-col">
                 <div className=" text-[10px] lg:text-[15px] flex mb-0.5  lg:mt-4 mt-3 h-7 w-auto">
                  <p className="text-[16px] lg:text-2xl font ml-0.5 mb-1 font-bold">{`Alh ${member.name}`}</p>
                 </div>
                 <div className="bg-black/0 ml-0.5 lg:mt-1 rounded-md lg:text-[20px] text-[17px] flex  h-7 w-[190px]">
                  <p>{member.role}</p>
                 </div>
               </div>
               </div>
               <div>
               <div className="lg:mt-4 mt-1 w-[90%] ml-auto mr-auto">
                <p className="lg:text-[14px] text-[11px] font-light">
                  {member.about}
                </p>
               </div>
            </div>
            <div className="w-[100%] lg:mt-6 mt-4 items-center justify-center flex">
              <div className=" h-7 rounded-md w-[40%] text-white/75 flex items-center justify-center bg-black ml-3 mr-auto">
                <p>{'Hire Me'}</p>
              </div>
              <div className=" h-7 rounded-md w-[40%] text-white/75 flex items-center justify-center bg-black/15 ml-auto mr-3">
                <p>{'Hire Me'}</p>
              </div>
            </div>
            </div>
            
           </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
