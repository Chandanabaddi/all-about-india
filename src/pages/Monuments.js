import React from "react";
import { useNavigate } from "react-router-dom";

function Monuments() {

  const navigate = useNavigate();

  const monuments = [
    "Taj Mahal",
    "India Gate",
    "Qutub Minar",
    "Charminar",
    "Gateway of India",
    "Red Fort",
    "Hawa Mahal",
    "Mysore Palace",
    "Victoria Memorial",
    "Konark Sun Temple"
  ];

  return (
    <div style={styles.container}>

      <button style={styles.backBtn} onClick={() => navigate("/options")}>
        ← Back
      </button>

      <h1 style={styles.heading}>Indian Famous Monuments</h1>

      <div style={styles.grid}>
        {monuments.map((item) => (
          <div key={item} style={styles.card}>
            {item}
          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(orange, white, green)"
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px"
  },

  card: {
    padding: "15px",
    background: "#f2f2f2",
    textAlign: "center",
    borderRadius: "8px",
    fontWeight: "bold"
  },

  backBtn: {
    marginBottom: "20px",
    padding: "8px 14px",
    cursor: "pointer"
  }
};

export default Monuments;