import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import "../css/style.css";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-black opacity-90 sticky top-0">
      <div className=" flex flex-wrap items-center justify-between md:px-20 md:py-4 ">
        <Link className="flex items-center no-underline text-white" to="/">
          <img
            src={require("../assets/icons/mwlogo.png")}
            className="h-5 mr-3"
            alt=""
          />
          <span className="text-md md:text-xl tracking-normal logo-header">
            {site.siteMetadata.title}
          </span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto text-right `}
        >
          {[
            {
              route: `/about`,
              title: `about`,
            },
            {
              route: `/blog`,
              title: `blog`,
            },
            {
              route: `/contact`,
              title: `contact`,
            },
          ].map((link) => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white hover:text-flower"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
