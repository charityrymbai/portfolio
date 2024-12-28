import NaviButton from "./NaviButton";

const NavigationBar = () => {
    return (
        <div className="p-4 fixed w-full flex justify-center">
            <div className=" border-2 border-gray-400 p-4 rounded-2xl w-fit flex gap-9">
                <NaviButton goTo="portfolio/home" title="Home" />
                <NaviButton goTo="portfolio/about" title="About" />
                <NaviButton goTo="portfolio/projects" title="Projects" />
                <NaviButton goTo="portfolio/certifications" title="Certifications" />
            </div>
        </div>
    );
}

export default NavigationBar;