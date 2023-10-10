import { useState } from "react";
import { ArrowBigRight, ArrowBigLeft, CircleDot, Circle } from "lucide-react";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export default function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };
  const showNextImage = () => {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  return (
    <section aria-label="Image slider" className="image-slider">
      <a href="#after-slider-img" className="skip-link">
        Skip image slider controls
      </a>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          height: "100%",
          width: "100%",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        className="img-slider-btn"
        onClick={showPrevImage}
        aria-label="View previews image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        className="img-slider-btn"
        onClick={showNextImage}
        aria-label="View next image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          left: "50%",
          translate: "-50%",
          bottom: "0.5rem",
          display: "flex",
          gap: "0.25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            onClick={() => setImageIndex(index)}
            aria-label={`View image ${index + 1}`}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-slider-img"></div>
    </section>
  );
}
