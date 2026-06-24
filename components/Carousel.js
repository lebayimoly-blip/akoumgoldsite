import { useState, useEffect } from "react";

export default function Carousel({ images, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-btn left" onClick={prevSlide}>‹</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
      <button className="carousel-btn right" onClick={nextSlide}>›</button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
