"use client"

import { CirclesWithBar } from 'react-loader-spinner';
import styles from './loader.module.css'

export default function Loader() {
    return (
        <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass={styles.loader}
            visible={true}
        />
    );
}
