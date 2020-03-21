import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

import "../css/style.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
