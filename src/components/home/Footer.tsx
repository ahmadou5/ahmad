interface List { name: string; }[];
interface Social { name: string; imgUrl:string; link:string; }[];


interface Lists extends Array<List>{}
interface Socials extends Array<Social>{}

export const Footer = () => {
    const social:Socials = [
      {
        name: 'X',
        imgUrl: 'no exist',
        link: 'not yet'
      },
      {
        name: 'X',
        imgUrl: 'no exist',
        link: 'not yet'
      },
    ]
    const list1:Lists = [
       {
        name: 'Ahmadou',

       },
       {
        name: 'Ahmadou',

       },
       {
        name: 'Ahmadou',

       },
    ]
    return(
    <div className="w-[100%] bg-[#2A2829] text-white/75 mb-auto h-auto">
        <div className="w-[100%] flex flex-col h-[100%]">
        <div className="w-[100%] lg:mt-8 mt-3 lg:p-8 p-2 lg:h-[280px] h-auto  flex flex-col lg:flex-row   ">
           <div className="w-[30%] p-1 flex flex-col ">
            <div className="flex py-4" >
              <div className="ml-3 mr-3">
                <img src="./assets/mark.svg" className="w-20 h-20" alt="logo" />
              </div>
             <div className="mt-7 text-xl ml-2 mr-2">
             <p>{'Sambaau'}</p>
             </div>
            </div>
            
           </div>
           <div className="bg-black/1 lg:px-9 px-0 lg:py-3 py-0 flex lg:w-[75%] w-[100%]">
            <div className="lg:ml-12 ml-1 lg:mr-auto lg:items-center lg:justify-center items-start flex">
              <div className="lg:ml-20 ml-5 lg:mr-20 mr-2 mt-0">
                <p className="lg:text-2xl text-xl font-light">Company</p>
                {
                  list1 && list1.map((item,i) => (
                  <div className="lg:text-lg text-[13px] font-light lg:mt-3 mt-1" key={i}>
                    <p>
                    {item.name}
                    </p>
                  </div>
                ))
                }
              </div>
              
            </div>
            <div className="ml-auto lg:py-6 py-0 lg:mr-20 mr-3">
              <div className="ml-12 mt-0">
                <p className="lg:text-2xl text-xl font-light">Get in Touch</p>
                <p className="lg:text-[15px] mt-0 text-sm font-light">hello@localhost:3000.com</p>
                <div className="mt-2 flex">
                {
                  social && social.map((item,i) => (
                  <div className="text-sm  font-light " key={i}>
                    <div className="flex bg-black/15 w-9 rounded-xl items-center justify-center  h-9 ml-1">
                    {item.name}
                    </div>
                  </div>
                ))
                }
                </div>
            
              </div>
            </div>
           </div>
        </div>
        <div className="lg:w-[100%] w-full lg:text-xl text-[12px] font-light lg:mt-[90px] mt-4 lg:mb-5 mb-2 flex ">
         <div className="lg:ml-10 ml-3 sm:text- mr-auto">
           <p>©2024 Sambaau. All rights reserved</p>
         </div>
         <div className="ml-auto flex lg:mr-10 mr-3">
            <div className=" lg:ml-2 ml-1  lg:mr-2 mr-1">Terms & conditions</div>
           
         </div>
        </div>
        </div>
    </div>
)
}