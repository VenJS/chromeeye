import React from "react";
import styles from "./Footer.module.scss";
import { Typography } from "../Typography/Typography";
import { useFetchData } from "@/services/useFetchData";
import Button from "../Button/Button";
import Link from "next/link";

const Footer = () => {
  const { footer, companyData } = useFetchData();

  const sortedMenu = footer?.sort((a, b) => a.order - b.order);

  const leftColumn = sortedMenu?.slice(0, 4);
  const centeredColumn = sortedMenu?.slice(4);
  return footer && (
    <footer className={styles.container}>
      <div className={styles.heading}>
        <img src={companyData?.logo} alt="" />
        <Button type="dark-gray" label="REQUEST A CALL"></Button>
      </div>

      <div className={styles.menus}>
        <div className={styles.column}>
          {leftColumn?.map((item) => (
            <Link key={item.name} href={item.url ?? "/"}>
              <Typography
                variant="small-title-semi-bold"
                className={styles.menu}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
          <Typography variant="small-description">
            {companyData?.intro}
          </Typography>
        </div>

        <div className={styles.column}>
          {centeredColumn?.map((item) => (
            <Link key={item.name} href={item.url ?? "/"}>
              <Typography variant="small-title-semi-bold">
                {item.name}
              </Typography>
            </Link>
          ))}
        </div>

        <div className={styles.column}>
          <Typography variant="small-title-semi-bold">Follow us:</Typography>
          <div className={styles.socials}>
            {companyData?.social_media.facebook && (
              <Link
                href={companyData?.social_media.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./icons/chromeye_assignment_facebookicon_v1.svg"
                  alt="Facebook"
                />
              </Link>
            )}
            {companyData?.social_media.twitter && (
              <Link
                href={companyData?.social_media.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./icons/chromeye_assignment_twittericon_v1.svg"
                  alt="Twitter"
                />
              </Link>
            )}
            {companyData?.social_media.linkedin && (
              <Link
                href={companyData?.social_media.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./icons/chromeye_assignment_linkedinicon_v1.svg"
                  alt="LinkedIn"
                />
              </Link>
            )}
          </div>
          <div className={styles.contactInfo}>
            <div>
              <Typography variant="small-title-semi-bold">Contact</Typography>
            </div>

            <div className={styles.addressWrapper}>
              <Typography variant="small-description">
                {companyData?.address}
              </Typography>
              <Typography variant="small-description">
                Phone: {companyData?.phone}
              </Typography>
              <Typography variant="small-description">
                Email:{" "}
                <Link href={`mailto:${companyData?.email}`}>
                  {companyData?.email}
                </Link>
              </Typography>
            </div>
          </div>
        </div>

        {/* {footer
          ?.sort((a, b) => a.order - b.order)
          .map((menu) => {
            return (
              <Link key={menu.name} href={menu.url ?? '/'}>
                <Typography
                  variant="small-title-semi-bold"
                  className={styles.menu}
                >
                  {menu.name}
                </Typography>
              </Link>
            );
          })} */}
      </div>
    </footer>
  );
};

export default Footer;
