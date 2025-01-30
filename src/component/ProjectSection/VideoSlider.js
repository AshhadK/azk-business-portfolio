import { useState, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const VideoSlider = ({ src, view }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className={view === "Mobile Development" ? "wrapper-mobile-video-portfolio" : "wrapper-video-portfolio"}>
            <div className="background-video-portfolio" onClick={togglePlay}>
                <video
                    ref={videoRef}
                    src={src}// Ensure the video is in the public/videos folder
                    className="video-actual"
                    autoPlay={false}
                    loop
                    muted
                ></video>

                <div className={isPlaying ? "centered-circle-play" : "centered-circle"}>
                    {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                    <i className="portfolio-ripple"></i>
                </div>
            </div>
        </div>
    );
};

export default VideoSlider;
