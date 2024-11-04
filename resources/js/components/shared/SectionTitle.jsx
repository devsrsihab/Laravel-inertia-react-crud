const SectionTitle = ({ title }) => {
    return (
        <div className="flex flex-col items-center mb-8">
            <h2 className="text-4xl text-center font-bold mb-4">{title}</h2>
            <div className=" w-[15%] border-t-4 border-gray-900 mx-auto"></div>
            <div className=" mt-2 w-[8%] border-t-2 border-gray-900 mx-auto"></div>
        </div>
    );
};

export default SectionTitle;
