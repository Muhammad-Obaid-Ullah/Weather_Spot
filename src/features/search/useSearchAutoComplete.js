import { useEffect, useRef, useState } from "react";
import { getAutoCompleteSuggestions } from "../../services/api/apiAutoCompleteSuggestions";

export function useSearchAutoComplete(locationName, clicked) {
  const [autoCompleteSuggestions, setAutoCompleteSuggestions] = useState([]);
  const controllerRef = useRef(null);

  useEffect(() => {
    if (!locationName || clicked || locationName.length < 3) {
      setAutoCompleteSuggestions([]);
      return;
    }

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    async function getData() {
      try {
        let locs = await getAutoCompleteSuggestions(locationName, signal);

        if (locs === undefined) locs = [];
        setAutoCompleteSuggestions(locs);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [locationName, clicked]);

  return [autoCompleteSuggestions];
}
