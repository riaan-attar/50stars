import React, { useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import './VideoSection.css';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="video-section">
      <div className="video-background-container">
        <div className="video-overlay"></div>
        <video 
          ref={videoRef}
          src="/assets/home-video.mp4" 
          loop 
          muted 
          autoPlay 
          playsInline 
          poster="/assets/home-video-poster.jpg"
          className="background-video"
        ></video>
        <div className="video-bg-shadow"></div>
      </div>

      <div className="video-content-container">
        <div className="founder-card">
          <div className="founder-image-wrapper">
            <img 
              src="/assets/home-founder.png" 
              alt="Michael R. Bennett" 
              className="founder-image"
            />
          </div>
          <div className="founder-info">
            <h3 className="founder-name">Michael R. Bennett</h3>
            <p className="founder-title">Founder & CEO</p>
          </div>
        </div>

        <div className="quote-container">
          <p className="quote-text">
            Great manufacturing isn't just about precision it's about vision, commitment, and the relentless pursuit of excellence.
          </p>
        </div>
      </div>

      <button className="play-pause-btn" onClick={togglePlay} aria-label={isPlaying ? "Pause video" : "Play video"}>
        {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
      </button>
    </section>
  );
};

export default VideoSection;
