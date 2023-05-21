import React from 'react';

import { chartListType } from '@/types';
import ContentGrid from '@/components/ContentGrid/contentGrid';

const ChartsPage = () => {

const chartTestStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
};

const exampleCharts: chartListType = {
    gap: '.5em',
    stockCharts: [
        { id: 1, chart: <div style={chartTestStyle}></div> },
        { id: 2, chart: <div style={chartTestStyle}></div> },
        { id: 3, chart: <div style={chartTestStyle}></div> },
        { id: 4, chart: <div style={chartTestStyle}></div> },
        { id: 5, chart: <div style={chartTestStyle}></div> },
        { id: 6, chart: <div style={chartTestStyle}></div> },
        { id: 7, chart: <div style={chartTestStyle}></div> },
        { id: 8, chart: <div style={chartTestStyle}></div> },
        { id: 9, chart: <div style={chartTestStyle}></div> },
        { id: 10, chart: <div style={chartTestStyle}></div> },
        { id: 11, chart: <div style={chartTestStyle}></div> },
        { id: 12, chart: <div style={chartTestStyle}></div> },
    ]
};

return (
    <div>
        <ContentGrid myCharts={exampleCharts} />
    </div>
    );
};

export default ChartsPage;