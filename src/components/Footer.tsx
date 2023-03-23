import React from "react";
import { NavLink } from "react-router-dom";
import appStoreIcon from "../assets/appStoreIcon.png";
import googlePlayIcon from "../assets/googlePlayIcon.png";
import facebookIcon from "../assets/facebookIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";
import twitterIcon from "../assets/twitterIcon.svg";

type Prop = {
  className?: string;
};
const Footer = ({ className = "" }: Prop) => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/terms-and-conditions", label: "Terms and Conditions" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/collection-statement", label: "Collection Statement" },
    { href: "/help", label: "Help" },
    { href: "/manage-account", label: "Manage Account" },
  ];

  const socialMediaLinks = [
    { href: "https://facebook.com", image: facebookIcon },
    { href: "https://instagram.com", image: instagramIcon },
    { href: "https://twitter.com", image: twitterIcon },
  ];
  const appMarkets = [
    { href: "https://play.google.com/", image: googlePlayIcon },
    { href: "https://appstore.com", image: appStoreIcon },
  ];

  return (
    <div
      className={`${className} flex h-[550px] w-full items-center justify-center bg-black px-10 text-gray-400 md:h-[300px] `}
    >
      <div className="w-full max-w-[900px] ">
        <ul className="mb-4 w-full justify-start md:flex">
          {links.map((link, i) => (
            <li className="md:border-r-1 flex items-center px-1 md:border-gray-400 md:last:border-0">
              <NavLink to={link.href} className="hover:text-white">
                {link.label}
              </NavLink>
              {i !== links.length - 1 && (
                <div className="md:ml-2 md:h-4 md:border-r-2 md:border-gray-400" />
              )}
            </li>
          ))}
        </ul>
        <p className="mb-10">
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </p>
        <div className="md:flex md:items-center md:justify-between">
          <ul className="mb-10 flex w-full gap-4">
            {socialMediaLinks.map((link) => (
              <li className=" h-[40px] w-[40x] cursor-pointer bg-contain bg-center">
                <a href={link.href}>
                  <img className="h-full w-full" src={link.image} />
                </a>
              </li>
            ))}
          </ul>
          <ul className="sm:flex sm:items-center sm:gap-4 ">
            {appMarkets.map((market) => (
              <li className="mb-4 sm:mb-0">
                <a
                  href={market.href}
                  style={{ backgroundImage: `url(${market.image}` }}
                  className="block h-[60px] w-[200px] cursor-pointer border-2 border-white bg-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
