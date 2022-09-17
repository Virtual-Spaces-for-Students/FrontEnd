export default function FooterHome() {
    return (
        <div className="object-none object-bottom">
            <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900 border-gray-200 dark:border-gray-600">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:underline">VSS™</a>. Tous droits réservés.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/about" className="mr-4 hover:underline md:mr-6 ">À propos</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Politique de confidentialité</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licence</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}