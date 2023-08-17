import React from "react";
import { Link } from "react-router-dom";

export default function Foot() {

    let daten = new Date().getFullYear();
  return (
    <>
      <footer className="foot">
        <ul className="foot__list">
          <li className="foot__el">
            <a
              href="http://antoni-dumont.be/"
              className="foot__link sect__txt"
              aria-label="Redirection vers mon site perso"
              target="_blank"
              rel="noreferrer"
            >
                Antoni
            </a>
          </li>
          <li className="foot__el">
            <a
              href="https://dwt.heaj.be/"
              className="foot__link sect__txt"
              aria-label="Redirection vers DWT"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="dwt"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 71.6 25"
              >
                <path
                  className="dwt__txt"
                  d="M0 20.41V0h5.63c1.98 0 3.71.36 5.18 1.06 1.47.71 2.61 1.81 3.43 3.3.81 1.49 1.22 3.41 1.22 5.74 0 2.34-.4 4.27-1.21 5.79-.8 1.52-1.92 2.66-3.35 3.4-1.43.74-3.09 1.11-4.99 1.11H0zm4.63-3.73h.75c1.06 0 2-.21 2.8-.63.8-.42 1.43-1.11 1.88-2.07.45-.96.67-2.25.67-3.88s-.22-2.91-.67-3.83c-.45-.92-1.07-1.58-1.87-1.97-.8-.39-1.74-.58-2.8-.58h-.76v12.96zM19.44 20.41 16.72 0h4.79l.63 10.86c.02.88.04 1.72.05 2.54.01.81.03 1.68.05 2.6h.13c.15-.92.31-1.79.49-2.61.18-.82.35-1.66.52-2.52l1.38-5.7h2.94l1.28 5.7c.17.83.34 1.66.52 2.49.18.82.34 1.71.49 2.64h.13c.02-.94.04-1.82.06-2.64l.06-2.49L30.77 0h4.48l-2.5 20.41H27.8l-1.19-6.32c-.13-.65-.24-1.3-.34-1.97-.1-.67-.18-1.3-.22-1.91h-.09c-.06.61-.14 1.24-.22 1.91-.08.67-.19 1.33-.31 1.97l-1.19 6.32h-4.8zM42.45 20.41V3.88h-6.1V0h16.84v3.88h-6.1v16.53h-4.64z"
                ></path>
                <path className="dwt__und" d="M57.69 20.41H71.6V25H57.69z"></path>
              </svg>
            </a>
          </li>
        </ul>
        <div className="foot__list">
            <p className="sect__txt">
Fait en {daten}©
            </p>
        </div>
        <ul className="foot__list">
          <li className="foot__el">
            <Link
              to="/credits"
              className="foot__link sect__txt"
              aria-label="Redirection vers mon site perso"
            >
              Crédits
            </Link>
          </li>
          <li className="foot__el">
            <Link
              to="/uikit"
              className="foot__link sect__txt"
              aria-label="Redirection vers mon site perso"
            >
              Ui-KIts
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
