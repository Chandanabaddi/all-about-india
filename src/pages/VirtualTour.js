import React from "react";
import { useNavigate } from "react-router-dom";

function VirtualTour() {

  const navigate = useNavigate();

  const tours = [
    "Taj Mahal",
    "Red Fort",
    "Qutub Minar",
    "Mysore Palace",
    "Gateway of India",
    "Charminar",
    "India Gate",
    "Konark Sun Temple"
  ];

  return (
    <div style={styles.container}>

      <button style={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 style={styles.heading}>Virtual Tours</h1>

      <div style={styles.grid}>
        {tours.map((place) => (
          <div key={place} style={styles.card}>
            {place}
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
    background: "linear-gradient(to bottom, #ff9933, white, #138808)",
    textAlign: "center"
  },

  heading: {
    fontSize: "36px",
    marginBottom: "40px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "25px"
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "bold",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    cursor: "pointer"
  },

  backBtn: {
    padding: "10px 25px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#000",
    color: "white",
    fontSize: "16px",
    marginBottom: "20px"
  }

};

export default VirtualTour;