import NavBarHome from '../Accueil/Nav'
import FooterHome from '../Accueil/Footer'
import Contact from './Contact'

export default function ContactPage() {
    return (
        <div className="bg-gray-800 h-max">
            <NavBarHome />
            <Contact />
            <FooterHome />
        </div>
    )
}

