import React from "react";
import styles from "./GetStarted.module.scss";
import { Typography } from "../Typography/Typography";
import Button from "../Button/Button";

const GetStarted = () => {
  return (
    <section className={styles.container}>
      <div className={styles.background}>
        <img
          src="/chromeye_assignment_desktopbgbanner_v1.jpg"
          alt=""
          className={styles.backgroundImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <Typography variant="title" className={styles.title}>
            Ready to Get Started
          </Typography>
          <Typography variant="description" className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            sed scelerisque arcu scelerisque ultricies habitant ac semper lorem.
          </Typography>
          <Button href="#" label="REQUEST A CALL" type="dark-gray" />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
