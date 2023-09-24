import React, { useState } from "react";
import { cardDetails } from "./card-details";
import Card from "./Card";
import Row from "./Row";

const ChallengeIV = () => {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="container">
      <Row speed={20} playing={playing}>
        {cardDetails.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </Row>
    </div>
  );
};

export default ChallengeIV;
