import React from "react";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <header className="px-8">
      <nav>
        <img src={logo} alt="Apple logo" />

        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.ref}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3 ">
          <button>
            <img src={search} alt="search" />
          </button>
          <button>
            <img src={cart} alt="cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
