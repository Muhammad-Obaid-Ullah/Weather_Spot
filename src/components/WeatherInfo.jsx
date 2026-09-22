import { motion } from "framer-motion";

function WeatherInfo({ weatherInfo }) {
  const date = new Date(weatherInfo.current.last_updated);

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  const formattedDate = year + "-" + month + "-" + day;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full text-white text-sm xxsm:text-base py-14 px-16 col-start-1 col-end-11 row-start-1 row-end-2 xl:col-start-1 xl:col-end-8 xl:row-start-1 xl:row-end-2 2.2xl:col-start-1 2.2xl:col-end-3 2.2xl:row-start-1 2.2xl:row-end-2 md-2:flex gap-4  rounded-3xl backdrop-blur-md bg-zinc-950/30"
    >
      <div className="basis-2/3">
        <div className="flex flex-col-reverse gap-2 sm:gap-0 sm:flex-row items-center justify-between">
          <div>Country: {weatherInfo.location.country}</div>
          <div className="">{formattedDate}</div>
        </div>

        <div
          className="mt-6 pb-4 text-center text-[1.8rem] sm:text-left xxsm:text-[2.2rem] xsm:text-[2.45rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[3.9rem] leading-none font-bold border-b border-1 border-solid border-white uppercase tracking-wide"
          style={{ WebkitTextStroke: "3px #000" }}
        >
          {weatherInfo.location.name}
        </div>

        <div className="mt-4 sm:flex items-center justify-between">
          <div>
            lat( &#981; ):&nbsp;&nbsp;&nbsp;{weatherInfo.location.lat} deg
          </div>
          <div className="sm:mt-0 mt-2">
            lon( &#955; ):&nbsp;&nbsp;&nbsp;{weatherInfo.location.lon} deg
          </div>
        </div>

        <div className="sm:mt-4 mt-6">
          Region:&nbsp;&nbsp;{weatherInfo.location.region}
        </div>

        <div className="mt-10 flex flex-col gap-2 items-start sm:grid sm:grid-cols-2 sm:gap-y-6 sm:items-center sm:justify-items-start">
          <div className="w-max">
            &#x2022;&nbsp;&nbsp;Temperature:&nbsp;&nbsp;&nbsp;&nbsp;
            {weatherInfo.current.temp_c} &#176;C / {weatherInfo.current.temp_f}{" "}
            F
          </div>
          <div className="justify-self-end">
            &#x2022;&nbsp;&nbsp;Humidity:&nbsp;&nbsp;&nbsp;&nbsp;
            {weatherInfo.current.humidity}
          </div>
          <div>
            &#x2022;&nbsp;&nbsp;Wind Speed:&nbsp;&nbsp;&nbsp;&nbsp;
            {weatherInfo.current.wind_kph} km/H
          </div>
          <div className="justify-self-end">
            &#x2022;&nbsp;&nbsp;Wind Direction:&nbsp;&nbsp;&nbsp;&nbsp;
            {weatherInfo.current.wind_dir}
          </div>
        </div>
      </div>

      <div className="basis-1/3">
        <div className="mt-3 xxsm:mt-6 md-2:mt-0 p-8 h-full flex flex-col items-center justify-center gap-5">
          <img
            src={weatherInfo.current.condition.icon}
            alt="weather icon"
            className="block"
          />

          <div className="self-start w-full">
            <div className="pb-4 border-b border-1 border-solid border-white text-center">
              Weather Condition
            </div>
            <div className="mt-3 leading-none">
              {weatherInfo.current.condition.text}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default WeatherInfo;
