import useGif from "./hooks/useGif";
import Spinner from "./Spinner";


function Random() {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 bg-green-400 rounded-md border border-black flex flex-col items-center gap-y-5">
      <h1 className="mt-[15px] text-3xl underline uppercase font-semibold">
        A Random Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="" width="450" />}

      <button
        className="w-10/12 bg-yellow-500 font-semibold rounded-lg text-lg py-2 mb-[20px]"
        onClick={() => fetchData()}
      >
        Generate
      </button>


    </div>
  );
}

export default Random;
