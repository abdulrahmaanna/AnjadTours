import video from "../../assets/video.mp4";
function FootersVideo() {
  return (
    <div className="w-full h-[70dvh] relative">
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
}

export default FootersVideo;
