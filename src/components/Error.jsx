import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Error({ error }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl backdrop-blur-md bg-white/40"
    >
      <div className="text-center text-zinc-900 text-base xxsm:text-lg 2xl:text-xl px-16 py-5 border-b border-1 border-solid border-black">
        Alert
      </div>

      <div className="text-zinc-900 text-sm xxsm:text-base 2xl:text-lg flex items-center justify-center mt-9 mb-5 w-[90dvw] xxsm:w-[85dvw] md:w-[40rem] px-7 xxsm:px-12 sm:px-16 gap-3 xxsm:gap-7">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.8}
            stroke="currentColor"
            className="w-10 h-10 xxsm:w-12 xxsm:h-12 2xl:w-14 2xl:h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>
        <div>
          {error
            ? error
            : "The page you are trying to access may not exist !!!!!"}
        </div>
      </div>

      <NavLink
        to="/"
        className="w-max text-sm 2xl:text-base ml-[50%] -translate-x-1/2 xxsm:translate-x-0 xxsm:ml-auto xxsm:mr-14 mb-7 py-2 px-4 rounded-md flex items-center justify-center gap-4 border border-1 border-solid border-black text-zinc-900"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 md:w-4 md:h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span>Back to Home Page</span>
      </NavLink>
    </motion.div>
  );
}

export default Error;
