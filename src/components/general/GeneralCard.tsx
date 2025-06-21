
export interface GeneralCardProps {
    children: React.ReactNode;
    additionalClass?: string;
}

export const GeneralCard = ({children, additionalClass }:GeneralCardProps) => {
    return (
        <div  className={`border-solid border-gray-200 border-1 p-4 rounded-lg mb-4 flex flex-col gap-y-2 hover:shadow-md transition delay-150 duration-150 hover:-translate-y-1 ${additionalClass}`}>
            {children}
        </div>
    );
}