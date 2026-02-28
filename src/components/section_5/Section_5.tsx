"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import styles from "./Section_5.module.css"
import advertisement_img_1 from "../../../public/section_5/advertisement_img_1.svg"
import advertisement_img_2 from "../../../public/section_5/advertisement_img_2.svg"
import advertisement_img_3 from "../../../public/section_5/advertisement_img_3.svg"
import advertisement_img_4 from "../../../public/section_5/advertisement_img_4.svg"


export default function Section_4() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        privacy: true
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage(null);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ type: 'success', text: data.message });
                setFormData({ name: "", company: "", phone: "", privacy: true });
            } else {
                setMessage({ type: 'error', text: data.error || 'Произошла ошибка при отправке формы' });
            }
        } catch {
            setMessage({ type: 'error', text: 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    return (
        <section id="section-5" className={styles.section_container}>
            <div className={styles.text_sec_5_container}>
                <div className={styles.text_sec_5_container_content}>
                    <h1 className={styles.text_sec_5_h1}>Станьте партнером Тропы Нартов</h1>
                    <p className={styles.text_sec_5_p}>Размещайте объекты и услуги на сервисе<br />для планирования путешествий</p>
                    <div className={styles.text_sec_5_span_container}>
                        <span className={styles.text_sec_5_span}>hello@tropanartov.ru</span>
                        <span className={styles.text_sec_5_span}>9 (999) 999-99-99</span>
                    </div>
                </div>
            </div>
            <h2 className={styles.text_sec_5_h2}>Сотрудничаем со всеми регионами России</h2>

            <div className={styles.advertisement_container_content}>
                <div className={styles.advertisement_container}>
                    <div className={styles.advertisement_container_item_1}>
                        <div className={styles.advertisement_card}>
                            <div className={styles.advertisement_icon_wrapper}>
                                <img src={advertisement_img_1.src} alt="advertisement_img_1" className={styles.advertisement_icon} />
                            </div>
                            <p className={styles.advertisement_card_text}>Обычаи, ремёсла и<br />народное творчество,<br />которые сохранили<br />самобытность Кавказа.</p>
                        </div>

                        <div className={styles.advertisement_card}>
                            <div className={styles.advertisement_icon_wrapper}>
                                <img src={advertisement_img_2.src} alt="advertisement_img_2" className={styles.advertisement_icon} />
                            </div>
                            <p className={styles.advertisement_card_text}>От национальных<br />торжеств до фестивалей,<br />которые делают Кавказ<br />уникальным.</p>
                        </div>
                    </div>

                    <div className={styles.advertisement_container_item_2}>
                        <div className={styles.advertisement_card}>
                            <div className={styles.advertisement_icon_wrapper}>
                                <img src={advertisement_img_3.src} alt="advertisement_img_3" className={styles.advertisement_icon} />
                            </div>
                            <p className={styles.advertisement_card_text}>Хычины, чурек, шашлык и<br />другие блюда, которые<br />стоит попробовать.</p>
                        </div>

                        <div className={styles.advertisement_card}>
                            <div className={styles.advertisement_icon_wrapper}>
                                <img src={advertisement_img_4.src} alt="advertisement_img_4" className={styles.advertisement_icon} />
                            </div>
                            <p className={styles.advertisement_card_text}>Многообразие культур и<br />богатое наследие народов<br />Северного Кавказа.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.feedback_form_container}>
                    <h2 className={styles.form_title}>Заполните форму и мы свяжемся с вами</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Имя" 
                            className={styles.form_input}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input 
                            type="text" 
                            name="company"
                            placeholder="Компания" 
                            className={styles.form_input}
                            value={formData.company}
                            onChange={handleChange}
                        />
                        <input 
                            type="tel" 
                            name="phone"
                            placeholder="Телефон" 
                            className={styles.form_input}
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <div className={styles.checkbox_container}>
                            <input 
                                type="checkbox" 
                                id="privacy" 
                                name="privacy"
                                className={styles.form_checkbox}
                                checked={formData.privacy}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="privacy" className={styles.checkbox_label}>
                                Я ознакомлен с{" "}
                                <Link href="/politika-konfidencialnosti" className={styles.privacy_link}>
                                    политикой конфиденциальности
                                </Link>{" "}
                                и соглашаюсь на{" "}
                                <Link href="/politika-konfidencialnosti" className={styles.privacy_link}>
                                    обработку персональных данных
                                </Link>
                            </label>
                        </div>
                        {message && (
                            <div className={message.type === 'success' ? styles.form_message_success : styles.form_message_error}>
                                {message.text}
                            </div>
                        )}
                        <button 
                            type="submit" 
                            className={styles.form_button}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Отправка...' : 'Отправить'}
                        </button>
                    </form>
                </div>
            </div>
        </section>



    );
}