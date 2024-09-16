export const Services = () => {
    const work = [
        {
            name: 'import',
            url: './assets/mport.svg',
            height: '200px',
            mt: '60px',
            note: 'Imports of various kinds of Agricultural consumables, and General Merchandise'
        },
        {
            name: 'export',
            url: './assets/xport.svg',
            height: '400px',
            mt: '20px',
            note: 'Exports of mainly Agricultural cash crops like Sesame Seeds, Soya beans, Habiscus Flower and Cessia tora'
        },
        {
            name: 'Marketing',
            url: './assets/xport.svg',
            height: '200px',
            mt: '60px',
            note: 'Marketing and Distribution of mainly Agricultural commoditty within the country and beyond'
        },
        
        {
            name: 'Management',
            url: './assets/xport.svg',
            height: '200px',
            mt: '60px',
            note: 'Rendering of Technical Agricultural and management services to our various clients'
        },
        {
            name: 'Contracts',
            url: './assets/xport.svg',
            height: '200px',
            mt: '60px',
            note: 'Contracts in Agricultural Engineering, agricultural products supply and technical services to major agricultural companies'
        },
    ]
    return(
    <div className="w-[100%] bg-[#2A2829] rounded-t-xl py-28 flex flex-col items-center lg:justify-center  h-[2000px] lg:h-auto">
        <div className="w-[80%] mt-10 flex ">
            <p className="text-7xl  text-start text-white/75 font-light">Efficient Services we offers</p>
        </div>
       
        <div className="w-[88%] mt-[40px] rounded-full py-2 px-3 items-center justify-center flex">
         <div className="w-[100%] h-[500px] py-8 mt-[80px] px-2 md:px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 over auto-cols-max ml-auto items-start rounded-xl bg-white/0">
             
               {
                 work && work.map((item,i) => (
                    <div className="bg-[#97B4DE]/15 h-[240px]  rounded-xl" key={i}>
                        <div className="w-[100%] h-[100%]">
                           <div className="h-[30%] rounded-t-xl flex items-center justify-center bg-red-500/o">
                              <div className="ml-7 mr-auto">
                                <img src={item.url} className="w-12 h-12" />
                              </div>
                           </div>
                           <div className="h-[70%] w-[90%] ml-auto mr-auto mt-4 px-2 rounded-b-xl">
                            <div className=" w-auto h-8 font-light text-2xl text-white/85 rounded-lg">
                                    {item.name}
                              </div>
                            <div className="text-start text-[16px] text-white/55 mt-3 font-light">
                                {item.note}
                            </div>
                           </div>
                        </div>
                    </div>
                 ))
               }
             
         </div>
       </div>
    </div>
)
}