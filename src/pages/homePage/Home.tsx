import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <h1>Welcome to JavaZone</h1>
      <p>
        September 4th-5th 2024 in Oslo Spektrum, Norway Conference: September
        4th-5th Workshops: September 3rd Workshop registration opens on August
        19th
      </p>
      <button onClick={() => (window.location.href = "/program")}>
        Explore Program
      </button>
    </div>
  );
};

export default Home;
