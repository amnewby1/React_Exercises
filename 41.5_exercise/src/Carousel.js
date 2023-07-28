import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const total = photos.length;
  const currCard = photos[currCardIdx];

  // Increments or decrements currCardIdx state by 1 and loops when reaching boundaries
  function goForward() {
    setCurrCardIdx((prevIdx) => (prevIdx + 1) % total);
  }

  function goBackward() {
    setCurrCardIdx((prevIdx) => (prevIdx - 1 + total) % total);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx !== 0 && (
          <i className="bi bi-arrow-left-circle" onClick={goBackward} />
        )}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {currCardIdx !== total - 1 && (
          <i className="bi bi-arrow-right-circle" onClick={goForward} />
        )}
      </div>
    </div>
  );
}

export default Carousel;
