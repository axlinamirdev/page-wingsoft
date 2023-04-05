import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter();
    const linkData = [{ path: '/', name: 'Servicios' }, { path: '/', name: 'Casos de exito' }, { path: '/blog', name: 'Blog' }]

    const isInsideStyle = {
        borderBottom: '2px solid #44006D'
    }

    return <header className="header_container">
        <div className="logo"> <img src="/wingsoft-logo.png" alt="logo-wingsoft" /></div>
        <ul>
            {
                linkData.map((item, i) => {
                    return <li key={i} style={router.asPath == item.path ? isInsideStyle : null}>
                        <Link href={item.path}>{item.name}</Link>
                    </li>
                })
            }
        </ul>
        <button>
            Contáctanos
        </button>
    </header>
}