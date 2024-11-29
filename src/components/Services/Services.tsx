"use client";
import React from "react";
import { useFetchData } from "@/services/useFetchData";
import styles from "./Services.module.scss";
import Service from "./Service";
import Button from "../Button/Button";

const Services = () => {
  const { services } = useFetchData();
  return (
    <section className={styles.container}>
      <div className={styles.introduction}>
        <span className={styles.title}>{`Our ${services?.title}`}</span>
        <span className={styles.description}>{`Our ${services?.description}`}</span>
      </div>
      <div className={styles.services}>{services?.items.map((service) => {
        return (
            <Service {...service} key={service.title}/>
        );
      })}</div>
      <Button href={services?.buttonUrl} label={services?.buttonLabel}/>
    </section>
  );
};

export default Services;
