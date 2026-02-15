import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                {/* Левая колонка - Информация о компании */}
                <div className={styles.footer_column}>
                    <div className={styles.logo_container}>
                        <div className={styles.logo_icon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h2 className={styles.company_name}>Тропа Нартов</h2>
                    </div>
                    <p className={styles.company_description}>
                        Мобильный гид по республикам Северного Кавказа — достопримечательности, маршруты, культура и традиции в одном приложении.
                    </p>
                    <a href="mailto:hello@tropanartov.ru" className={styles.contact_email}>hello@tropanartov.ru</a>
                </div>

                {/* Средняя колонка - Навигация */}
                <div className={styles.footer_column}>
                    <h3 className={styles.column_title}>Навигация</h3>
                    <nav className={styles.nav_links}>
                        <a href="#" className={styles.nav_link}>Главная</a>
                        <a href="#" className={styles.nav_link}>О проекте</a>
                        <a href="#" className={styles.nav_link}>Скачать приложение</a>
                        <a href="#" className={styles.nav_link}>Контакты</a>
                    </nav>
                </div>

                {/* Правая колонка - Документы */}
                <div className={styles.footer_column}>
                    <h3 className={styles.column_title}>Документы</h3>
                    <nav className={styles.nav_links}>
                        <a href="#" className={styles.nav_link}>Политика конфиденциальности</a>
                        <a href="#" className={styles.nav_link}>Пользовательское соглашение</a>
                    </nav>
                </div>
            </div>

            {/* Нижняя часть */}
            <div className={styles.footer_bottom}>
                <div className={styles.divider}></div>
                <div className={styles.bottom_content}>
                    <p className={styles.copyright}>© 2025 Тропа Нартов. Все права защищены.</p>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.social_icon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61993 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7615 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73513 15.8741 10.5211 16 11.37Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}