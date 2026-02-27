import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Login() {
  const { stateName } = useParams();
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [captchaText, setCaptchaText] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");

  // Generate random captcha
  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = () => {
    if (!isSignup) {
      if (userCaptcha !== captchaText) {
        alert("Captcha incorrect!");
        generateCaptcha();
        return;
      }
    }

    navigate(`/options/${stateName}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to bottom, #FF9933 0%, white 50%, #138808 100%)",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          width: "360px",
        }}
      >
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          style={{
            marginBottom: "15px",
            backgroundColor: "#000080",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>

        <h2 style={{ textAlign: "center" }}>
          {isSignup ? "Create Account" : "Login"}
        </h2>

        <p style={{ textAlign: "center", marginBottom: "15px" }}>
          Explore {stateName}
        </p>

        {!isSignup && (
          <>
            <input
              type="text"
              placeholder="Email or Mobile Number"
              style={{ padding: "10px", margin: "8px 0", width: "100%" }}
            />

            <input
              type="password"
              placeholder="Password"
              style={{ padding: "10px", margin: "8px 0", width: "100%" }}
            />

            {/* CAPTCHA BOX */}
            <div
              style={{
                marginTop: "15px",
                display: "inline-block",
                padding: "8px 15px",
                fontSize: "18px",
                fontWeight: "bold",
                letterSpacing: "3px",
                fontFamily: "monospace",
                color: "#333",
                border: "2px solid #555",
                borderRadius: "6px",
                backgroundImage:
                  "radial-gradient(#bbb 1px, transparent 1px)",
                backgroundSize: "8px 8px",
                transform: "rotate(-2deg)",
              }}
            >
              {captchaText}
            </div>

            <input
              type="text"
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
              placeholder="Enter Captcha"
              style={{ padding: "10px", margin: "10px 0", width: "100%" }}
            />

            <button
              onClick={generateCaptcha}
              style={{
                backgroundColor: "#FF9933",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer",
                marginBottom: "10px",
                borderRadius: "4px",
              }}
            >
              Refresh Captcha
            </button>
          </>
        )}

        {isSignup && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              style={{ padding: "10px", margin: "8px 0", width: "100%" }}
            />
            <input
              type="text"
              placeholder="Surname"
              style={{ padding: "10px", margin: "8px 0", width: "100%" }}
            />
            <input
              type="email"
              placeholder="Email"
              style={{ padding: "10px", margin: "8px 0", width: "100%" }}
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              style={{ padding: "10px", margin: "8px 0", width: "100%" }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{ padding: "10px", margin: "8px 0", width: "100%" }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              style={{ padding: "10px", margin: "8px 0", width: "100%" }}
            />
          </>
        )}

        <button
          onClick={handleSubmit}
          style={{
            padding: "10px",
            marginTop: "10px",
            width: "100%",
            cursor: "pointer",
            backgroundColor: "#138808",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span
            onClick={() => {
              setIsSignup(!isSignup);
              generateCaptcha();
            }}
            style={{
              color: "#000080",
              marginLeft: "5px",
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;