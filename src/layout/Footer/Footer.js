import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaDribbble, FaInstagram, FaFacebookF } from "react-icons/fa";
import useWindowSize from "@components/Window";

const FooterTwo = () => {

  const { width, height } = useWindowSize();

  return (
    <footer className="gray-d">
      <div className="container">
        <div className={`${width > height ? "ft-p-w" : "ft-p-h"} caret-hide`}>
          <div className="row">
            <div className="col-12 col-sm-8">
              <div className="">
                <div className="mb-4">
                  <img
                    src="/bhk-home/Footer_Logo.svg"
                    alt="logo"
                    width={width > height ? width / 10 : height / 5}
                    height={width > height ? width / 30 : height / 15}
                    className="img-fluid logo-white"
                  />
                </div>
                <p className={`fl fc-w ${width > height ? "fs-w-20" : "fs-h-20"}`}>
                  Crafting exquisite living spaces, <br />one home at a time.
                </p>
                <h3 className={`fl fc-w mt-4 ${width > height ? "fs-w-24" : "fs-h-24"}`}>Hyderabad <span className="fc-o">|</span> Bengaluru</h3>
              </div>
            </div>
            <div className="col-12 col-sm-4 pb-2">
              <ul className="footer-ul">
                <div>
                  <li className={`fl fc-w footer-li ${width > height ? "fs-w-20" : "fs-h-20"}`}>3rd Floor, Rohini Layout Rd</li>
                  <li className={`fl fc-w footer-li ${width > height ? "fs-w-20" : "fs-h-20"}`}>Opp. Shilparamam</li>
                  <li className={`fl fc-w footer-li ${width > height ? "fs-w-20" : "fs-h-20"}`}>HITEC City, Hyderabad</li>
                  <li className={`fl fc-w footer-li ${width > height ? "fs-w-20" : "fs-h-20"}`}>Telangana - 500081</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <hr className="hr" />
        <div className={`fl fc-w ${width > height ? "fs-w-20 p-w2" : "fs-h-20 p-h2"}`}>
          <p className="text-center">
            Copyright © BHK Interiors |
            <a
              href=""
              className="footer-a fc-w"
            >
              &nbsp;Privacy&nbsp;Policy&nbsp;
            </a>
            |
            <a
              href=""
              className="footer-a fc-w"
            >
              &nbsp;Terms&nbsp;&&nbsp;Conditions&nbsp;
            </a>
            |
            <a
              href=""
              className="footer-a fc-w"
            >
              &nbsp;Contact&nbsp;Us
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
