import React, { useState, useEffect } from "react";

const ImageCard = ({ images, title, description = "" }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [displayedDescription, setDisplayedDescription] = useState("");

  useEffect(() => {
    if (typeof description === "string" && description.trim() !== "") {
      const sentences = description.split(".").filter((s) => s.trim() !== "");
      setDisplayedDescription(
        sentences.length > 1 ? sentences.slice(0, 3).join(". ") + "." : description
      );
    } else {
      setDisplayedDescription("No description available.");
    }
  }, [description]);

  useEffect(() => {
    let interval;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 800);
    }
    return () => clearInterval(interval);
  }, [isHovered, images]);

  return (
    <div
      className="relative w-[325px] h-[450px] rounded-2xl cursor-pointer mr-5 mb-5 overflow-hidden transform transition-transform duration-300 hover:scale-110"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black to-transparent flex items-center justify-center text-[#ade87a] font-bold text-[1.5rem] font-[Playfair_Display] text-center p-2">
        {title}
      </div>

      <img src={images[currentImage]} alt={title} className="w-full h-full object-cover" />

      {isHovered && (
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black to-transparent text-white flex items-center justify-center p-4 text-center text-sm leading-relaxed whitespace-normal overflow-hidden">
          {displayedDescription}
        </div>
      )}
    </div>
  );
};

export default ImageCard;
