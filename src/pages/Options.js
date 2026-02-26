import React from "react";
import { useNavigate } from "react-router-dom";

function Options() {

  const navigate = useNavigate();

  return (
    <div style={styles.container}>

      <button style={styles.backBtn} onClick={() => navigate("/")}>
        ← Back
      </button>

      <h1 style={styles.heading}>Explore India</h1>

      <div style={styles.box}>

        <button style={styles.btn} onClick={() => navigate("/culture")}>
          Indian Culture
        </button>

        <button style={styles.btn} onClick={() => navigate("/heritage")}>
          Indian Heritage Sites
        </button>

        <button style={styles.btn} onClick={() => navigate("/historical")}>
          Indian Historical Places
        </button>

        <button style={styles.btn} onClick={() => navigate("/monuments")}>
           Indian Famous Monuments
        </button>

        <button style={styles.btn} onClick={() => navigate("/virtualtour")}>
           Virtual Tour
        </button>

        <button style={styles.btn} onClick={() => navigate("/login")}>
           Admin Login
        </button>

        <button style={styles.btn} onClick={() => navigate("/userlogin")}>
           User Login
        </button>

      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(orange, white, green)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  heading: {
    fontSize: "32px",
    marginBottom: "30px"
  },

  box: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

  btn: {
    padding: "12px 30px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer"
  },

  backBtn: {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "8px 14px"
  }
};

export default Options;