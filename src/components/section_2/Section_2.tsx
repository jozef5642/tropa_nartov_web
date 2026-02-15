import styles from "./Section_2.module.css"
import map_img from "../../../public/section_2/map_img.svg"

export default function Section_2() {
    return (
        <section className={styles.section_container}>
            <div className={styles.text_sec_2}><h1 className={styles.text_sec_2_h1}>Открой новые места</h1>
                <h5 className={styles.text_sec_2_h5_1}>Все достопримечательности на карте</h5>
                <h5 className={styles.text_sec_2_h5_2}>От горных озёр до башен и музеев. Сохраняй<br />избранное и строй маршруты заранее.</h5>
            </div>
            <img className={styles.map_img} src={map_img.src} alt="map_img" />
        </section>



    );
}
