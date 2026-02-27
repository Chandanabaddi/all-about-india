import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import ugadi from "../assets/ugadi.jpg";
import sankranti from "../assets/happy-sankranthi.jpg";
import tirupati from "../assets/tirupati-brahmotsavam.jpg";
import kuchipudi from "../assets/kuchipudi-dance.jpg";
import burrakatha from "../assets/burrakatha.jpg";
import veeranatyam from "../assets/veeranatyam.jpg";
import andhraMeals from "../assets/andhra-meals.jpg";

import bathukamma from "../assets/bathukamma.jpg";
import bonalu from "../assets/bonalu.jpg";
import ogguKatha from "../assets/folk.jpg";
import biryani from "../assets/hyderabadi-chicken-biryani-on-dum.jpg";
import perini from "../assets/perini-shivatandavam.jpg";

import pongal from "../assets/pongal.jpg";
import puthandu from "../assets/puthandu.jpg";
import thaipusam from "../assets/thaipusam.jpg";
import bharatanatyam from "../assets/bharatanatyam.jpg";
import karagattam from "../assets/karagattam.jpg";
import idli from "../assets/idly-sambar.jpg";
import venPongal from "../assets/ven-pongal.jpg";
import tamilLanguage from "../assets/tamil-language.jpg";

function Culture() {
  const { stateName } = useParams();
  const navigate = useNavigate();

  const cultureData = {
    "Andhra Pradesh": {
      festivals: [
        { name: "Ugadi", img: ugadi },
        { name: "Sankranti", img: sankranti },
        { name: "Tirupati Brahmotsavam", img: tirupati },
      ],
      dance: [
        { name: "Kuchipudi", img: kuchipudi },
        { name: "Veeranatyam", img: veeranatyam },
      ],
      folk: [{ name: "Burrakatha", img: burrakatha }],
      food: [{ name: "Andhra Meals", img: andhraMeals }],
      language: [{ name: "Telugu Language", img: andhraMeals }],
    },

    Telangana: {
      festivals: [
        { name: "Bathukamma", img: bathukamma },
        { name: "Bonalu", img: bonalu },
      ],
      dance: [{ name: "Perini Shivatandavam", img: perini }],
      folk: [{ name: "Oggu Katha", img: ogguKatha }],
      food: [{ name: "Hyderabadi Biryani", img: biryani }],
      language: [{ name: "Telugu Language", img: ogguKatha }],
    },

    "Tamil Nadu": {
      festivals: [
        { name: "Pongal", img: pongal },
        { name: "Puthandu", img: puthandu },
        { name: "Thaipusam", img: thaipusam },
      ],
      dance: [{ name: "Bharatanatyam", img: bharatanatyam }],
      folk: [{ name: "Karagattam", img: karagattam }],
      food: [
        { name: "Idli Sambar", img: idli },
        { name: "Ven Pongal", img: venPongal },
      ],
      language: [{ name: "Tamil Language", img: tamilLanguage }],
    },
  };

  const stateCulture = cultureData[stateName];

  if (!stateCulture) {
    return <h2 style={{ textAlign: "center" }}>No data found</h2>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: "linear-gradient(to bottom, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "8px 16px",
          backgroundColor: "#000080",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Culture of {stateName}
      </h1>

      {Object.entries(stateCulture).map(([section, items]) => (
        <div key={section} style={{ marginBottom: "40px" }}>
          <h2 style={{ textTransform: "capitalize" }}>{section}</h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {items.map((item, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <p style={{ marginTop: "8px", fontWeight: "bold" }}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Culture;