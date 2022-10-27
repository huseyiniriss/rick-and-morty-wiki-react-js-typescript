import axios from "axios";
import {useEffect, useState} from "react";
import {IAxiosParams} from "./interfaces";

const useAxios =
  ({
     url,
     method = 'get',
     params = {},
     data = {},
     canFetch = true
   }: IAxiosParams) => {
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const fetchRequest = () => {
      setLoading(true);
      setResponse(null);
      setError('');
      axios({
        baseURL: 'https://rickandmortyapi.com',
        method,
        url,
        params,
        data
      })
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    useEffect(() => {
      canFetch && fetchRequest();
    }, [JSON.stringify(params), JSON.stringify(data), url, canFetch]);

    return {response, error, loading};
  };

export default useAxios;