import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const navigasi = useNavigate();

  const ubahNama = (e) => {
    setNama(e.target.value);
  };

  const ubahPassword = (e) => {
    setPassword(e.target.value);
  };

  const tombol = () => {
    if (nama === "zoro" && password === "zoro") {
      navigasi("/2");
    } else {
      alert("password dan username salah");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <h3>nama : {nama}</h3>
      <input onChange={ubahNama}></input>

      <h3>Password : {password}</h3>
      <input onChange={ubahPassword}></input>
      <button onClick={tombol}>Klik Disini</button>
    </div>
  );
};
