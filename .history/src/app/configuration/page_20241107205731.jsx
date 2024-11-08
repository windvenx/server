import React from 'react';
import Header from '../../../components/Layout/Header'
import Footer from '../../../components/Layout/Footer';
import Products from '../../../components/Products/Page'
import styles from '../../app/styles/Products.module.scss'
import Image from 'next/image';
import hp from '../../../public/hp.svg'

const page = () => {
    return (
        <>
            <Header/>
            <div className='container'>
                <div className={styles.sidebar}>
                    <div className={styles.configutator_block}>
                        <p>Какую платформу предпочитаете :</p>
                        <div className={brand}>
                            <div className="brand__inp">
                                <Image src={hp} alt='hp' width={50} height={50}/>
                                <input type="checkbox" />
                            </div>
                            <div className="brand__inp">

                            </div>
                        </div>
                    </div>

                    <p className={styles.find__server}>Найдено серверов : 9</p>
                    <div className={styles.sidebar__products}>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default page;