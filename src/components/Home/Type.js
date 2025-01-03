import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "DEVELOPPEUSE WEB",
          "Freelance",
          "Mentor et Evaluatrice chez OC",
          "Développeur concepteur logiciel",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
