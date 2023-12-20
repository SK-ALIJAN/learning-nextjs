import Footer from "@/components/Footer/Main";
import styles from "./page.module.css";
import Navbar from "@/components/Header/Navbar";
import Main from "@/components/section1/Main";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Main />
      <Footer/>
    </main>
  );
}
