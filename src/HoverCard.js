import React, { useState } from 'react';

const HoverCard = ({ title, image, description, tag }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-80 h-96 rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-gray-200 to-gray-800 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/70 to-black/10 text-white transition-all duration-500">
        {hovered ? (
          <>
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-sm mb-2">{description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs">{tag}</span>
              <button className="bg-gray-700 px-3 py-1 rounded-full text-xs hover:bg-gray-600">View More</button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-xs text-gray-300">Hover to explore</p>
          </>
        )}
      </div>
    </div>
  );
};

export default HoverCard;
