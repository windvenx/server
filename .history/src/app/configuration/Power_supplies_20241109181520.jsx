'use client';
import power_supplies from '../../../public/power-supplies.svg'
import styles from '../styles/Configuration/Power_supplies.module.scss'
import React, { useState } from 'react';
import Image from 'next/image';

const PowerAcc = () => {

    const [selected, setSelected] = useState(null);

    const handlePlatformChange = (event) => {
      setSelected(event.target.value); 
    };
  
    return (
        <>
            <div className={styles.configutator_block}>
                <Image src={power_supplies} width={80} height={80} />
                .power
            </div>
        </>
    );
};

export default PowerAcc;