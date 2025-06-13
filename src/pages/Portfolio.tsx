import { PortfolioCard } from "../components";

export function Portfolio() {

  const projects = [
    {
      id: 1,
      title: "Creaciones y decoraciones Annie",
      description:
        "Una página web, que permite a los usuarios explorar el catálogo de productos de Annie, estos productos incluyen decoraciones, regalos personalizados y más.",
      image: "https://raw.githubusercontent.com/BCamilo17/portfolio-content/refs/heads/main/imagen-portfolio.webp",
      tags: ["Angular(v17)", "TypeScript", "GitHub", "tailwindcss", "Html", "Css"],
      demoUrl: "",
      repoUrl: "https://github.com/BCamilo17/proyecto-arreglos.git",
    },
    {
      id: 2,
      title: "Aplicación de Gestión de Tareas",
      description:
        "Una aplicación para gestionar tareas con funcionalidades de arrastrar y soltar, etiquetas y recordatorios.",
      image: "https://raw.githubusercontent.com/BCamilo17/portfolio-content/refs/heads/main/imagen-portfolio.webp",
      tags: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 3,
      title: "Dashboard Analítico",
      description: "Un dashboard interactivo para visualizar datos de negocio con gráficos y reportes personalizables.",
      image: "https://raw.githubusercontent.com/BCamilo17/portfolio-content/refs/heads/main/imagen-portfolio.webp",
      tags: ["Next.js", "D3.js", "Supabase","Next.js", "D3.js", "Supabase"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 4,
      title: "Sitio Web Corporativo",
      description: "Un sitio web moderno para una empresa de tecnología con animaciones y diseño responsivo.",
      image: "https://raw.githubusercontent.com/BCamilo17/portfolio-content/refs/heads/main/imagen-portfolio.webp",
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 5,
      title: "Aplicación de Clima",
      description: "Una aplicación de pronóstico del tiempo con geolocalización e información detallada.",
      image: "https://raw.githubusercontent.com/BCamilo17/portfolio-content/refs/heads/main/imagen-portfolio.webp",
      tags: ["React", "OpenWeather API", "Styled Components"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 6,
      title: "Blog Personal",
      description: "Un blog con sistema de gestión de contenidos, comentarios y búsqueda.",
      image: "https://raw.githubusercontent.com/BCamilo17/portfolio-content/refs/heads/main/imagen-portfolio.webp",
      tags: ["Next.js", "MDX", "Tailwind CSS"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ]
  return (
    <>

      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-40 2xl:px-80 flex flex-col gap-y-8">
        <h1 className="font-bold text-4xl mt-12 flex justify-center items-center">Portafolio</h1>
        <p className="text-lg flex justify-center items-center">Aquí encontrarás una selección de mis proyectos más destacados. Cada proyecto representa diferentes habilidades y tecnologías que he utilizado a lo largo de mi carrera.</p>
        <section className="grid grid-cols-12 gap-2 md:grid-cols-12">
          {projects.map((project) => (<PortfolioCard description={project.description} title={project.title} image={project.image} tecnologies={project.tags} githubUrl={project.repoUrl} url={project.demoUrl} key={project.id} />))}
        </section>
      </div>
    </>
  )
}
