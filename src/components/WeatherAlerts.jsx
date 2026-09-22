import Alert from "./Alert";

import { motion } from "framer-motion";

function WeatherAlerts({ alertsInfo }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full 3xl:px-4 col-start-1 col-end-11 row-start-4 row-end-5 xl:col-start-1 xl:col-end-11 xl:row-start-3 xl:row-end-4 2.2xl:col-start-4 2.2xl:col-end-5 2.2xl:row-start-1 2.2xl:row-end-3"
    >
      <div className="h-full flex flex-col rounded-3xl backdrop-blur-md bg-zinc-950/30">
        <div className="w-full text-center text-white text-base xxsm:text-lg px-16 py-5 border-b border-1 border-solid border-white">
          Weather Alerts
        </div>

        <ul
          className={`h-full w-full flex-1 sm:px-16 py-8 2.2xl:px-8 2.5xl:px-8 3xl:px-10 flex justify-center ${alertsInfo.alert.length === 0 ? "items-center" : "items-start"}`}
        >
          <div
            className={`h-[65dvh] lg:py-3 lg:px-4 2.2xl:px-1 2.5xl:px-2 3xl:px-4 overflow-auto flex gap-8 items-center flex-col ${alertsInfo.alert.length === 0 ? "justify-center" : "justify-start"} 2.2xl:gap-7`}
          >
            {alertsInfo.alert.length === 0 ? (
              <div className="text-base text-white">
                🕵️‍♂️ No alerts to show 😪
              </div>
            ) : (
              alertsInfo.alert.map((alert, index) => {
                return <Alert alert={alert} key={index} />;
              })
            )}
          </div>
        </ul>
      </div>
    </motion.div>
  );
}

export default WeatherAlerts;
