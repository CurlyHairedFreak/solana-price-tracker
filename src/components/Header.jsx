import React from "react";

export default function Header() {
  return (
    <header>
      <img
        src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogotype.e4df684f.svg&w=256&q=75"
        alt="Solana-logo"
        className="header--img"
      />
      <h2 className="header--title">Price Tracker</h2>
    </header>
  );
}
