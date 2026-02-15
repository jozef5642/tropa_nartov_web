import styles from "./Section_1.module.css"
import about_the_republic_img from "../../../public/section_1/about_the_republic_img.svg"
import screen_img from "../../../public/section_1/screen_img.svg"
import phone_img from "../../../public/section_1/phone_img.svg"
import download_button_ios_img from "../../../public/section_1/download_button_ios_img.svg"
import download_button_android_img from "../../../public/section_1/download_button_android_img.svg"

export default function Section_1() {
    return (
        <section className={styles.section_container}>
            <div className={styles.section}>
                {/* О республике */}
                <div className={styles.about_the_republic_sec}>
                <img className={styles.about_the_republic_img} src={about_the_republic_img.src} alt="about_the_republic_img" />
                </div>

                {/* Телефон */}
                <div className={styles.phone_sec}>
                    <img src={phone_img.src} alt="phone_img" />
                </div>

                <div className={styles.screen}>
                    <img src={screen_img.src} alt="screen_img" />
                </div>

            </div>

            <div className={styles.text_sec_D}>
                <h1 className={styles.text_sec_D_h1}>Твой проводник по Кавказу</h1>
                <h5 className={styles.text_sec_D_h5}>Открой достопримечательности республик СКФО — места,<br /> маршруты, культура и традиции в одном приложении</h5>
                <div className={styles.download_buttons}>
                    <a href="https://www.apple.com/in/app-store/" className={styles.download_button_ios}>
                        <img src={download_button_ios_img.src} alt="download_button_ios_img" />
                        <div className={styles.download_button_text}>
                            <span className={styles.download_button_label}>Загрузите в</span>
                            <span className={styles.download_button_store}>App Store</span>
                        </div>
                    </a>
                    <a href="https://play.google.com/store/games?hl=en" className={styles.download_button_android}>
                        <img src={download_button_android_img.src} alt="download_button_android_img" />
                        <div className={styles.download_button_text}>
                            <span className={styles.download_button_label}>Доступно в</span>
                            <span className={styles.download_button_store}>Google Play</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>



    );
}
