import React from "react";
import Head from "next/head";
import Image from "next/image";

const Layout = ({ children, title, desc, hasClass, classOpt }) => {
  
  return (
    <div
      className={`main-wrapper ${
        hasClass ? "overflow-hidden" : ""
      } ${classOpt}`}
    >
      <Head>
        <title>
          {title
            ? `bhk | ${title}`
            : "bhk Interiors"}
        </title>
        {desc && <meta name="description" content={desc} />}
        {/* */}
      </Head>

      {children}
    </div>
  );
};

export default Layout;
