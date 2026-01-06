import { subjects } from "../data/subjects";

export default function Subject({ subject, back, markComplete }) {
  // Find the subject key in subjects.js that matches the title
  const subjectKey = Object.keys(subjects).find(
    (key) => subjects[key].title === subject
  );

  // Get the notes dynamically
  const notes = subjectKey ? subjects[subjectKey].notes : "No notes available";

  return (
    <div className="subject-page">
      <h2>{subject}</h2>

      <p>
        This page contains details and lessons related to
        <b> {subject}</b>.
      </p>

      {/* Dynamic syllabus content */}
      <p>{notes}</p>

      <button
        onClick={() => {
          markComplete(subject); // Mark lesson as completed
          back(); // Go back to Course page
        }}
      >
        ⬅ Back to Course
      </button>
    </div>
  );
}
