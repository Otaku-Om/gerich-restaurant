import React, { useRef, useState } from 'react';
import {meal} from "../../constants";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  console.log(vidRef);
  return (
  <div className='video-container'>
    <video
      ref={vidRef}
      src={meal}
      type="video/mp4"
      loop
      controls={false}
      muted 
    />
    <div className="video-overlay flex__center">
      <div className="video-overlay-circle flex__center" onClick={() => {
        setPlayVideo(!playVideo);
        if(playVideo){
          vidRef.current.pause();
        }
        else {
          vidRef.current.play();
        }
      }}>

        {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )
        }
      </div>
    </div>
  </div>
)
};

export default Intro;
