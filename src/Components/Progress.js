import React from "react";

function Progress({ index, numQuestions, points, maxPoissiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        <strong>{index + 1}</strong> / {numQuestions} Questions
      </p>
      <p>
        <strong>{points} </strong> / {maxPoissiblePoints}
      </p>
    </header>
  );
}

export default Progress;
