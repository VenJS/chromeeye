"use client";

// import Loader from "@/components/Loader/Loader";
import dynamic from "next/dynamic";
import styles from "./page.module.scss";
import React, { Suspense } from "react";

const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/Hero/Hero"), {
  ssr: false,
});
const Services = dynamic(() => import("@/components/Services/Services"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.page}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Hero />
        <Services />
      </Suspense>
    </div>
  );
}
