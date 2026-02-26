import React from "react";
import { useNavigate } from "react-router-dom";

const states = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
  "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
  "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
  "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu",
  "Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
];

const uts = [
  "Andaman & Nicobar Islands","Chandigarh",
  "Dadra & Nagar Haveli and Daman & Diu",
  "Delhi","Jammu & Kashmir","Ladakh",
  "Lakshadweep","Puducherry"
];

function Culture() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      
      <button style={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 style={styles.heading}>Indian States</h1>

      <div style={styles.grid}>
        {states.map((state) => (
          <div
            key={state}
            style={styles.card}
            onClick={() => navigate(`/state/${state}`)}
          >
            {state}
          </div>
        ))}
      </div>

      <h1 style={styles.heading}>Union Territories</h1>

      <div style={styles.grid}>
        {uts.map((ut) => (
          <div
            key={ut}
            style={styles.card}
            onClick={() => navigate(`/state/${ut}`)}
          >
            {ut}
          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {

  page: {
    minHeight: "100vh",
    padding: "30px",
    background: "linear-gradient(orange, white, green)"
  },

  backBtn: {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    background: "#000",
    color: "#fff",
    cursor: "pointer",
    marginBottom: "20px"
  },

  heading: {
    textAlign: "center",
    margin: "20px 0"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
    marginBottom: "40px"
  },

  card: {
    background: "#ffffffcc",
    padding: "12px",
    textAlign: "center",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 0 5px rgba(0,0,0,0.3)"
  }

};

export default Culture;