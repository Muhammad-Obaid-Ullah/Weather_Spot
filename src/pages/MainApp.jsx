import { useState } from "react";
import Search from "../features/search/Search";
import { useSearchParams } from "react-router-dom";
import "../styles/mainAppStyles.css";
import WeatherInfo from "../components/WeatherInfo";
import Astronomy from "../components/Astronomy";
import WeatherAlerts from "../components/WeatherAlerts";
import WeatherForecast from "../components/WeatherForecast";
import { convertTimeFormat } from "../helpers/convertTimeFormat";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

import { AnimatePresence, motion } from "framer-motion";

function MainApp() {
  const [searchParams, setSearchParams] = useSearchParams();
  const existingLocation = searchParams.get("loc");

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const forecastInfo = data?.forecast?.forecastday.map((forecast) => {
    return {
      date: forecast.date,
      hours: forecast.hour
        .filter((hour, index, arr) => {
          return index % 3 === 0 || index === arr.length - 1;
        })
        .map((hour) => {
          return {
            time: convertTimeFormat(hour.time),
            condition: hour.condition,
            temp_c: hour.temp_c,
            humidity: hour.humidity,
          };
        }),
    };
  });

  return (
    <div className="w-dvw min-h-dvh py-10 backgroundStyleMainApp">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Search
          usedAt="mainApp"
          setData={setData}
          existingLocation={existingLocation}
          setSearchParams={setSearchParams}
          setIsLoading={setIsLoading}
          setError={setError}
        />

        <div className="w-[90%] lg:w-[95%] ml-auto mr-auto mt-12 grid grid-cols-[repeat(10,minmax(0px,_1fr))] 2.2xl:grid-cols-[repeat(3,minmax(0px,_1fr))_.68fr] 2.5xl:grid-cols-[repeat(3,minmax(0px,_1fr))_.75fr] 3xl:grid-cols-4 3xl:gap-x-9 gap-x-7 gap-y-12 items-start">
          <AnimatePresence>
            {isLoading ? (
              <Spinner />
            ) : error ? (
              <Error error={error} />
            ) : (
              data.length !== 0 && (
                <>
                  <WeatherInfo
                    weatherInfo={{
                      current: data?.current,
                      location: data?.location,
                    }}
                  />
                  <Astronomy
                    astronomyInfo={data.forecast.forecastday[0].astro}
                  />
                  <WeatherAlerts alertsInfo={data.alerts} />
                  <WeatherForecast forecastInfo={forecastInfo} />
                </>
              )
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default MainApp;
