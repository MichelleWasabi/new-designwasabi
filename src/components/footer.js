import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

function Footer() {
  const { site } = useStaticQuery(graphql`
    query siteTitleQueryAndSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <footer className="bg-dkblue opacity-90 py-6 md:py-12">
      <Link className="flex justify-center no-underline text-white" to="/">
        <img src={require("../assets/cone.png")} className="h-8" alt="" />
        <span className="font-bold text-xl tracking-tight hidden md:block">
          {site.siteMetadata.title}
        </span>
      </Link>

      <nav className="flex px-8 py-6 xl:px-72 justify-center">
        {[
          {
            route: `/about`,
            title: `about`
          },
          {
            route: `/blog`,
            title: `blog`
          },
          {
            route: `/contact`,
            title: `contact`
          },
          {
            route: `/design`,
            title: `design `
          },
          {
            route: `/wellness`,
            title: `wellness`
          },

          {
            route: `/spaces`,
            title: `spaces`
          }
        ].map(link => (
          <Link
            className=" justify-between max-w-md mx-auto text-white hover:text-flower"
            key={link.title}
            to={link.route}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <div className="text-white text-center text-sm font-bold ">
        &copy; designWasabi 2020
      </div>
    </footer>
  );
}

export default Footer;
