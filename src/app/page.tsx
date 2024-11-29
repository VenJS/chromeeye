import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
    </div>
  );
}
