"use client";
import React from "react";
import styles from "./Hero.module.scss";
import { useFetchData } from "@/services/useFetchData";
import Button from "@/components/Button/Button";
import { Typography } from "../Typography/Typography";

const Hero = () => {
  const { hero } = useFetchData();
  return (
    <section className={styles.container}>
      <div className={styles.background} />
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <div className={styles.info}>
            <Typography variant="title">{hero?.title}</Typography>
            <Typography variant='description'>{hero?.description}</Typography>
            <Button href={hero?.buttonUrl ?? "/"} label={hero?.buttonLabel} />
          </div>
          <div className={styles.image}>
            <img src={hero?.image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
