import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Тропа Нартов",
  description: "Политика конфиденциальности сервиса Тропа Нартов",
};

export default function PolitikaKonfidencialnosti() {
  return (
    <div className={styles.wrapper}>
      <article className={styles.document}>
        <h1 className={styles.title}>Политика конфиденциальности</h1>
        <p className={styles.updated}>Последнее обновление: 2025 г.</p>

        <section className={styles.section}>
          <h2>1. Общие положения</h2>
          <p>
            Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сервиса «Тропа Нартов» (далее — Сервис).
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Собираемые данные</h2>
          <p>
            Мы можем собирать данные, необходимые для работы приложения: электронная почта при обратной связи, технические данные устройства для корректной работы сервиса.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Использование данных</h2>
          <p>
            Собранные данные используются исключительно для обеспечения работы Сервиса, улучшения качества и коммуникации с пользователями в рамках оказания услуг.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Защита данных</h2>
          <p>
            Мы применяем организационные и технические меры для защиты персональных данных от неправомерного доступа, изменения, раскрытия или уничтожения.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Контакты</h2>
          <p>
            По вопросам, связанным с обработкой персональных данных, вы можете обратиться по адресу:{" "}
            <a href="mailto:hello@tropanartov.ru" className={styles.link}>hello@tropanartov.ru</a>.
          </p>
        </section>
      </article>
    </div>
  );
}
