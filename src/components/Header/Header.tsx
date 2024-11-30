"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useFetchData } from "@/services/useFetchData";
import { useIsMobile } from "@/hooks/useIsMobile";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const [toggled, setToggled] = useState(false);
  const { headerMenus } = useFetchData();
  const isMobile = useIsMobile();

  return headerMenus && ( 
    <header className={styles.container}>
      <div className={styles.headerWrapper}>
        <img src="/chromeye_logo_v1.svg" alt="" />
        {isMobile ? (
          <div onClick={() => setToggled((prev) => !prev)}>
            <img
              src={
                !toggled
                  ? `./icons/hamburger-menu.png`
                  : `./icons/hamburger-menu-toggled.png`
              }
              alt=""
            />
          </div>
        ) : (
          <div className={styles.links}>
            {headerMenus?.map((menu) => {
              return (
                menu.url && (
                  <Link key={menu.name} href={menu.url}>
                    {menu.name}
                  </Link>
                )
              );
            })}
          </div>
        )}
      </div>
      {isMobile && toggled && (< HeaderMenu />)}
    </header>
  );
};

export default Header;
