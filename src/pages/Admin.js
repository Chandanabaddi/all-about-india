import React from "react";
import { useNavigate } from "react-router-dom";

function Admin() {

  const navigate = useNavigate();

  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>Admin Dashboard</h1>

      <div style={styles.grid}>

        <div style={styles.card}>Manage States</div>
        <div style={styles.card}>Manage Monuments</div>
        <div style={styles.card}>Manage Heritage Sites</div>
        <div style={styles.card}>Manage Virtual Tours</div>
        <div style={styles.card}>View Users</div>

      </div>

      <button style={styles.logoutBtn} onClick={() => navigate("/")}>
        Logout
      </button>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    background: "linear-gradient(orange, white, green)",
    padding: "40px",
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

  logoutBtn: {
    marginTop: "40px",
    padding: "10px 25px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "red",
    color: "white"
  }

};

export default Admin;