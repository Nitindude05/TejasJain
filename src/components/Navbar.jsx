import { useState, useEffect } from "react";
import { navLinks } from "../constant/constant";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    // Handle smooth scrolling when nav link is clicked
    const handleNavClick = (e, link) => {
        e.preventDefault();
        const targetId = link.replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 80; // Adjust this based on your navbar height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // Track scroll position and update active section
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.link.replace("#", ""));
            let current = "";

            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - 100) {
                        current = sectionId;
                    }
                }
            });

            if (current !== activeSection) {
                setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, "#hero")}>
                    Tejas
                    <span className="relative z-10 text-gradient">.</span>
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => {
                            const sectionId = link.replace("#", "");
                            return (
                                <li key={name} className="group">
                                    <a 
                                        href={link}
                                        onClick={(e) => handleNavClick(e, link)}
                                        className={activeSection === sectionId ? "active" : ""}
                                    >
                                        <span>{name}</span>
                                        <span className="underline" />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <a 
                    href="#contact" 
                    className="contact-btn group"
                    onClick={(e) => handleNavClick(e, "#contact")}
                >
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default NavBar;