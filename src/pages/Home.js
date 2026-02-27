import React from "react";
import { useNavigate } from "react-router-dom";
import india from "../assets/india.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${india})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          color: "#FF9933",
          textShadow: "2px 2px 10px black",
          marginBottom: "30px",
        }}
      >
        All About India
      </h1>

      <button
        onClick={() => navigate("/states")}
        style={{
          padding: "12px 30px",
          fontSize: "18px",
          borderRadius: "30px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#138808",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Know More
      </button>
    </div>
  );
}

export default Home;