import { useState } from "react";
import { quizQuestions } from "../data/subjects"

export default function Quiz({ pass }) {
  const [currentQ, setCurrentQ] = useState(0); // Current question index
  const [score, setScore] = useState(0);       // Current score
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[currentQ];

  const handleAnswer = (option) => {
    // Increment score if correct
    if (option === question.correct) {
      setScore(score + 1);
    }

    // Move to next question or finish
    if (currentQ + 1 < quizQuestions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true); // Quiz finished
    }
  };

  if (finished) {
    return (
      <div className="page">
        <h2>Quiz Completed 🎉</h2>
        <p>
          You scored <b>{score}</b> out of <b>{quizQuestions.length}</b>
        </p>
        <button onClick={pass}>Finish Quiz & Get Certificate</button>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Quiz</h2>

      {/* Question */}
      <p>{question.question}</p>

      {/* Options */}
      {question.options.map((opt) => (
        <button
          key={opt}
          onClick={() => handleAnswer(opt)}
          style={{ margin: "5px" }}
        >
          {opt}
        </button>
      ))}

      {/* Progress */}
      <p>
        Question {currentQ + 1} of {quizQuestions.length}
      </p>
      <p>Current Score: {score}</p>
    </div>
  );
}
