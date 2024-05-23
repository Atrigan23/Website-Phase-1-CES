const SectionNetwork = ({ id, title, children, visibleSection, handleMenuItemClick }) => {
    const isVisible = visibleSection === id;

    return (
        <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${isVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="max-container flex flex-wrap">
                <div className=" flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
                    <p className="px-2 font-poppins text-black drop-shadow font-bold text-[32px] max-sm:text-[16px] max-sm:leading">
                    Network Design
                    </p>
                    <p className="p-2 info-text drop-shadow">
                    Our specialization lies in crafting customized fiber network designs from A to Z, ensuring they align precisely with the requirements and objectives of our clients.                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionNetwork;
