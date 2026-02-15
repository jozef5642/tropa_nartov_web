import styles from "./Section_3.module.css"
import img_1 from "../../../public/section_3/img_1.svg"
import img_2 from "../../../public/section_3/img_2.svg"
import img_3 from "../../../public/section_3/img_3.svg"

export default function Section_3() {
    return (
        <section className={styles.section_container}>
            <h1 className={styles.text_sec_3_h1}>Выбирай и проходи маршруты</h1>
            <p className={styles.text_sec_3_p}>Авто, пешие и комбинированные — всё в одном приложении</p>

            <div className={styles.cards_container}>
                <div className={styles.card_item}>
                    <img className={styles.card_img} src={img_1.src} alt="img_1" />
                    <h3 className={styles.card_h3}>Пешие маршруты</h3>
                    <p className={styles.card_p}>Прогулки по горам и тропам с подробными<br /> точками и описанием.</p>
                </div>
                <div className={styles.card_item}>
                    <img className={styles.card_img} src={img_2.src} alt="img_2" />
                    <h3 className={styles.card_h3}>Авто маршруты</h3>
                    <p className={styles.card_p}>Прогулки по горам и тропам с подробными<br /> точками и описанием.</p>
                </div>
                <div className={styles.card_item}>
                    <img className={styles.card_img} src={img_3.src} alt="img_3" />
                    <h3 className={styles.card_h3}>Комбинированные маршруты</h3>
                    <p className={styles.card_p}>Прогулки по горам и тропам с подробными<br /> точками и описанием.</p>
                </div>
            </div>
        </section>



    );
}