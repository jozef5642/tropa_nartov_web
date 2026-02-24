import styles from "./Section_6.module.css"
import img_1 from "../../../public/section_6/img_1.svg"
import img_2 from "../../../public/section_6/img_2.svg"
import img_3 from "../../../public/section_6/img_3.svg"
import img_4 from "../../../public/section_6/img_4.svg"
import download_button_ios_img from "../../../public/section_1/download_button_ios_img.svg"
import download_button_android_img from "../../../public/section_1/download_button_android_img.svg"


export default function Section_6() {
    return (
        <section className={styles.section_container}>
            <div className={styles.background_pattern}>
                {/* Декоративные круговые линии */}
                <div className={styles.circle_lines}>
                    <svg className={styles.circle_svg} viewBox="0 0 800 800">
                        <circle cx="400" cy="400" r="150" fill="none" stroke="#E5E5E5" strokeWidth="1" />
                        <circle cx="400" cy="400" r="250" fill="none" stroke="#E5E5E5" strokeWidth="1" />
                        <circle cx="400" cy="400" r="350" fill="none" stroke="#E5E5E5" strokeWidth="1" />
                    </svg>
                </div>

                {/* Декоративные иконки */}
                <div className={styles.icon_document}>
                    <img src={img_1.src} alt="img_1" />
                </div>

                <div className={styles.icon_speech}>
                    <img src={img_2.src} alt="img_2" />
                </div>

                <div className={styles.icon_location}>
                    <img src={img_3.src} alt="img_3" />
                </div>

                <div className={styles.icon_thumbs}>
                    <img src={img_4.src} alt="img_4" />
                </div>
            </div>

            <div className={styles.content}>
                <span className={styles.free_label}>БЕСПЛАТНО</span>
                <h1 className={styles.main_title}>Начни своё путешествие по Кавказу</h1>
                <p className={styles.subtitle}>Скачай приложение и открой маршруты, места и культуру республик СКФО</p>

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