import { motion } from "framer-motion";

function Spinner() {
  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="loader text-[3px] xxsm:text-[4px] md:text-[5px] 2xl:text-[6px]"></div>
    </motion.div>
  );
}

export default Spinner;
