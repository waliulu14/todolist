import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom"; // Import useLocation

export const Dashboard = () => {
  const [ulang, setUlang] = useState(0);
  const [klik, setKlik] = useState(0);
  const Navigate = useNavigate();
  //   const location = useLocation(); // Gunakan useLocation

  const ulangBaru = () => {
    if (setUlang) {
      setUlang(ulang + 1);
      alert("klik 3 kali untuk menuju galery");
    }
  };

  //   const UlangBener = () => {
  //     if (ulang === 3) {
  //       navigasi("/3");
  //     } else {
  //       alert("klik 3 kali untuk menuju galery");
  //     }
  //   };

  const pencet = () => {
    setKlik(klik + 1);
  };

  //   useEffect(() => {
  //     if (klik === 0) {
  //       alert("Kamu berada di halaman Dashboard");
  //     } else if (klik === 1 && location.pathname === "/2") {
  //       navigasi("/1"); // Ubah navigate menjadi navigasi
  //     } else if (ulang === 3) {
  //       navigasi("/3");
  //     }
  //   }, [klik, location.pathname, ulang, Navigate]);

  useEffect(() => {
    if (klik === 2) {
      Navigate("/1");
    } else if (ulang === 3) {
      Navigate("/3");
    }
  }, [klik, ulang, Navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={pencet}>About Us</button>
      <button onClick={ulangBaru}>Gallery</button>
    </div>
  );
};
