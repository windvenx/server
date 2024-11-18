import React from 'react';
import styles from '../styles/Home/Blog.module.scss'

const Blog = () => {
    return (
        <section className={styles.blog}>
            <div className="container">
                <h2>Публикации в блоге</h2>
                <div className={styles.blog__cards}>
                    <div className={styles.blog__card}>
                        <div className={styles.card__content}>
                            <p className={styles.blog__date}>11 ноября 2024</p>
                            <h3>Двухранговая память: как она ускоряет серверы и повышает производительность </h3>
                            <p>Узнайте, что такое двухранговая память и как она помогает увеличить производительность серверов. Простое объяснение преимуществ двухранговой памяти для вашей инфраструктуры. Специалисты ServerGate готовы помочь подобрать идеальное серверное оборудование для вашего бизнеса.</p>
                        </div>    
                    </div>
                    <div className={styles.blog__card}></div>
                    <div className={styles.blog__card}></div>
                </div>
            </div>
        </section>
    );
};

export default Blog;