import React from "react";

function FinishScreen({ points, maxPoissiblePoints, highscore }) {
  const percentage = (points / maxPoissiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage > 80 && percentage < 100) emoji = "🎉";
  if (percentage > 50 && percentage < 80) emoji = "😊";
  if (percentage > 0 && percentage < 50) emoji = "😔";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored {points} out of {maxPoissiblePoints} (
        {Math.ceil(percentage)} %)
      </p>
      <p className="highscore">highscore : {highscore} points</p>
    </>
  );
}

export default FinishScreen;
