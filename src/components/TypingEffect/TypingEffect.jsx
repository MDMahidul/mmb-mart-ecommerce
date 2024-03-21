import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypingEffect = ({words}) => {
      const [texts] = useTypewriter({
        words: words,
        loop: {},
        typeSpeed: 400,
        delaySpeed: 80,
      });
  return (
    <div>
      <div className="md:text-3xl text-red-500 text-2xl font-semibold">
        <span>{texts}</span>
        <Cursor cursorStyle="." cursorColor="white" />
      </div>
    </div>
  );
};

export default TypingEffect;
