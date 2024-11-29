import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";
import { ButtonProps } from "../../interfaces/interfaces";

const Button = (props: ButtonProps) => {
  const buttonClass = `${styles.button} ${props.type === "dark-gray" ? styles.darkGrayButton : ""}`;
  return (
    <Link className={buttonClass} href={props.href || "/"}>
      {props.label || ""}
    </Link>
  );
};

export default Button;
