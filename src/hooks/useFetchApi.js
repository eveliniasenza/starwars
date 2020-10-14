import {useState, useEffect} from "react";
import {useParams} from "react-router";
import {axiosRequest} from "../axiosRequest";

export const useFetchApi = (resource) => {
  const [body, setBody] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    axiosRequest.get(`/${resource}/${id}`).then(response => (
      setBody(response.data)
    ))
  }, [id]);

  return body;
}