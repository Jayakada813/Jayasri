export default function Progress({ next, courses }) {
  const total = courses.flatMap(c => c.lessons).length;
  const done = courses.flatMap(c => c.lessons).filter(l => l.completed).length;
  const percent = Math.round((done / total) * 100);

  return (
    <div className="page">
      <h2>Progress Page</h2>

      <div className="bar">
        <div className="fill" style={{ width: `${percent}%` }}></div>
      </div>

      <p>{percent}% Completed</p>

      <button onClick={next}>Take Quiz</button>
    </div>
  );
}
