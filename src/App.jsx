import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Course from "./components/Course";
import Subject from "./components/Subject";
import Progress from "./components/Progress";
import Quiz from "./components/Quiz";
import Certificate from "./components/Certificate";
import "./App.css";

export default function App() {
  // Current page state
  const [page, setPage] = useState("home");

  // Selected subject when viewing notes
  const [selectedSubject, setSelectedSubject] = useState("");

  // Track completed lessons
  const [completedLessons, setCompletedLessons] = useState({
    "React Basics": false,
    "JavaScript": false,
    "HTML & CSS": false,
  });

  // Mark a lesson as complete
  const markComplete = (subject) => {
    setCompletedLessons({ ...completedLessons, [subject]: true });
  };

  // Handle navbar clicks
  const handleNavClick = (p) => {
    setPage(p);
    if (p === "course") setSelectedSubject(""); // reset selected subject
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
          completedLessons={completedLessons}
          goSubject={(subject) => {
            setSelectedSubject(subject);
            setPage("subject");
          }}
          next={() => setPage("progress")}
        />
      )}

      {/* Subject Page */}
      {page === "subject" && selectedSubject && (
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
