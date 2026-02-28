import styles from "./page.module.css";
import Section_1 from "@/components/section_1/Section_1";
import Section_2 from "@/components/section_2/Section_2";
import Section_3 from "@/components/section_3/Section_3";
import Section_4 from "@/components/section_4/Section_4";
import Section_5 from "@/components/section_5/Section_5";
import Section_6 from "@/components/section_6/Section_6";
import { SpeedInsights } from "@vercel/speed-insights/next"

/** Главная страница — контент в div_container */
export default function Home() {
  return (
    <>
      <SpeedInsights />
    <div className={styles.div_container_background}>
      <div className={styles.div_container}>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 />
        <Section_6 />
      </div>
    </div>
    </>
  );
}
