import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <MotionConfig
      transition={{
        duration: 0.125,
        ease: "easeInOut",
      }}
    >
      <div
        style={{
          display: "grid",
          placeContent: "center",
          height: "100vh",
          gap: "0.08rem",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          className="example-button"
        >
          Click Me!
        </motion.button>

        <motion.button
          style={{ backgroundColor: "red" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          className="example-button"
        >
          Click Me!
        </motion.button>
      </div>
    </MotionConfig>
  );
};

export default Gestures;
