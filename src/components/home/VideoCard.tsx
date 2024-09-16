import  { RefObject } from 'react';
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

interface VideoCardProps {
    videoUrl: string;
  }
export const VideoCard = ({ videoUrl }:VideoCardProps) => {
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
    <div className="w-[99%] h-[90%] ml-auto mr-auto rounded-lg">
      <ReactPlayer
        url={videoUrl}
        ref={playerRef}
        width="100%"
        height="100%"
        controls={true}
        playing={isPlaying}
      />
     
    </div>
  );
};


