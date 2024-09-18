import  { RefObject } from 'react';
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

interface VideoCardProps {
    videoUrl: string;
    name: string;
  }
export const VideoCard = ({ videoUrl, name }:VideoCardProps) => {
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (isPlaying) {
      playerRef?.current?.pause();
      setIsPlaying(false);
    } else {
      playerRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-[99%] lg:mt-9 lg:mb-9 h-[90%] mt-10 ml-auto mr-auto rounded-">
      <ReactPlayer
        url={videoUrl}
        ref={playerRef}
        width="100%"
        height="100%"
        controls={true}
        playing={isPlaying}
        className='rounded-xl'
      />
      <div className='lg:ml-5 ml-0 mr-auto bg-black mt-4 py-1 px-3 flex items-center justify-center rounded-3xl w-[160px]'>{name}</div>
    </div>
  );
};


