import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      alert("User Login Successful!");
      navigate("/culture");   // normal users go to culture page
    } else {
      alert("Please enter details");
    }
  };

  return (
    <div style={styles.container}>

      <button style={styles.backBtn} onClick={() => navigate("/options")}>
        ← Back
      </button>

      <h1>User Login</h1>

      <div style={styles.card}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button style={styles.btn} onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}

const styles = {
  container:{
    minHeight:"100vh",
    background:"linear-gradient(orange, white, green)",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  card:{
    background:"white",
    padding:"30px",
    borderRadius:"10px",
    width:"300px",
    display:"flex",
    flexDirection:"column",
    gap:"15px"
  },
  input:{
    padding:"10px",
    fontSize:"16px"
  },
  btn:{
    padding:"10px",
    background:"#138808",
    color:"white",
    border:"none",
    cursor:"pointer"
  },
  backBtn:{
    position:"absolute",
    top:"20px",
    left:"20px",
    padding:"8px 14px"
  }
};

export default UserLogin;