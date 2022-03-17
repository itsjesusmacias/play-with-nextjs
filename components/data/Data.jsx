import { useState } from "react";
import Image from "next/image";

const INITIAL_DATA = {
  character: null,
  isError: false,
  isLoading: false,
};

const Data = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(INITIAL_DATA);

  const { character, isError, isLoading } = data;
  const { name, image, status } = character || {};

  const fetchData = () =>
    fetch("https://rickandmortyapi.com/api/character/?name=" + input)
      .then((res) => res.json())
      .then((data) => {
        const { results, error } = data;
        const { name, status, id, image } = results?.[0] || {};
        const character = results && { name, status, id, image };

        setData({
          character,
          isLoading: false,
          isError: !!error,
        });
      });

  const onSearch = (e) => setInput(e.target.value);

  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          className="rounded-l-lg border border-black px-4"
          placeholder="Write a name..."
          onChange={onSearch}
        />
        <button
          onClick={fetchData}
          className="bg-gray-900 text-white py-2 px-4 rounded-r-lg border transition-all border-black hover:bg-white hover:text-black"
        >
          Get Data!
        </button>
      </div>

      {character && !isLoading && (
        <div className="flex justify-center mt-10">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="w-full">
              <Image
                src={image}
                alt="Sunset in the mountains"
                width={512}
                height={512}
                className="rounded-t-lg"
                objectFit="contain"
              />
            </div>
            <div className="flex items-center justify-between px-6 py-4">
              <div className="font-bold text-xl mb-2">{name}</div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {status}
              </span>
            </div>
          </div>
        </div>
      )}

      {isError && (
        <div>
          <h3>Parece que ha ocurrido un error</h3>
        </div>
      )}
    </>
  );
};
export { Data };
