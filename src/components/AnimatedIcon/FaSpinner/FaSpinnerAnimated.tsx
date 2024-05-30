import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

function FaSpinnerAnimated() {
  const [isAnimating, setIsAnimating] = useState(true);

  const { rotate } = useSpring({
    rotate: isAnimating ? 360 : 0,
    from: { rotate: 0 },
    config: { duration: 1000 },
    reset: true,
  });

  return (
    <animated.div
      style={{
        transform: rotate.interpolate((r) => `rotate(${r}deg)`),
        display: "inline-block",
        fontSize: "50px",
      }}
    >
      <FaSpinner />
    </animated.div>
  );
}

export default FaSpinnerAnimated;
