import { VideoCard } from "./VideoCard";

export const About = () => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center font-light bg-black/35 text-white/75  py-5 px-3 lg:h-auto h-[1300px]">
      <div className="w-[100%] flex items-center justify-center">
        <p className="text-2xl lg:text-7xl ml-auto mr-auto lg:mt-10 mt-3 font-light">About us</p>
      </div>
      <div className="flex lg:flex-row flex-col items-center lg:mt-10 mt-6 lg:justify-center justify-between">
        <div className="lg:w-[50%] w-[90%] lg:mb-0 mb-6 ">
          <div className="lg:px-7 px-3 lg:py-4 py-2 lg:w-[80%] w-[100%] ml-auto mr-auto items-start">
          <div className="bg-black h-7 w-[90px] mb-2 rounded-xl flex items-center justify-center">
            <p className="text-white/70">History</p>
          </div>
            <p>
              Sambaau Worldwide limited was incorporated in 2017 as a limited
              liability company, under the company and allied Matters act 1990
              with registration Number (RC:7144989), as part of our group
              holding companies strategic expansion and consoliation plan on
              food security
            </p>
          </div>
          <div  className="lg:px-7 px-3 lg:py-4 py-2 lg:w-[80%] w-[100%] ml-auto mr-auto lg:items-start items-center">
          <p>
            Our group holding company Sanbaau Worldwide Limited has been one of
            the leading business organization that have established a nice in
            imports and exports of wide range of agricultural produce from
            vaious part of the globe.
          </p>
          </div>
          <div  className="lg:px-7 px-3 lg:py-4 py-2 lg:w-[80%] w-[100%] ml-auto mr-auto lg:items-start items-center">
          <div className="bg-black h-7 w-[90px] mb-2 rounded-xl flex items-center justify-center">
            <p className="text-white/70">Vision</p>
          </div>
          <p>
           We aim to be the World class company in imports an export of various agricultural products and maintain a high-level of profit while we maximize financial returns and value of our stakeholders
          </p>
          <p className="mt-3">
           Since the restructing exercise, the company has evolved as one of the fastest agricultural firm in Dawanau market Kano, Nigeria. with the primary business being the production of various agricultural product, imports and exports of agricultural goods and other agricultural services. 
          </p>
          </div>
          <div  className="lg:px-7 px-3 lg:py-4 py-2 lg:w-[80%] w-[100%] ml-auto mr-auto lg:items-start items-center">
          <div className="bg-black h-7 w-[90px] mb-2 rounded-xl flex items-center justify-center">
            <p className="text-white/70 font-light">Mission</p>
          </div>
          <p>
          To delight our customers and our stakeholders by providing a mutual business relationship and living space through continuos practice and innovation.
          </p>
          
          </div>
        </div>
        <div className="lg:w-[50%] w-[95%] h-[100%] lg:mt-0 mt-8 lg:rounded-lg rounded-2xl bg-black flex items-center justify-center">
            <VideoCard videoUrl="./assets/video/123.mp4" />
        </div>
      </div>
    </div>
  );
};
