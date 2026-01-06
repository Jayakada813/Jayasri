import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logo from "../assets/logo.png"; // Correct path

export default function Certificate() {
  const { user } = useContext(AuthContext);

  const downloadCertificate = () => {
    const element = document.getElementById("certificate");
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0, 210, 150); // A4 size
      pdf.save("certificate.pdf");
    });
  };

  return (
    <div
      id="certificate"
      className="certificate"
      style={{
        padding: "40px",
        border: "3px solid #4caf50",
        borderRadius: "15px",
        maxWidth: "600px",
        textAlign: "center",
        backgroundColor: "#fff",
        margin: "50px auto",
        position: "relative",
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "80px",
          marginBottom: "20px",
        }}
      />

      {/* Title */}
      <h2 style={{ color: "#4caf50", marginBottom: "20px" }}>
        🎉 Congratulations!
      </h2>

      {/* User name */}
      <p style={{ fontSize: "18px", marginBottom: "40px" }}>
        {user?.firstName} {user?.lastName} <br />
        has successfully completed the LMS course.
      </p>

      {/* Manager signature */}
      <div
        style={{
          marginTop: "40px",
          textAlign: "right",
          paddingRight: "20px",
          fontFamily: "cursive",
        }}
      >
        <p>Manager</p>
        <p style={{ fontSize: "24px" }}>🖊️</p>
      </div>

      {/* Download button */}
      <button
        onClick={downloadCertificate}
        style={{
          marginTop: "30px",
          padding: "12px 20px",
          borderRadius: "8px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Download Certificate
      </button>
    </div>
  );
}