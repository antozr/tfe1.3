import React from 'react'
import { Link, useRouteError } from "react-router-dom";

function ErrorP() {
    const error = useRouteError();
    console.error(error);

  return (
    <div id="error-page">

        <h1>
            Opps !
        </h1>
        <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/' className='error__link'>

        Go to home
      </Link>
    </div>
  )
}

export default ErrorP