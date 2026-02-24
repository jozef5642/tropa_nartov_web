import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Пользовательское соглашение | Тропа Нартов",
  description: "Пользовательское соглашение сервиса Тропа Нартов",
};

export default function PolzovatelskoeSoglashenie() {
  return (
    <div className={styles.wrapper}>
      <article className={styles.document}>
        <h1 className={styles.title}>Пользовательское соглашение</h1>
        <p className={styles.updated}>Последнее обновление: 2025 г.</p>

        <section className={styles.section}>
          <h2>1. Принятие условий</h2>
          <p>
            Использование сервиса «Тропа Нартов» (приложение и веб-сайт) означает принятие настоящего Пользовательского соглашения. Если вы не согласны с условиями, пожалуйста, не используйте Сервис.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Описание сервиса</h2>
          <p>
            «Тропа Нартов» — мобильный гид по республикам Северного Кавказа, предоставляющий информацию о достопримечательностях, маршрутах, культуре и традициях региона.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Права и обязанности пользователя</h2>
          <p>
            Пользователь обязуется использовать Сервис в соответствии с законодательством РФ, не нарушать права третьих лиц и не размещать противоправный контент. Мы оставляем за собой право ограничить доступ при нарушении правил.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Интеллектуальная собственность</h2>
          <p>
            Все материалы Сервиса (тексты, дизайн, логотипы, карты) являются объектами интеллектуальной собственности. Копирование и распространение без согласия правообладателя запрещено.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Ограничение ответственности</h2>
          <p>
            Сервис предоставляется «как есть». Мы не несём ответственности за неточности в описаниях маршрутов и объектов, а также за действия пользователей вне приложения.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Контакты</h2>
          <p>
            Вопросы по соглашению:{" "}
            <a href="mailto:hello@tropanartov.ru" className={styles.link}>hello@tropanartov.ru</a>.
          </p>
        </section>
      </article>
    </div>
  );
}
