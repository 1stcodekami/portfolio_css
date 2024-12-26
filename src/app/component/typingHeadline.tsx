// components/TypingHeadline.js
import TypingEffect from "react-typing-effect";

const TypingHeadline = () => {
  return (
    
      <TypingEffect
        text={["Developer.", "UI/UX Designer", "Professional Coder."]}
        speed={100} // typing speed
        eraseSpeed={50} // erase speed
        eraseDelay={1000} // time to wait before erasing
        typingDelay={500} // delay before starting typing
        // cursor={"|"} // Optional: Customize the cursor
      />
    
  );
};

export default TypingHeadline;
