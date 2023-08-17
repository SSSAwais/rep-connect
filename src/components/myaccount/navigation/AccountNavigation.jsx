"use client";
import React, { useState } from "react";
import "./accountnavigation.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const AccountNavigation = () => {
  const [nav, setNav] = useState([
    {
      name: "dashboard",
      icon: <i className="fa-solid fa-right-from-bracket"></i>,
      link: "/",
    },
    {
      name: "orders",
      icon: <i className="fa-solid fa-clock-rotate-left"></i>,
      link: "orders",
    },
    {
      name: "donwloads",
      icon: <i className="fa-solid fa-download"></i>,
      link: "downloads",
    },
    {
      name: "Addresses",
      icon: <i className="fa-solid fa-location-dot"></i>,
      link: "edit-address",
    },
    {
      name: "Account Detail",
      icon: <i className="fa-solid fa-gear"></i>,
      link: "edit-account",
    },
  ]);
  const path = usePathname();
  const cls = path.split("/")[2];
  return (
    <div className="col-md-4">
      <aside className="my-account-navigation">
        <ul>
          {nav.map((e, i) => {
            return (
              <li
                key={i}
                className={
                  cls === undefined && i === 0
                    ? "active-tab"
                    : cls === e.link
                    ? "active-tab"
                    : null
                }
              >
                <Link href={`/my-account/${e.link}`}>
                  <span>{e.icon}</span>
                  <span>{e.name}</span>
                </Link>
              </li>
            );
          })}
          <li className="logout-tab">
            <span className="logout">
              <span>
                <i className="fa-solid fa-right-from-bracket"></i>
              </span>
              <span>logout</span>
            </span>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default AccountNavigation;
