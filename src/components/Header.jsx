import React from "react";

export default function Header() {
  return (
    <header>
      <img
        src="./public/solana-logo.png"
        alt="Solana-logo"
        className="header--img"
      />
      <h2 className="header--title">Price Tracker</h2>
    </header>
  );
}
