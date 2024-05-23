import { facebook, instagram, support, twitter, secure, map, clock,planning,brainstorm,done,execute,monitor,design,} from "../assets/icons";
import { Levi, Gustav, CESphoto1, CESphoto2, CESphoto3} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
    { href: "#faq", label: "FAQ" },
    { href: "#Support", label: "Support" },
];


export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const services = [
    {
        imgURL: map,
        label: "Efficient Network Mapping:",
        subtext: "Optimize your fiber-optic network with our precise mapping services. Our expert engineers use advanced GIS technology to create detailed maps tailored to your needs. From initial surveys to final deliverables, rely on us for accurate insights that streamline your infrastructure planning."
    },
    {
        imgURL: design,
        label: "Expert Consultation",
        subtext: "Get personalized guidance for your fiber-optic project. Our experienced team offers valuable insights and recommendations at every stage, from planning to implementation. Count on us to be your trusted partner in building and optimizing your network."
    },
    {
        imgURL: clock,
        label: "Tailored Network Design",
        subtext: "Need a custom fiber-optic network? Our skilled engineers specialize in creating efficient designs that maximize performance and scalability. From residential communities to business campuses, trust us to deliver innovative solutions that exceed expectations."
    },
];

export const managers = [
    {
        imgURL: Levi,
        customerName: 'Levi Odendaal',
        title: 'Managing Director',
        feedback: "With over a decade of experience in project management, design management, cost accounting, and consulting engineering in Telecommunications, Levi has led major fiber projects in South Africa and the UK. His unwavering work ethic and passion for results have driven success and positively impacted clients. Levi is dedicated to the continued growth of the industry. "
    },
    {
        imgURL: Gustav,
        customerName: 'Gustav Hunsinger',
        title: 'Chief Technical Officer',
        feedback: "A seasoned expert with over 11 years of success in fiber optic design, backend database systems, and automation, Gustav's career is a testament to the seamless integration of diverse expertise. He has crafted innovative and scalable solutions for numerous clients worldwide, consistently delivering exceptional results and driving technological advancements in the telecommunications industry. "
    }
];

export const points = [
    { id: 1, imgURL: brainstorm, title: 'Brainstorming', description: ' Define Specification need required by the client. Specify the expected outcomes and benefits. Research and document relevant regulations and standards Obtain available data from client Identify potential risks and challenges.' },
    { id: 2, imgURL: planning, title: 'Planning', description: ' Analyze data Clearly define the scope of work for the fiber design project. Include deliverables and exclusions Define quality standards for the fiber design Finalize Project Deliverables needed by the client' },
    { id: 3, imgURL: execute, title: 'Launch and Execution', description: 'Define and finalize Commercials Allocate and introduce account manager and team to the client. Define and Finalize Communication Plan  Conduct team orientation and training.' },
    { id: 4, imgURL: map, title: 'Monitoring and Control', description: 'Quality of deliverables Establish a process for identifying and resolving project constraints. Conduct regular quality inspections. Develop a protocol for handling changes to the project scope.' },
    { id: 5, imgURL: done, title: 'Project Commencement', description: 'Compile project documentation and ensure its accessible. Plan for a smooth handover to the client’s  Project Management Team Provide training to end-users  Establish ongoing support mechanisms. Conduct a project evaluation and gather feedback. Establish a lessons learned register for future projects.' },
];


export const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "Enquiries", link: "/" },
            { name: "Job Offers", link: "/" },
            { name: "Contact us", link: "/" },
            { name: "Our Serivces", link: "/" },
            { name: "Join Our Team", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "info@corelineengineering.com", link: "info@corelineengineering.com" },
            { name: "+27218791136", link: "tel:+27218791136" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const Images = [
    { src: CESphoto1, alt: "photo1" },
    { src: CESphoto2, alt: "photo2" },
    { src: CESphoto3, alt: "photo3" },
];