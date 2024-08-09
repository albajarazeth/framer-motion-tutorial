import { motion } from "framer-motion";
import { useAnimationControls } from "framer-motion";

const AnimationControls = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("flip");
  };
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.08rem",
      }}
    >
      <button onClick={handleClick} className="example-button">
        Flip it!
      </button>
      <motion.div
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
