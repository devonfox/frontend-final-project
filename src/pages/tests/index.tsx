import Link from 'next/link';
import React from 'react';

function Tests() {
  return (
    <ul>
      <li>
        <Link href="/tests/graphtoggle">Graph Toggle</Link>
      </li>
      <li>
        <Link href="/tests/grid">Graph Grid</Link>
      </li>
      <li>
        <Link href="/tests/chart">Single Chart</Link>
      </li>
      <li>
        <Link href="/tests/tickerdisplaytest">Ticker Display</Link>
      </li>
      <li>
        <Link href="/tests/tickertest">Ticker Data Test</Link>
      </li>
    </ul>
  );
}

export default Tests;
