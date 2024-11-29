import React from 'react'
import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
 href?: string;
 label?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <Link className={styles.button} href={props.href || '/'}>{props.label || ''}</Link>
)
}

export default Button