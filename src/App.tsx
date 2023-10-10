import ImageSlider from "./ImageSlider";
import img1 from "./assets/3143_3840x2160.jpg";
import img2 from "./assets/anew_3840x2160.jpg";
import img3 from "./assets/artwork-princess-mononoke_3840x2160.jpg";
import img4 from "./assets/firefox_3840x2160.jpg";
import img5 from "./assets/nature-dream_3840x2160.jpg";

const IMAGES = [
  { url: img1, alt: "Image one" },
  { url: img2, alt: "Image two" },
  { url: img3, alt: "Image three" },
  { url: img4, alt: "Image four" },
  { url: img5, alt: "Image five" },
];

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
      <a href="/" style={{ fontSize: "20px" }}>
        Link
      </a>
    </div>
  );
}
