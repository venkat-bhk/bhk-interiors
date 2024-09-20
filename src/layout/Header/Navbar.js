import React, { useState } from "react";
import Link from "next/link";

import dynamic from "next/dynamic";
import useWindowSize from "../../components/Window";

const Navbar = ({ navDark, insurance, classOption }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const {width, height} = useWindowSize();
  console.log(width)
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className="w-100 z-50 position-absolute"
    >
      <nav className={`${width > height ? "pv-w3" : "pv-h5"} navbar-expand-xl navbar-light justify-content-center d-flex caret-hide`}>
        <div className="container d-flex align-items-center justify-content-center">
          <Link legacyBehavior href="/">
            <a>
              <img
                width={width > height ? width/10 : height/5}
                height={width > height ? width/30 : height/15}
                src="/bhk-home/Main_Logo.svg"
                alt="logo"
                className="img-fluid logo-white"
              />
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
