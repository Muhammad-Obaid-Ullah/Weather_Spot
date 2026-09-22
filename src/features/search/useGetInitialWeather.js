import { useEffect } from "react";
import { getForecast } from "../../services/api/apiForecast";

export function useGetInitialWeather(
  locationName,
  setData,
  setIsLoading,
  setError
) {
  useEffect(function () {
    if (!locationName) return;
    setIsLoading(true);
    setError("");

    async function getData() {
      try {
        const data = await getForecast(locationName);
        setData(data);
      } catch (error) {
        setError(error.message);
        setData("");
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);
}
