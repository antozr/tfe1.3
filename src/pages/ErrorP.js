import React from "react";
import { Link, useRouteError } from "react-router-dom";
import InterSectionBox from "../components/InterSectionBox";

import backInterOld from "../assets/images/nordic/interNordicnoir.webp";
import Foot from "../components/Foot";

function ErrorP() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <section className="sect sect__attente" id="error-page">
        <h1 className="sect__title">Vous vous êtes perdus.</h1>
        <h2 className="sect__title sect__title--2">Retourner en lieu sûr.</h2>
        <p className="sect__txt">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/" className="error__link sect__txt  sect__txt--link">
          Go to home
        </Link>
      </section>
      <InterSectionBox
        backImg={{ backgroundImage: `url(${backInterOld})`, height: "30vh" }}
      />
      <Foot />
    </>
  );
}

export default ErrorP;
