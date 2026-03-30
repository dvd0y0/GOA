import React from "react";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#282c34",
        padding: "1.5rem",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>ჩემი საიტი</h1>
      <nav>
        <a href="#home">მთავარი</a>
        <a href="#about">ჩვენს შესახებ</a>
        <a href="#contact">კონტაქტი</a>
      </nav>
    </header>
  );
}
