'use client';
import power_supplies from '../../../public/power_.svg'
import styles from '../styles/Configuration/Configuration.module.scss'
import React, { useState } from 'react';
import Image from 'next/image';

const PowerAcc = () => {
    return (
        <>
            <div className={styles.configutator_block}>
                <Image src={proc} />
            </div>
        </>
    );
};

export default PowerAcc;