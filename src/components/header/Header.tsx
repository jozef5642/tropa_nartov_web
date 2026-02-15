import styles from "./Header.module.css"
import logo from "../../../public/logo.svg"

export default function Header() {
  return (
    <header>
      <div className={styles.header_module}>
      <div className={styles.logo}>
        <img className={styles.logo_image} src={logo.src} alt="logo" />
        <h1 className={styles.logo_text}>Тропа нартов</h1>
      </div>
      <button className={styles.button_download}>Загрузить приложение</button>
      </div>
      
    </header>
  );
}