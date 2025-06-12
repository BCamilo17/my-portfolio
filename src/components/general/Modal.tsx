
type MyBoxProps = {
    children: React.ReactNode;
    classAdditional?: string;
    internalClassAditional?: string;
    title?: string;
    setActiveModal: React.Dispatch<React.SetStateAction<boolean>>
    actveModal: boolean;
};
export const GeneralModal = ({ children, setActiveModal, classAdditional, actveModal, internalClassAditional, title }: MyBoxProps) => {
    return (
        <div className="w-full h-full fixed top-0 left-0 z-[2] flex items-center justify-center backdrop-blur-sm">
            <div className={`absolute w-[80%] bg-white rounded-lg shadow-lg flex flex-col gap-y-4 p-4 ${classAdditional}`}>
                <div className="flex items-center justify-between">
                    <h2 className="text-black font-semibold">{title}</h2>
                    <span className="material-symbols-outlined text-black cursor-pointer" onClick={() => setActiveModal(false)}>close</span>
                </div>
                <div className={`w-full  flex items-center justify-center ${internalClassAditional}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}