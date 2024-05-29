import { useEffect, useState } from "react";
import type { MouseEventHandler } from "react";
import { Inter } from "next/font/google";
import { LazyImage } from "./components/RandomFox";
import { addnewFox } from "./components/RandomFox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [images, setImages] = useState<Array<IFoxImage>>([]);

  const handleAddImage: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: IFoxImage = addnewFox();
    setImages([...images, newImageItem]);
  };

  const handleClickImage = () => {
    console.log("Click");
  };

  return (
    <main>
      <h3 className="text-2xl items-center font-bold justify-center">
        React App - TypeScript - Next JS
      </h3>

      <button
        className="py-3 px-4 m-5  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-300"
        onClick={handleAddImage}
      >
        Add new Fox
      </button>
      {images.map(({ id, url }) => (
        <div className="p-4" key={id}>
          <LazyImage
            src={url}
            onClick={handleClickImage}
            width={320}
            height="auto"
            className="rounded bg-gray-300 "
          />
        </div>
      ))}

      <footer></footer>
    </main>
  );
}
