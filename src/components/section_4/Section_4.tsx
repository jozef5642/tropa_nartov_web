import styles from "./Section_4.module.css"


export default function Section_4() {
    return (
        <section className={styles.section_container}>
            <h1 className={styles.text_sec_4_h1}>Открой культуру Кавказа</h1>
            <p className={styles.text_sec_4_p}>Традиции, кухня и праздники республик СКФО</p>

            <div className={styles.cards_container}>
                <div className={styles.card_item}>
                    <h3 className={styles.card_h3}>Обычаи, ремёсла<br/> и народное творчество,<br/>которые сохранили<br/>самобытность Кавказа.</h3>
                </div>

                <div className={styles.card_item}>
                    <h3 className={styles.card_h3}>Хычины, чурек, шашлык и<br/>другие блюда, которые<br/>стоит попробовать.</h3>
                </div>

                <div className={styles.card_item}>
                    <h3 className={styles.card_h3}>От национальных<br/>торжеств до фестивалей,<br/>которые делают Кавказ<br/>уникальным.</h3>  
                </div>

                <div className={styles.card_item}>
                    <h3 className={styles.card_h3}>Многообразие культур и<br/>богатое наследие<br/>народов Северного<br/>Кавказа.</h3>  
                </div>
                

            </div>
        </section>



    );
}