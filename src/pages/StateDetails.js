import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const stateData = {
  "Andhra Pradesh": {
    culture: "Rich traditions, Kuchipudi dance, temple culture",
    food: "Biryani, Gongura Pachadi, Pulihora",
    dance: "Kuchipudi",
    dress: "Saree, Dhoti",
    festival: "Ugadi, Sankranti"
  },

  "Tamil Nadu": {
    culture: "Dravidian culture, temple architecture",
    food: "Dosa, Idli, Sambar",
    dance: "Bharatanatyam",
    dress: "Kanchipuram Saree, Veshti",
    festival: "Pongal"
  },

  "Kerala": {
    culture: "Backwater culture, Ayurveda",
    food: "Sadya, Appam",
    dance: "Kathakali",
    dress: "Mundu, Set Saree",
    festival: "Onam"
  }
};

function StateDetails() {

  const { name } = useParams();
  const navigate = useNavigate();

  const state = stateData[name];

  return (
    <div style={styles.page}>

      <button style={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 style={styles.title}>{name}</h1>

      {state ? (
        <div style={styles.box}>
          <p><b>Culture:</b> {state.culture}</p>
          <p><b>Food:</b> {state.food}</p>
          <p><b>Dance:</b> {state.dance}</p>
          <p><b>Dress:</b> {state.dress}</p>
          <p><b>Festival:</b> {state.festival}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}

    </div>
  );
}

const styles = {

  page: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(orange, white, green)"
  },

  backBtn: {
    padding: "8px 16px",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  title: {
    textAlign: "center",
    margin: "20px 0"
  },

  box: {
    maxWidth: "600px",
    margin: "auto",
    background: "#ffffffcc",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 0 6px rgba(0,0,0,0.4)",
    fontSize: "18px"
  }

};

export default StateDetails;