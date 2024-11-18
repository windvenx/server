import React from 'react';
import styles from '../styles/Home/Blog.module.scss'

const Blog = () => {
    return (
        <section className={styles.blog}>
            <div className="container">
                <h2>Публикации в блоге</h2>
                <div className={styles.blog__cards}>
                    <div className={styles.blog__card}>
                        <div className="card__content">
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