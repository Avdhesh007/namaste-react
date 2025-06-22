import React from "react";
import { useRouteError, Link } from "react-router";

function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS!</h1>
      <h1>Something went wrong</h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
}

export default Error;
