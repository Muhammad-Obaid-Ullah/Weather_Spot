import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { WiMoonrise } from "react-icons/wi";
import { WiMoonset } from "react-icons/wi";

import { motion } from "framer-motion";

function Astronomy({ astronomyInfo }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full flex flex-col text-white text-base col-start-1 col-end-11 row-start-2 row-end-3 xl:col-start-8 xl:col-end-11 xl:row-start-1 xl:row-end-2 2.2xl:col-start-3 2.2xl:col-end-4 2.2xl:row-start-1 2.2xl:row-end-2 rounded-3xl backdrop-blur-md bg-zinc-950/30 "
    >
      <div className="w-full text-center text-base xxsm:text-lg px-16 py-5 border-b border-1 border-solid border-white">
        Today&apos;s Astronomy
      </div>

      <ul className="w-full text-sm xxsm:text-base flex-1 px-16 py-8 flex flex-col justify-center">
        <li className="flex items-center justify-center gap-3 xxsm:gap-5 xl:gap-4 2xl:gap-5 pb-5 border-b border-1 border-solid border-white">
          <span>
            <WiSunrise className="text-3xl xxsm:text-4xl" />
          </span>
          <span>
            Sunrise:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{astronomyInfo.sunrise}
          </span>
        </li>
        <li className="flex items-center justify-center gap-3 xxsm:gap-5 xl:gap-4 2xl:gap-5 py-5 border-b border-1 border-solid border-white">
          <span>
            <WiSunset className="text-3xl xxsm:text-4xl" />
          </span>
          <span>
            Sunset:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{astronomyInfo.sunset}
          </span>
        </li>
        <li className="flex items-center justify-center gap-3 xxsm:gap-5 xl:gap-4 2xl:gap-5 py-5 border-b border-1 border-solid border-white">
          <span>
            <WiMoonrise className="text-3xl xxsm:text-4xl" />
          </span>
          <span>
            Moonrise:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{astronomyInfo.moonrise}
          </span>
        </li>
        <li className="flex items-center justify-center gap-3 xxsm:gap-5 xl:gap-4 2xl:gap-5 pt-5">
          <span>
            <WiMoonset className="text-3xl xxsm:text-4xl" />
          </span>
          <span>
            Moonset:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{astronomyInfo.moonset}
          </span>
        </li>
      </ul>
    </motion.div>
  );
}

export default Astronomy;
