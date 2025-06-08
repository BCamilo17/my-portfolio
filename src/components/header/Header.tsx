import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/themeContext";

// import {Link} from "react-router-dom";

// array of links for the header navigation
// array de objetos con las propiedades name, href e id
const navLinks = [
    { name: "Inicio", href: "/", id: 1 },
    { name: "Sobre Mí", href: "/about", id: 2 },
    { name: "Portafolio", href: "/portfolio", id: 3 },
    { name: "Experiencia", href: "/experience", id: 4 },
    { name: "Contacto", href: "/contact", id: 5 },
];
export const Header = () => {
    const { theme, setTheme } = useTheme();

    const location = useLocation();
    const [scrollControl, setScrollControl] = useState(false);
    const [showNavbarMobile, setShowNavbarMobile] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrollControl(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        setShowNavbarMobile(false);
    }, [location.pathname]);

    return (
        <header className={`sticky top-0 header w-full py-4 px-4 md:px-8 lg:px-12 xl:px-80 flex justify-between flex-wrap items-center z-1 ${scrollControl ? "shadow-sm  backdrop-blur-3xl" : ""}`}>
            {/* <div className="flex justify-between flex-wrap items-center"> */}
            <div className="flex justify-between items-center w-full md:w-fit">
                <Link to={"/"} className="text-2xl font-bold text-center">Mi portafolio</Link>
                <button onClick={() => setShowNavbarMobile(!showNavbarMobile)} className="md:hidden">
                    <span className="material-symbols-outlined">
                        {showNavbarMobile ? "close" : "menu"}
                    </span>
                </button>
            </div>
            <nav className={`${showNavbarMobile ? "flex w-full" : "hidden md:block"}`}>
                <ul className=" justify-center space-x-4 flex flex-col md:flex-row w-full">
                    {
                        navLinks.map((e) => (

                            <Link to={e.href} key={e.id} onClick={() => { setShowNavbarMobile(false) }} className={`text-md text-base hover:text-blue-600 whitespace-nowrap`}>
                                <li className={`${location.pathname === e.href ? "text-blue-600 w-full bg-blue-100 rounded-lg md:bg-transparent" : ""} p-2 md:p-0`}>{e.name}
                                </li>
                            </Link>
                        ))
                    }
                    <li className="flex items-center">
                        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="text-md text-base hover:text-blue-600 whitespace-nowrap">
                            <span className="material-symbols-outlined">
                                {theme === "light" ? "dark_mode" : "light_mode"}
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>

            {/* </div> */}
        </header>
    );
}