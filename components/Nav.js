import Link from 'next/link'

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/entretenido">Entretenido</Link>
                </li>
                <li>
                    <Link href="/support">Support</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav