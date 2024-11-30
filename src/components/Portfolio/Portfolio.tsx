import React from "react";
import styles from "./Portfolio.module.scss";
import { Typography } from "../Typography/Typography";
import { useFetchData } from "@/services/useFetchData";
import Button from "../Button/Button";

const Portfolio = () => {
  const { portfolio } = useFetchData();

  return (
    portfolio && (
      <section className={styles.container}>
        <div className={styles.introduction}>
          <Typography variant="medium-title">Our work</Typography>
          <Typography variant="description">{`Our ${portfolio?.description}`}</Typography>
        </div>
        <div className={styles.products}>
          {portfolio?.items.map((item) => {
            return (
              <div key={item.title} className={styles.productSection}>
                <div className={styles.description}>
                  <Typography variant="medium-title">{item.title}</Typography>
                  <Typography variant="description">
                    {item.description}
                  </Typography>
                  <Button href={item.buttonUrl} label={item.buttonLabel} />
                </div>
                <img className={styles.image} src={item.image} alt="" />
              </div>
            );
          })}
        </div>
      </section>
    )
  );
};

export default Portfolio;
