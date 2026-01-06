import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Homepage({ goCourse }) {
  const { login } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleLogin = () => {
    if (!firstName || !lastName) {
      alert("Enter First Name and Last Name!");
      return;
    }
    login(firstName, lastName);
    goCourse();
  };

  return (
    <div className="home" style={{ position: "relative" }}>
      {/* Contact info at top-right corner */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          textAlign: "right",
          fontSize: "14px",
          color: "#555",
        }}
      >
        <p>📞: 9361253577</p>
        <p>🌐: www.LMSlite.com</p>
      </div>

      {/* Homepage content */}
      <h1>🎓 Online Learning Progress Tracker (LMS Lite)</h1>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={handleLogin}>Enter Courses</button>
    </div>
  );
}
