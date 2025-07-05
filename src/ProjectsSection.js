// src/components/HoverCard.js
import React from "react";

const HoverCard = ({
  image = "/placeholder.svg?height=400&width=320",
  title = "Beautiful Landscape",
  subtitle = "Photography",
  shortText = "Hover to explore",
  longText = "Discover the breathtaking beauty of nature's most stunning landscapes and immerse yourself in tranquil moments.",
  buttonLabel = "View More",
  onButtonClick = () => {},
}) => {
  return (
    <div className="relative w-80 h-96 overflow-hidden rounded-xl shadow-lg cursor-pointer group bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content that slides up on hover */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white transform translate-y-6 transition-transform duration-500 ease-out group-hover:translate-y-0">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-200 mb-4 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
          {longText}
        </p>
        <div className="flex items-center justify-between opacity-0 transition-opacity duration-500 delay-200 group-hover:opacity-100">
          <span className="text-xs text-gray-300">{subtitle}</span>
          <button
            onClick={onButtonClick}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium hover:bg-white/30 transition-colors"
          >
            {buttonLabel}
          </button>
        </div>
      </div>

      {/* Initially visible content */}
      <div className="absolute bottom-6 left-6 text-white transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-300">{shortText}</p>
      </div>
    </div>
  );
};

export default HoverCard;
