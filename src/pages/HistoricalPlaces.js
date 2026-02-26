import React from "react";
import { useNavigate } from "react-router-dom";

function HistoricalPlaces() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>

      <button style={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 style={styles.heading}>Indian Historical Places</h1>

      <div style={styles.grid}>
        <div style={styles.card}>Red Fort</div>
        <div style={styles.card}>Qutub Minar</div>
        <div style={styles.card}>Charminar</div>
        <div style={styles.card}>Fatehpur Sikri</div>
        <div style={styles.card}>Sanchi Stupa</div>
        <div style={styles.card}>Mysore Palace</div>
      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(orange, white, green)",
    padding: "30px",
    textAlign: "center"
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px"
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    fontWeight: "bold"
  },
  backBtn: {
    padding: "8px 14px",
    marginBottom: "20px"
  }
};

export default HistoricalPlaces;