import { motion } from "framer-motion";

function SuggestionsList({
  suggestions,
  handleAutoCompleteSuggestions,
  usedAt,
}) {
  return (
    <motion.div
      initial={{
        height: 0,
        overflowY: "hidden",
        paddingTop: 0,
        paddingBottom: 0,
      }}
      animate={{
        height: "max-content",
        overflowY: "visible",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
      }}
      exit={{ height: 0, overflowY: "hidden", paddingTop: 0, paddingBottom: 0 }}
      transition={{ duration: 0.09, ease: "easeOut" }}
      className={`z-10 absolute w-full bg-slate-50 rounded-lg py-6 px-11 ${usedAt === "welcomePage" ? "top-16 left-0" : "top-16"}`}
    >
      <div className="absolute -top-2.5 left-[4.5rem] triangle"></div>

      <ul>
        {suggestions?.map((suggestion, index) => (
          <li
            key={index}
            className={`text-sm flex items-center gap-3 text-gray-600 cursor-pointer ${index !== suggestions.length - 1 && index !== 0 ? "py-4 border-b border-1 border-solid border-gray-600" : ""} ${index === 0 && suggestions.length !== 1 ? "pb-4 border-b border-1 border-solid border-gray-600" : ""} ${index === suggestions.length - 1 && suggestions.length !== 1 ? "pt-4" : ""}`}
            onClick={() => handleAutoCompleteSuggestions(suggestion)}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <span>{suggestion}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SuggestionsList;
