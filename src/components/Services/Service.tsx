import React, { useState } from "react";
import { Service as ServiceProps } from "@/interfaces/interfaces";
import styles from "./Service.module.scss";

const Service = (props: ServiceProps) => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className={styles.service}>
      <div className={styles.image}>
        <img src={props.icon} alt="" />
      </div>

      <span className={styles.title}>{props.title}</span>

      <div onClick={() => setToggled((prev) => !prev)}>
        <img
          src={
            toggled
              ? "/icons/chromeye_assignment_minus_v1.svg"
              : "/icons/chromeye_assignment_plus_v1.svg"
          }
          alt=""
          className={`${styles.icon} ${toggled ? styles.toggled : ""}`}
        />
      </div>

      <span className={`${styles.description} ${toggled ? styles.toggled : ''}`}>
        {props.description}
      </span>
    </div>
  );
};

export default Service;
