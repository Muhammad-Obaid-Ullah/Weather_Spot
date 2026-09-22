import { API_KEY, API_URL } from "../../Configurations/apiConfigurations";

export async function getAutoCompleteSuggestions(locationName, signal) {
  try {
    const res = await fetch(
      `${API_URL}/search.json?key=${API_KEY}&q=${locationName}`,
      { signal }
    );

    if (!res.ok)
      throw new Error("Something went wrong when getting the suggestions!!!!!");
    const data = await res.json();

    const locs = data.map((loc) => loc.name);
    return locs;
  } catch (error) {
    if (error.name !== "AbortError") throw new Error(`${error}`);
  }
}
