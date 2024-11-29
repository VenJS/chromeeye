import React, { useState } from "react";
import styles from "./AgencyServices.module.scss";
import { Typography } from "../Typography/Typography";
import { useFetchData } from "@/services/useFetchData";

const AgencyServices = () => {
  const { agencyServices } = useFetchData();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.agencyServices}>
      <Typography variant="medium-title">{agencyServices?.title}</Typography>
      <div className={styles.content}>
        {agencyServices?.items?.map((service, index) => {
          return (
            <div key={index} className={styles.accordionItem}>
              <div className={styles.accordionItemContainer}>
                <>
                  <div
                    className={`${styles.accordionHeader} ${
                      openIndex === index ? styles.active : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <Typography variant="description-bold">
                      {service.title}
                    </Typography>
                    <div
                      className={`${styles.icon} ${
                        openIndex === index ? styles.rotate : ""
                      }`}
                    >
                      <img
                        src={`/icons/chromeye_assignment_arrow${
                          openIndex === index ? "up" : "down"
                        }_v1.svg`}
                      />
                    </div>
                  </div>
                  {openIndex === index && (
                    <>
                      <div className={styles.accordionContent}>
                        <Typography variant="description">
                          {service.description}
                        </Typography>
                      </div>
                      <div className={styles.image}>
                        <img
                          src={service.image}
                          className={styles.serviceImage}
                          alt=""
                        />
                      </div>
                    </>
                  )}
                </>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgencyServices;
