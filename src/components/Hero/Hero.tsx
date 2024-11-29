"use client";
import React from "react";
import styles from "./Hero.module.scss";
import { useFetchData } from "@/services/useFetchData";
import Button from "@/components/Button/Button";

const Hero = () => {
  const { hero } = useFetchData();
  return (
    <section className={styles.container}>
      <div className={styles.background} />
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <div className={styles.info}>
            <h1 className={styles.title}>{hero?.title}</h1>
            <span className={styles.description}>{hero?.description}</span>
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
