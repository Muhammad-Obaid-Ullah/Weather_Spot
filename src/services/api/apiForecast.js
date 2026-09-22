import { API_KEY, API_URL } from "../../Configurations/apiConfigurations";

export async function getForecast(locationName) {
  try {
    const res = await fetch(
      `${API_URL}/forecast.json?key=${API_KEY}&q=${locationName}&days=3&aqi=no&alerts=yes`
    );

    if (!res.ok)
      throw new Error(
        "Something went wrong when fetching the weather data !!!!!"
      );

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
