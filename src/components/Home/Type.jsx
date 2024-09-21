import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Designer",
          "Graphics Designer",
          "Video Editor",
          "Effective Problem Solver",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
