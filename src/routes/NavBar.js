import React from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  let allDataLink = [
    {
      name: "La découverte",
      link: "/",
      id: 1,
    },
    {
      name: "Les styles",
      link: "/styles",
      id: 2,
    },
    {
      name: <>En&nbsp;savoir&nbsp;+</>,
      link: "/plus-d-infos",
      id: 3,
    },
    {
      name: "Mon aventure",
      link: "/mon-aventure",
      id: 4,
    },
  ];

  return (
    <header className={window.innerWidth > 600 ? "head" : "head head--mobile"}>
      <nav className="head__nav">
        <ul className="nav__list">
          {allDataLink.map((el, key) => (
            <li className="nav__el" key={el.id}>
              <Link
                key={el.id}
                to={el.link}
                className=""
                aria-label="Je redirige vers la home"
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="nav__btn">
          <span className="nav__btnBarre"></span>
          <span className="nav__btnBarre"></span>
          <span className="nav__btnBarre"></span>
        </button>
      </nav>

      <div className="head__logoBox">
        <NavLink to="/" className="head__logo sect__title">
          <b>Tattoo</b>&nbsp;
          <span className="sect__title--druzok">Explore</span>
        </NavLink>
      </div>
    </header>
  );
}

export default NavBar;
