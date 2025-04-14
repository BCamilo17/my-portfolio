import { HomeResumeNavegation } from "./../../types/index";

export const homeData: HomeResumeNavegation[] = [
    {
        id: 1,
        icon: "person",
        title: "Sobre mí",
        info: "Conoce un poco más sobre mí. Mis gustos, mis habilidades, mi experiencia y mucho más",
        path: "/about"
    },
    {
        id: 2,
        icon: "code",
        title: "Portafolio",
        info: "Conoce mis proyectos en constante crecimiento",
        path: "/portfolio"
    },
    {
        id: 3,
        icon: "work",
        title: "Experiencia",
        info: "Mi experiencia en desarrollo web",
        path: "/experience"
    },
    {
        id: 4,
        icon: "mail",
        title: "Contacto",
        info: "¿Estás interesado en mis servicios? Contáctame",
        path: "/contact"
    }];