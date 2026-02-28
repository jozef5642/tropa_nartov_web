import styles from "./Section_1.module.css"
import about_the_republic_img from "../../../public/section_1/about_the_republic_img.svg"
import screen_img from "../../../public/section_1/screen_img.svg"
import phone_img from "../../../public/section_1/phone_img.svg"
import download_button_ios_img from "../../../public/section_1/download_button_ios_img.svg"
import download_button_android_img from "../../../public/section_1/download_button_android_img.svg"

export default function Section_1() {
    return (
        <section className={styles.section_container}>
            {/* Декоративные круговые линии на фоне */}
            <div className={styles.circle_background}>
                <svg className={styles.circle_svg} viewBox="0 0 2400 2400">
                    <circle cx="1200" cy="1200" r="568" fill="none" stroke="#EDEDED" strokeWidth="1" />
                    <circle cx="1200" cy="1200" r="932" fill="none" stroke="#EDEDED" strokeWidth="1" />
                    <circle cx="1200" cy="1200" r="1249" fill="none" stroke="#EDEDED" strokeWidth="1" />
                </svg>
            </div>

            <div className={styles.section}>
                {/* О республике */}

               
                    <div className={styles.about_the_republic_sec}>
                        <img className={styles.about_the_republic_img} src={about_the_republic_img.src} alt="about_the_republic_img" />
                        <div className={styles.about_the_republic_sec_background} />
                    </div>
                

                {/* Телефон */}
                <div className={styles.phone_sec}>
                    <img src={phone_img.src} alt="phone_img" fetchPriority="high"/>
                </div>

                <div className={styles.screen}>
                    <img className={styles.screen_img} src={screen_img.src} alt="screen_img" />
                    <div className={styles.screen_background} />
                </div>

            </div>

            <div className={styles.text_sec_D}>
                <h1 className={styles.text_sec_D_h1}>Твой проводник по Кавказу</h1>
                <h5 className={styles.text_sec_D_h5}>Открой достопримечательности республик СКФО — места,<br /> маршруты, культура и традиции в одном приложении</h5>
                <div className={styles.download_buttons}>
                    <a href="https://www.apple.com/in/app-store/" className={styles.download_button_ios}>
                        <img src={download_button_ios_img.src}  alt="download_button_ios_img" />
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
