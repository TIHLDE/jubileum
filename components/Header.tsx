
import Link from 'next/link'

export const Header = () => {
    return(
        <nav style={{ backgroundColor: "#888888"}}>
            <ul>
                <li><Link href="/">Hjem</Link></li>
                <li><Link href="/daljer">Daljer</Link></li>
                <li><Link href="/historie">Historie</Link></li>
            </ul>
        </nav>
    )
}