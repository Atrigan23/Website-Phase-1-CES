import { CESphoto2 ,AI1} from "../assets/images";

const SectionNetwork = ({ id, title, children, visibleSection, handleMenuItemClick }) => {
    const isVisible = visibleSection === id;

    return (
        <section className="flex  justify-between max-lg:flex-col gap-10 w-full max-container">
        <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${isVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="flex items-center text-4xl justify-center md:justify-between">
                <div className="md:w-1/2 md:pr-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4"> Network Design</h2>
                    <p className="text-lg">Our specialization lies in crafting customized fiber network designs from A to Z, ensuring they align precisely with the requirements and objectives of our clients.                    </p>
                </div>
                <div className="md:w-1/2">
                    <img src={CESphoto2} alt="Image" className="w-full h-auto" />
                </div>
            </div>
        </div>
        </section>
    );
};

export default SectionNetwork;
