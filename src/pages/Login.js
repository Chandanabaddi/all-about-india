import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      alert("Login Successful!");
      navigate("/admin");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div style={styles.container}>

      <button style={styles.backBtn} onClick={() => navigate("/options")}>
        ← Back
      </button>

      <h1 style={styles.heading}>Admin Login</h1>

      <div style={styles.card}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button style={styles.loginBtn} onClick={handleLogin}>
          Login
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
    justifyContent: "center",
    alignItems: "center"
  },

  heading: {
    fontSize: "36px",
    marginBottom: "20px"
  },

  card: {
    background: "white",
    padding: "35px",
    borderRadius: "12px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
  },

  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  loginBtn: {
    padding: "10px",
    background: "#138808",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer"
  },

  backBtn: {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "8px 14px",
    cursor: "pointer"
  }

};

export default Login;