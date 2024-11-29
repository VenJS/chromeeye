"use client";
import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Portfolio from "@/components/Portfolio/Portfolio";
import AgencyServices from "@/components/AgencyServices/AgencyServices";

export default function Home() {
  return (
    <div className={styles.page}>
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <AgencyServices />
    </div>
  );
}
