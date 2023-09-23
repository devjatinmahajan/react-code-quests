import { useState } from "react";

export default function ChallengeII() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [rated, setRated] = useState(false);
  const handleRatingsChange = (i) => {
    setRating(i + 1);
    setHoveredRating(0);
    setRated(true);
  };
  const handleHoveredRatingsChange = (index) => {
    if (rated) return;
    setHoveredRating(index + 1);
  };
  return (
    <>
      <div className="all-stars">
        {new Array(5).fill().map((_, index) => (
          <div
            key={index}
            className="star-svg-container"
            onMouseEnter={() => handleHoveredRatingsChange(index)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => handleRatingsChange(index)}
          >
            <StarSvg filled={index < (hoveredRating || rating)} />
          </div>
        ))}
      </div>
      <p>Your Rating: {rating} stars</p>
    </>
  );
}

function StarSvg({ filled }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "gainsboro" : "none"}
      viewBox="0 0 24 24"
      strokeWidth="0.8"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}
