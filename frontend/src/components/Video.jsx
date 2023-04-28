import "./video.css"
import videoFile from './video1.mp4';

export default function Video() {
    return (
        <>
            <video
                src={videoFile}
                autoPlay
                muted
                loop
                playsInline
                className="fullscreen-video"
            />
        </>
    )
}