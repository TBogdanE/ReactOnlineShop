import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const [activeBtn, setActive] = useState("/");
  return (
    <header>
      <div id="menu-title">TBE's Showroom</div>
      <div id="menu-list">
        <Link
          to="/"
          className={activeBtn === "/" ? "menu-btn-active " : "menu-btn"}
          onClick={() => setActive("/")}
        >
          Home
        </Link>
        <Link
          to="checkout"
          className={activeBtn === "checkout" ? "menu-btn-active " : "menu-btn"}
          onClick={() => setActive("checkout")}
        >
          Checkout
        </Link>
      </div>
    </header>
  );
}
