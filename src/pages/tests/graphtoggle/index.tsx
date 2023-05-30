import React from 'react';
import GraphCard from '@/components/GraphCard/GraphCard';
import {toggleCardType} from '@/types';

const ChartsPage = () => {

    const chartTestStyle: React.CSSProperties = {
        width: '300px',
        height: '400px',
        backgroundColor: 'red',
    };

    const chartTestStyle2: React.CSSProperties = {
        width: '300px',
        height: '400px',
        backgroundColor: 'green',
    };

    const charts: toggleCardType = {
        lineChart: <div style={chartTestStyle}></div>,
        pieChart: <div style={chartTestStyle2}></div>
    };

    return (
        <div>
        <GraphCard myCharts={charts} />
        </div>
    );
}
export default ChartsPage;