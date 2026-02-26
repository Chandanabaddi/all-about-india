import React from "react";
import { useNavigate } from "react-router-dom";

function Heritage() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>

      <button style={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 style={styles.heading}>Indian Heritage Sites</h1>

      <div style={styles.grid}>
        <div style={styles.card}>Taj Mahal</div>
        <div style={styles.card}>Hampi</div>
        <div style={styles.card}>Ajanta Caves</div>
        <div style={styles.card}>Ellora Caves</div>
        <div style={styles.card}>Khajuraho</div>
        <div style={styles.card}>Konark Temple</div>
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

export default Heritage;