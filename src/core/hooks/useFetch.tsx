import { useState, useEffect } from "react";
import { FilmDetails } from "../../models/Film";
import { FetchError } from "../errors";
import { __API_LINK__ } from "../exports";

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<FilmDetails | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<FetchError | undefined>();

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      const res = await fetch(
        `${__API_LINK__}${endpoint}?api_key=${process.env.REACT_APP_FILM_API_KEY}`
      );
      const json = await res.json();
      if (res.status !== 200) {
        setError(json);
      } else {
        setData(json);
      }
      setLoading(false);
    };
    get();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
