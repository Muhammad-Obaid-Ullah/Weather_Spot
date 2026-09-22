import { WiHumidity } from "react-icons/wi";

function Forecast({ hour }) {
  return (
    <div className="w-36 bg-slate-50 text-gray-900 text-sm rounded-lg flex flex-col items-center shrink-0 xl:shrink">
      <div className="py-2 px-4 border-b border-1 border-solid border-gray-900">
        {hour.time}
      </div>

      <div className="px-3 pt-2">
        <img src={hour.condition.icon} alt="weatherIcon" />
      </div>

      <div className="py-2 px-2 xl:px-1 2xl:px-2 flex items-center justify-center gap-0.5">
        <div>{hour.temp_c} &#176;C</div>
        <div>/</div>
        <div className="flex items-center justify-center">
          <span>
            <WiHumidity className="text-xl" />
          </span>
          <span>{hour.humidity}</span>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
