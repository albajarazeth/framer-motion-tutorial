import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div style={{ height: "150vh " }} />
      <motion.div
        style={{ height: "150vh", background: "black" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "red" : "blue",
          transition: "1s background",
        }}
      />
    </>
  );
};

export default ViewBasedAnimations;
