import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Undergraduate() {
  const programs = [
    {
      title: "B.Sc. Computer Science",
      description: "Learn programming, algorithms, and software development with practical labs.",
    },
    {
      title: "B.A. English Literature",
      description: "Explore literature, creative writing, and critical analysis of texts.",
    },
    {
      title: "B.Com",
      description: "Accounting, finance, and business management skills for future careers.",
    },
    {
      title: "B.Sc. Physics / Chemistry / Mathematics",
      description: "Specialized courses with labs and research opportunities.",
    },
    {
      title: "BBA",
      description: "Business administration, management, and entrepreneurship programs.",
    },
  ];

  return (
    <div>
      <Header />

      <div style={{ paddingTop: "90px", textAlign: "center", backgroundColor: "#f8f9fa", paddingBottom: "2rem" }}>
        <h2 style={{ fontFamily: "Merriweather, serif", fontWeight: 700, fontSize: "2.2rem", color: "#003366" }}>
          Undergraduate Programs
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "#555" }}>
          Our undergraduate programs are designed to provide students with a strong foundation, practical skills, and opportunities for personal growth.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        {programs.map((program, index) => (
          <div
            key={index}
            style={{
              maxWidth: "300px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              padding: "1.5rem",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#003366", marginBottom: "1rem" }}>{program.title}</h3>
            <p style={{ color: "#555", fontSize: "0.95rem" }}>{program.description}</p>
            <Link
              to="/admissions"
              className="btn"
              style={{
                marginTop: "1rem",
                backgroundColor: "#003366",
                color: "white",
                borderRadius: "5px",
                padding: "0.5rem 1rem",
              }}
            >
              Apply Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Undergraduate;
