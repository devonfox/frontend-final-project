

import Link from 'next/link';

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
            <Link href="/tests/home">HomePage Test</Link>
            </li>
            <li>
                <Link href="/tests/chart">Single Chart</Link>
            </li>
            <li>
            <Link href="/tests/tickerdisplaytest">Ticker Display</Link>
            </li>
        </ul>
  );
}

export default Tests;