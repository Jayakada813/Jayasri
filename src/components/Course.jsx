import { subjects } from "../data/subjects";

export default function Course({ goSubject, completedLessons, next }) {
  return (
    <div className="courses">
      <h2>Courses</h2>

      {Object.keys(subjects).map((key) => (
        <div key={key} className="course-card">
          <h3>{subjects[key].title}</h3>
          <button onClick={() => goSubject(subjects[key].title)}>
            View Notes
          </button>

          {/* Show completed check if lesson is done */}
          {completedLessons[subjects[key].title] && <span>✅ Completed</span>}
        </div>
      ))}

      <button onClick={next}>View Progress</button>
    </div>
  );
}
