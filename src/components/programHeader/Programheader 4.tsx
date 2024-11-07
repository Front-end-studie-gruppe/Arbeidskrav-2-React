import React from "react";
import { Link } from "react-router-dom";
import ProgramHeaderStyle from "./Programheader.module.css";

const Programheader = () => {
  return (
    <nav className={ProgramHeaderStyle.nav}>
      <ul>
        <li>
          <Link to="/program">Program</Link>
        </li>
        <li>
          <Link to="/speakers">All Speakers</Link>
        </li>
        <li>
          <Link to="/talks">All Talks</Link>
        </li>
        <li>
          <Link to="/rooms">Available rooms</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Programheader;
