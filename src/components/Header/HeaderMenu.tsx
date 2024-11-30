import React from "react";
import styles from "./HeaderMenu.module.scss";
import Link from "next/link";
import Button from "../Button/Button";
import { useData } from "@/context/DataContext";

const HeaderMenu = () => {
  const dataContext = useData();

  const sortedMenus = dataContext?.data?.main_menu
    ?.filter((item) => item.url)
    .sort((a, b) => a.order - b.order);

  const menus = sortedMenus?.filter((item) => item.name !== "Get in touch");
  const contactButton = sortedMenus?.find(
    (item) => item.name === "Get in touch"
  );


  return (
    <nav className={styles.nav}>
      <ul className={styles.menuList}>
        {menus?.map((menu) => (
          <li key={menu.name} className={styles.menuItem}>
            <Link href={menu.url ?? "/"} className={styles.link}>
              {menu.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
      {contactButton && (
        // <div className={styles.buttonWrapper}>
        //   <a href={contactButton.url} className={styles.button}>
        //     {contactButton.name.toUpperCase()}
        //   </a>
        // </div>
        <Button
          href={contactButton.url ?? ""}
          label={contactButton.name.toUpperCase()}
          type="dark-gray"
        />
      )}
    </nav>
  );
};

export default HeaderMenu;
