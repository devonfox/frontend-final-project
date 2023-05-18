import React from 'react';
import {chartListType, chartType} from '@/types';
import styles from './chartGrid.module.css';

const chartGrid = ({myCharts}: {myCharts: chartListType}) => {
  return (
    <div className={styles.chartGrid}>
        {myCharts.stockCharts.map((stockChart: chartType) => (
          <div className={styles.chartItem} key={stockChart.id}>
            {stockChart.chart}
          </div>
        ))}
    </div>
  );
};

export default chartGrid;
