import React from "react";

function Video() {
  return (
    <div className="mx-auto max-w-4xl py-10 max-md:mx-5">
      <div className="relative w-full h-0 pb-[56.25%]">
        {" "}
        {/* 16:9 oranı */}
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/AXF4WhoDLus?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
