import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Options() {
  const { stateName } = useParams();
  const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    textAlign: "center",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        textAlign: "center",
        background:
          "linear-gradient(to bottom, #FF9933 0%, white 50%, #138808 100%)",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          backgroundColor: "#000080",
          color: "white",
          border: "none",
          padding: "8px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <h1>Explore {stateName}</h1>

      <div
        style={{
          marginTop: "50px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
        }}
      >
        {/* Culture */}
        <div
          style={cardStyle}
          onClick={() => navigate(`/culture/${stateName}`)}
        >
          Culture
        </div>

        {/* Heritage */}
        <div
          style={cardStyle}
          onClick={() => navigate(`/heritage/${stateName}`)}
        >
          Heritage Sites
        </div>

        {/* Monuments */}
        <div
          style={cardStyle}
          onClick={() => navigate(`/monuments/${stateName}`)}
        >
          Famous Monuments
        </div>

        {/* Historical */}
        <div
          style={cardStyle}
          onClick={() => navigate(`/historical/${stateName}`)}
        >
          Historical Places
        </div>
      </div>
    </div>
  );
}

export default Options;