import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import video from "../../assets/video.mp4"

const HeroSection = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (stage < 2) {
          setStage(stage + 1);
        }
      },
      stage === 0 ? 3000 : 1000
    );

    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div className="relative w-full h-screen">
      {/* Gray Screen */}
      {stage === 0 && (
        <div className="absolute inset-0 bg-[#EFE6DC] flex items-center justify-center">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-6xl font-bold mb-4">
              Signature Collection <br /> Coming Soon
            </h1>
            <button
              className="px-10 py-3 bg-transparent border border-white text-white font-semibold rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "0px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(5px)",
                color: "rgba(255, 255, 255, 0.8)",
                fontFamily: '"MingLiU_HKSCS-ExtB", "MingLiU", serif',
                fontSize: "20px",
              }}
            >
              Know More <MdArrowForwardIos />
            </button>
          </div>
        </div>
      )}

      {/* Black Screen with Buffering Icon */}
      {stage === 1 && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-6xl font-bold mb-4">
              Signature Collection <br /> Coming Soon
            </h1>
            <FaSpinner className="text-white text-6xl animate-spin" />
          </div>
        </div>
      )}

      {/* Video Background with Overlay */}
      {stage === 2 && (
        <>
          {/* Background Video */}
          <video
            className="relative inset-0 w-full h-full"
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              objectFit: "cover", // Ensures the video covers the entire screen
              zIndex: "-1", // Keeps the video in the background
              pointerEvents: "none", // Prevents interactions
            }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>


          {/* Overlay Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-6xl font-bold mb-4">
              Signature Collection <br /> Coming Soon
            </h1>
            <button
              className="px-10 py-3 bg-transparent border border-white text-white font-semibold rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "0px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(5px)",
                color: "rgba(255, 255, 255, 0.8)",
                fontFamily: '"MingLiU_HKSCS-ExtB", "MingLiU", serif',
                fontSize: "20px",
              }}
            >
              Know More <MdArrowForwardIos />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HeroSection;
