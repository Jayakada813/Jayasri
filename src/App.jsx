import { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./Components/Homepage";
import Course from "./components/Course";
import Progress from "./components/Progress";
import Quiz from "./components/Quiz";
import Certificate from "./components/Certificate";
import Subject from "./components/Subject";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home"); // Current page
  const [selectedSubject, setSelectedSubject] = useState(""); // Selected course

  // Track completed lessons
  const [completedLessons, setCompletedLessons] = useState({
    "React Basics": false,
    "JavaScript": false,
    "HTML & CSS": false,
  });

  // Mark lesson complete
  const markComplete = (subject) => {
    setCompletedLessons({ ...completedLessons, [subject]: true });
  };

  // Handle Navbar clicks
  const handleNavClick = (p) => {
    setPage(p);

    // Reset selected subject if navigating to course
    if (p === "course") setSelectedSubject("");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar currentPage={page} setPage={handleNavClick} />

      {/* Home Page */}
      {page === "home" && <Homepage goCourse={() => setPage("course")} />}

      {/* Course Page */}
      {page === "course" && (
        <Course
          goSubject={(sub) => {
            setSelectedSubject(sub);
            setPage("subject");
          }}
          completedLessons={completedLessons}
          next={() => setPage("progress")}
        />
      )}

      {/* Subject Page */}
      {page === "subject" && (
        <Subject
          subject={selectedSubject}
          back={() => setPage("course")}
          markComplete={markComplete}
        />
      )}

      {/* Progress Page */}
      {page === "progress" && (
        <Progress
          courses={[
            {
              lessons: Object.keys(completedLessons).map((name) => ({
                name,
                completed: completedLessons[name],
              })),
            },
          ]}
          next={() => {
            // Ensure all lessons completed before quiz
            const allDone = Object.values(completedLessons).every(Boolean);
            if (!allDone) {
              alert("Complete all lessons first!");
              return;
            }
            setPage("quiz");
          }}
        />
      )}

      {/* Quiz Page */}
      {page === "quiz" && <Quiz pass={() => setPage("certificate")} />}

      {/* Certificate Page */}
      {page === "certificate" && <Certificate />}
    </>
  );
}
