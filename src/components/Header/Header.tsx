"use client";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useFetchData } from "@/services/useFetchData";

const Header = () => {
  const { headerMenus } = useFetchData();

  return (
    <header className={styles.container}>
      <div className={styles.headerWrapper}>
        <img src="/chromeye_logo_v1.svg" alt="" />
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
      </div>
    </header>
  );
};

export default Header;
