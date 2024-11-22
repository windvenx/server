import React from 'react';
import styles from '../styles/guarantee/guarantee__items.module.scss'

const Page = () => {
    return (
        <section className={styles.guarantee__title}>
          <div className="container">
            <h1>ГАРАНТИЯ</h1>
            <p>На всё оборудование предоставляется гарантия от компании Сервер Гейт, несмотря на то, что многие вендоры уже не оказывают постгарантийное обслуживание даже новых серверов.</p>

          </div>  
        </section>
    );
};

export default Page;