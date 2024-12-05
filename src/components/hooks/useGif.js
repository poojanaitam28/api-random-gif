import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
console.log("api key", API_KEY);
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=8TjUOJiGrnq9tQCGHQvzr3k6oyNnQiNS&tag=&rating=g`;

function useGif(tag) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (tag) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${url}&tag=${tag}`);
      console.log("data", data);
      const imageSource = data?.data?.images?.downsized_large?.url;
      setGif(imageSource);
      console.log(imageSource);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("car");
  }, []);

  return { gif, loading, fetchData };
}

export default useGif;
