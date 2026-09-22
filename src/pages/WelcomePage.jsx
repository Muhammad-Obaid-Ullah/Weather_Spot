import Search from "../features/search/Search";
import "../styles/welcomePageStyles.css";
import { easeOut, motion } from "framer-motion";

function WelcomePage() {
  return (
    <div className="w-dvw h-dvh backgroundStyle relative overflow-x-hidden">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1
          className="w-full text-[1.6rem] xxsm:text-[2.2rem] xsm:text-[2.45rem] sm:text-[3rem] md:text-[3.5rem] xl:text-6xl 2xl:text-7xl font-extrabold text-zinc-950 absolute top-1/2 left-1/2 -translate-x-[9.45rem] -translate-y-16 xxsm:-translate-x-[12.70rem] xxsm:-translate-y-20 xsm:-translate-x-[14.30rem] xsm:-translate-y-24 sm:-translate-x-[17.5rem] sm:-translate-y-28 md:-translate-x-[20rem] md:-translate-y-32 xl:-translate-x-[34rem] xl:-translate-y-28 2xl:-translate-x-[40rem] 2xl:-translate-y-32"
          style={{ WebkitTextStroke: "1px #f8fafc" }}
        >
          Welcome to weather-spot
        </h1>
        <Search usedAt="welcomePage" />
      </motion.div>
    </div>
  );
}

export default WelcomePage;
