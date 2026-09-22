import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <div className={style.brandRow}>
        <span className={style.brandMark}>DCC</span>
        <h1>Dorsey's Personal Website</h1>
      </div>

      <nav className={style.nav} aria-label="Main navigation">
        <Link href="/" className={style.navLink}>
          Home
        </Link>
        <Link href="/about" className={style.navLink}>
          About
        </Link>
        <Link href="/contact" className={style.navLink}>
          Contact Me
        </Link>
      </nav>
    </header>
  );
}
