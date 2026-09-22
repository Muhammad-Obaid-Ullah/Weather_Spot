import { useState } from "react";
import Forecast from "./Forecast";

import { motion } from "framer-motion";

function WeatherForecast({ forecastInfo }) {
  const [day, setDay] = useState(0);

  function handleNextDay() {
    setDay((day) => {
      if (day === forecastInfo.length - 1) return day;

      return day + 1;
    });
  }

  function handlePrevDay() {
    setDay((day) => {
      if (day === 0) return day;

      return day - 1;
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full flex flex-col col-start-1 col-end-11 row-start-3 row-end-4 xl:col-start-1 xl:col-end-11 xl:row-start-2 xl:row-end-3 2.2xl:col-start-1 2.2xl:col-end-4 2.2xl:row-start-2 rounded-3xl backdrop-blur-md bg-zinc-950/30"
    >
      <div className="w-full px-16 py-5 border-b border-1 border-solid border-white relative">
        <div className="text-white text-base xxsm:text-lg text-center">
          Forecast
        </div>

        <div className="text-sm mt-4 sm:mt-0 items-center justify-center gap-5 flex sm:gap-4 sm:absolute sm:top-1/2 sm:right-8 md:right-16 sm:-translate-y-1/2 bg-slate-50 text-gray-900 px-3 py-1 rounded-md">
          <button onClick={handlePrevDay}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div>{forecastInfo[day].date}</div>
          <button onClick={handleNextDay}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="py-4 px-10 xl:px-0 xl:py-0">
        <div className="w-full flex-1 px-3 xl:px-10 2.2xl:px-10 2.5xl:px-10 3xl:px-12 py-10 2.2xl:py-7 lg:flex-nowrap lg:justify-start overflow-auto flex items-center xl:justify-center gap-5 xl:gap-3 2.2xl:gap-3 2.5xl:gap-5">
          {forecastInfo[day].hours.map((hour, index) => {
            return <Forecast hour={hour} key={index} />;
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default WeatherForecast;
