import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import {Link} from "react-router-dom";
const navLinks = [
    { name: "Inicio", href: "/", id: 1 },
    { name: "Sobre Mí", href: "/about", id: 2 },
    { name: "Portafolio", href: "/portfolio", id: 3 },
    { name: "Experiencia", href: "/experience", id: 4 },
    { name: "Contacto", href: "/contact", id: 5 },
];
export const Header = () => {
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
        <header className={`${showNavbarMobile ? "absolute h-[100vh]" : "sticky top-0"} header w-full py-4 px-4 md:px-8 lg:px-12 xl:px-80 flex justify-between flex-wrap items-center ${scrollControl ? "shadow-sm bg-white/80 backdrop-blur-md" : "bg-white"}`}>
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
                                <li key={e.id} className={`${location.pathname === e.href ? "text-blue-600 w-full bg-blue-100 md:bg-transparent":""}`}>
                                    <Link to={e.href} onClick={() => { setShowNavbarMobile(false) }} className={`text-md text-base hover:text-blue-600 whitespace-nowrap `}>{e.name}</Link>
                                </li>))
                        }
                    </ul>
                </nav>

            {/* </div> */}
        </header>
    );
}