import React from 'react';
import ContentGrid from '@/components/ContentGrid/ContentGrid';
import { chartListType } from '@/types';

function ChartsPage() {
  const chartTestStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
  };

  const exampleCharts: chartListType = {
    gap: '.5em',
    stockCharts: [
      { id: 1, chart: <div style={chartTestStyle} /> },
      { id: 2, chart: <div style={chartTestStyle} /> },
      { id: 3, chart: <div style={chartTestStyle} /> },
      { id: 4, chart: <div style={chartTestStyle} /> },
      { id: 5, chart: <div style={chartTestStyle} /> },
      { id: 6, chart: <div style={chartTestStyle} /> },
      { id: 7, chart: <div style={chartTestStyle} /> },
      { id: 8, chart: <div style={chartTestStyle} /> },
      { id: 9, chart: <div style={chartTestStyle} /> },
      { id: 10, chart: <div style={chartTestStyle} /> },
      { id: 11, chart: <div style={chartTestStyle} /> },
      { id: 12, chart: <div style={chartTestStyle} /> },
    ],
    verticalSpacing: '10rem',
    templateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
  };

  return (
    <div>
      <ContentGrid myCharts={exampleCharts} />
    </div>
  );
}

export default ChartsPage;
