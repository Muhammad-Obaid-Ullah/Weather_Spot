import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchAutoComplete } from "./useSearchAutoComplete";
import { getForecast } from "../../services/api/apiForecast";
import { useGetInitialWeather } from "./useGetInitialWeather";
import SuggestionsList from "./SuggestionsList";
import { AnimatePresence } from "framer-motion";

function Search({
  usedAt,
  setData,
  existingLocation,
  setSearchParams,
  setIsLoading,
  setError,
}) {
  const [locationName, setLocationName] = useState(
    existingLocation ? existingLocation : ""
  );
  const [suggestionSelected, setSuggestionSelected] = useState(
    existingLocation ? true : false
  );
  const [autoCompleteSuggestions] = useSearchAutoComplete(
    locationName,
    suggestionSelected
  );

  const inputRef = useRef(null);

  useGetInitialWeather(locationName, setData, setIsLoading, setError);

  const navigate = useNavigate();

  function handleLocationName(e) {
    setLocationName(e.target.value);
    setSuggestionSelected(false);
  }

  function handleAutoCompleteSuggestions(loc) {
    setLocationName(loc);
    setSuggestionSelected(true);
  }

  function handleSubmitWelcomePage(e) {
    e.preventDefault();
    inputRef.current.blur();
    setSuggestionSelected(true);

    if (locationName) {
      navigate(`/app?loc=${locationName}`);
    }
  }

  async function handleSubmitMainApp(e) {
    try {
      e.preventDefault();
      if (!locationName) return;
      inputRef.current.blur();
      setIsLoading(true);
      setError("");
      setSuggestionSelected(true);
      setSearchParams({ loc: locationName });

      const data = await getForecast(locationName);

      setData(data);
    } catch (error) {
      setError(error.message);
      setData("");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      className={`${usedAt === "welcomePage" ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-[35rem] h-7 xxsm:h-8 xsm:h-10 xl:w-[30rem] xxsm:w-72 xsm:w-96 w-60 rounded-3xl" : "relative md:ml-20 md:w-[26rem] w-[19rem] xxsm:w-96 ml-auto mr-auto"}`}
    >
      <div className={`absolute text-gray-600 left-6 top-1/2 -translate-y-1/2`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${usedAt === "welcomePage" ? "w-3 h-3 xxsm:w-4 xxsm:h-4 md:w-5 md:h-5 xl:w-6 xl:h-6" : "w-3 h-3 xxsm:w-4 xxsm:h-4 md:w-5 md:h-5"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      <form
        autoComplete="off"
        onSubmit={
          usedAt === "welcomePage"
            ? handleSubmitWelcomePage
            : handleSubmitMainApp
        }
      >
        <input
          type="text"
          className={`w-full rounded-3xl focus:outline-none text-gray-600 bg-slate-50 font-normal tracking-wider ${usedAt === "welcomePage" ? "h-7 xxsm:h-8 xsm:h-10 text-sm xsm:text-base xl:text-lg pl-14 xxsm:pl-16 pr-14 xl:pl-20 md:pr-16" : "h-8 xxsm:h-9 text-sm xxsm:text-base pl-16 pr-14"}`}
          placeholder="Search Location ....."
          value={locationName}
          ref={inputRef}
          onChange={handleLocationName}
        />
        <button
          className={`absolute text-gray-600 right-5 top-1/2 -translate-y-1/2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${usedAt === "welcomePage" ? "w-3 h-3 xxsm:w-4 xxsm:h-4 md:w-5 md:h-5 xl:w-6 xl:h-6" : "w-3 h-3 xxsm:w-4 xxsm:h-4 md:w-5 md:h-5"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </form>

      <AnimatePresence>
        {autoCompleteSuggestions?.length !== 0 && !suggestionSelected && (
          <SuggestionsList
            usedAt={usedAt}
            suggestions={autoCompleteSuggestions}
            handleAutoCompleteSuggestions={handleAutoCompleteSuggestions}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Search;
