

import Link from 'next/link';

function Tests() {
    return (
        <ul>
            <li>
            <Link href="/tests/graphtoggle">GraphToggle</Link>
            </li>
            <li>
            <Link href="/tests/grid">GraphGrid</Link>
            </li>
        </ul>
    );
}

export default Tests;