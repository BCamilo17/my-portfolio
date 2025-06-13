
interface PortfolioCardProps {
    image: string;
    title: string;
    description: string;
    tecnologies: string[];
    url: string;
    githubUrl: string;
}
export const PortfolioCard = ({ image, title, description, tecnologies, url, githubUrl }: PortfolioCardProps) => {

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-lg border-solid border-gray-200 border-1 flex flex-col gap-y-2 hover:shadow-md transition delay-150 duration-150 hover:-translate-y-1 card-background-control">

            <div className="relative h-64 w-full">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 left-0 top-0 w-full h-full object-cover rounded-t-lg"
                />
            </div>
            <div className="p-4 flex flex-col gap-y-2">
                <h2 className="font-semibold">{title}</h2>
                <div className="flex gap-2 flex-wrap">
                    {tecnologies.map((tech, index) => (
                        <div key={index} className="flex gap-2 w-fit">                    
                            <div className="bg-blue-100 text-blue-800 px-2 rounded-xl">
                                {tech}
                            </div>
                        </div>
                    ))}
                </div>
                <p>
                    {description}
                </p>
                <div className="flex gap-2">
                    <button className="p-1 	bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer "><a href={url}>Ver</a></button>
                    <button className="p-1 bg-gray-800 hover:bg-gray-900 text-white rounded-lg cursor-pointer"><a href={githubUrl} target="_blank">GitHub</a></button>
                </div>

            </div>
        </div>
    )
}