import Image from "next/image";
import React, { useState } from "react";

function SelectStyle({ onUserSelect }) {
  const styleOptions = [
    {
      name: "Realistic",
      image: "/realistic.jpg",
    },
    {
      name: "Cartoon",
      image: "/cartoon2.png",
    },
    {
      name: "Comic",
      image: "/comic.png",
    },
    {
      name: "Water Color",
      image: "/watercolor.jpg",
    },
    {
      name: "GTA",
      image: "/gta.jpg",
    },
  ];
  const [selectedStyle, setSelectedStyle] = useState();
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-xl font-bold text-primary">Style</h2>
        <p className="text-gray-500 ">
          What style will you like for your video?
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-4">
          {styleOptions.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-xl hover:scale-105 transition-all cursor-pointer ${
                selectedStyle == item.name && "border-4 border-primary"
              }`}
            >
              <Image
                src={item.image}
                alt="style image"
                width={1000}
                height={1000}
                className="h-40 w-full object-cover rounded-lg "
                onClick={() => {
                  setSelectedStyle(item.name);
                  onUserSelect("imageStyle", item.name);
                }}
              />
              <h2 className="absolute p-1 text-center rounded-b-lg bg-black bottom-0 w-full text-white ">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectStyle;
