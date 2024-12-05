import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "./hooks/useGif";

function Tags() {
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-400 rounded-md border border-black flex flex-col items-center gap-y-5 mt-[20px]">
      <h1 className="mt-[15px] text-3xl underline uppercase font-semibold">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="" width="450" />}

      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-1 text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button
        className="w-8/12 bg-yellow-500 font-semibold rounded-lg text-lg p-2 mb-[20px] text-center"
        onClick={() => fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
}

export default Tags;
