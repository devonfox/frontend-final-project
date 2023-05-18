import React from 'react';
import {tickerListType, tickerType} from '@/types';
import styles from './tickerLarge.module.css';

const tickerGrid = ({myTickers}: {myTickers: tickerListType}) => {
  return (
    <div className={styles.tickerGrid}>
        {myTickers.stockTickers.map((stockTicker: tickerType) => (
          <div className={styles.tickerItem} key={stockTicker.id}>
            {stockTicker.ticker}
          </div>
        ))}
    </div>
  );
};

export default tickerGrid;
