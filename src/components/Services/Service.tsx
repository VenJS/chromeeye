import React, { useState } from "react";
import { Service as ServiceProps } from "@/interfaces/interfaces";
import styles from "./Service.module.scss";
import { Typography } from "../Typography/Typography";

const Service = (props: ServiceProps) => {
  const [toggled, setToggled] = useState(false);
return (
    <div className={styles.service}>
        <div className={styles.image}>
            <img src={props.icon} alt="" />
        </div>

        <Typography variant="small-title">{props.title}</Typography>

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

        <Typography
            variant="small-description"
            className={`${styles.description} ${toggled ? styles.toggled : ''}`}
        >
            {props.description}
        </Typography>
    </div>
);
};

export default Service;
