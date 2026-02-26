import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>ALL ABOUT INDIA</h1>

      <button style={styles.nextBtn} onClick={() => navigate("/options")}>
        Next →
      </button>

    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(orange, white, green)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: "40px",
    marginBottom: "20px"
  },

  nextBtn: {
    padding: "8px 18px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer"
  }
};

export default Home;