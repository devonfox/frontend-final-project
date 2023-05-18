import React, { useState } from 'react';
import styles from './graphCard.module.css';
import { PieChart, ShowChart } from '@mui/icons-material';
import { toggleCardType } from '@/types';


const GraphCard = ({myCharts}: {myCharts: toggleCardType}) => {
    const [cardSwap, setCardSwap] = useState(false);

        const handleClick = () => {
            setCardSwap(!cardSwap);
        };

    const lineChart = myCharts.lineChart;
    const pieChart = myCharts.pieChart;
    const lineIcon = <ShowChart onClick={handleClick}></ShowChart>
    const pieIcon = <PieChart onClick={handleClick}></PieChart>

    return (
    <div className={styles.chart}>
        {cardSwap && pieChart}
        {!cardSwap && lineChart}
        <button className={styles.btn}>
        {cardSwap && lineIcon}
        {!cardSwap && pieIcon}
        </button>
    </div>
    );
};

export default GraphCard;