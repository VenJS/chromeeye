import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";
import { ButtonProps } from "../../interfaces/interfaces";

const Button = (props: ButtonProps) => {
  return (
    <Link className={styles.button} href={props.href || "/"}>
      {props.label || ""}
    </Link>
  );
};

export default Button;
