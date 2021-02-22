import classes from "./index.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  // const [currentSearch, setCurrentSearch] = useState(true);

  // const currentLinkStyle = {
  //   color: "#f0883e",
  //   textDecoration: "underline",
  //   textDecorationColor: "#f0883e",
  //   textUnderlineOffset: "2px",
  // };

  return (
    <div className={classes.Navigation}>
      <Link
        className={classes.Links}
        to="/"
        // style={currentSearch ? currentLinkStyle : {}}
        // onClick={() => setCurrentSearch(true)}
      >
        Search
      </Link>
      <div className={classes.Spacer}></div>
      <Link
        className={classes.Links}
        to="/Trending"
        // style={!currentSearch ? currentLinkStyle : {}}
        // onClick={() => setCurrentSearch(false)}
      >
        Trending
      </Link>
    </div>
  );
};

export default Navigation;
