import React from "react";
import { useNavigate } from "react-router-dom";

// STATES
import andhra from "../assets/andhra-pradesh.jpg";
import arunachal from "../assets/arunachal-pradesh.jpg";
import assam from "../assets/assam.jpg";
import bihar from "../assets/bihar.jpg";
import chhattisgarh from "../assets/chhattisgarh.jpg";
import goa from "../assets/goa.jpg";
import gujarat from "../assets/gujarat.jpg";
import haryana from "../assets/haryana.jpg";
import himachal from "../assets/himachal-pradesh.jpg";
import jharkhand from "../assets/jharkhand.jpg";
import karnataka from "../assets/karnataka.jpg";
import kerala from "../assets/kerala.jpg";
import madhya from "../assets/madhya-pradesh.jpg";
import maharashtra from "../assets/maharashtra.jpg";
import manipur from "../assets/manipur.jpg";
import meghalaya from "../assets/meghalaya.jpg";
import mizoram from "../assets/mizoram.jpg";
import nagaland from "../assets/nagaland.jpg";
import odisha from "../assets/odisha.jpg";
import punjab from "../assets/punjab.jpg";
import rajasthan from "../assets/rajasthan.jpg";
import sikkim from "../assets/sikkim.jpg";
import tamilnadu from "../assets/tamil-nadu.jpg";
import telangana from "../assets/telangana.jpg";
import tripura from "../assets/tripura.jpg";
import uttarpradesh from "../assets/uttar-pradesh.jpg";
import uttarakhand from "../assets/uttarakhand.jpg";
import westbengal from "../assets/west-bengal.jpg";

// UNION TERRITORIES
import andaman from "../assets/andaman-nicobar.jpg";
import chandigarh from "../assets/chandigarh.jpg";
import dadra from "../assets/dadra-and-nagar-haveli-daman-diu.jpg";
import delhi from "../assets/delhi.jpg";
import jammu from "../assets/jammu-and-kashmir.jpg";
import ladakh from "../assets/ladakh.jpg";
import lakshadweep from "../assets/lakshadweep.jpg";
import puducherry from "../assets/pondicherry.jpg";

function States() {
  const navigate = useNavigate();

  const statesData = [
    { name: "Andhra Pradesh", img: andhra },
    { name: "Arunachal Pradesh", img: arunachal },
    { name: "Assam", img: assam },
    { name: "Bihar", img: bihar },
    { name: "Chhattisgarh", img: chhattisgarh },
    { name: "Goa", img: goa },
    { name: "Gujarat", img: gujarat },
    { name: "Haryana", img: haryana },
    { name: "Himachal Pradesh", img: himachal },
    { name: "Jharkhand", img: jharkhand },
    { name: "Karnataka", img: karnataka },
    { name: "Kerala", img: kerala },
    { name: "Madhya Pradesh", img: madhya },
    { name: "Maharashtra", img: maharashtra },
    { name: "Manipur", img: manipur },
    { name: "Meghalaya", img: meghalaya },
    { name: "Mizoram", img: mizoram },
    { name: "Nagaland", img: nagaland },
    { name: "Odisha", img: odisha },
    { name: "Punjab", img: punjab },
    { name: "Rajasthan", img: rajasthan },
    { name: "Sikkim", img: sikkim },
    { name: "Tamil Nadu", img: tamilnadu },
    { name: "Telangana", img: telangana },
    { name: "Tripura", img: tripura },
    { name: "Uttar Pradesh", img: uttarpradesh },
    { name: "Uttarakhand", img: uttarakhand },
    { name: "West Bengal", img: westbengal },

    { name: "Andaman and Nicobar Islands", img: andaman },
    { name: "Chandigarh", img: chandigarh },
    { name: "Dadra and Nagar Haveli and Daman and Diu", img: dadra },
    { name: "Delhi", img: delhi },
    { name: "Jammu and Kashmir", img: jammu },
    { name: "Ladakh", img: ladakh },
    { name: "Lakshadweep", img: lakshadweep },
    { name: "Puducherry", img: puducherry },
  ];

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

      <h1>States & Union Territories</h1>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {statesData.map((state, index) => (
          <div
            key={index}
            onClick={() => navigate(`/login/${state.name}`)}
            style={{
              cursor: "pointer",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={state.img}
              alt={state.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "10px", fontWeight: "bold" }}>
              {state.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default States;