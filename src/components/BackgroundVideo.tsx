import { useRef, useEffect } from "react";
import backgroundVideo from "../assets/videoplayback.mp4";

function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise.catch((err) => {
          console.error("Autoplay failed:", err);
        });
      }
    }
  };

  useEffect(() => {
    // Play video initially
    playVideo();

    // Also play again if tab becomes active (reload/resume)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src="https://clikcatalyst-assets25.s3.ap-southeast-1.amazonaws.com/BackgroundVideo/videoplayback_vlqrlt.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover -z-50"
    />
  );
}

export default BackgroundVideo;
