import styles from "./Header.module.css"
import logo from "../../../public/logo.svg"
import Link from "next/link"

export default function Header() {
  return (
    <header>
      <div className={styles.header_module}>
      <Link href="/" className={styles.logo}>
        <img className={styles.logo_image} src={logo.src} alt="logo" />
        <h1 className={styles.logo_text}>Тропа нартов</h1>
      </Link>
      <button className={styles.button_download}>Загрузить приложение</button>
      </div>
      
    </header>
  );
}