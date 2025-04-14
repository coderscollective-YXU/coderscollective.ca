"use client";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navSections = ["about", "programs", "events"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <Logo />

        <DesktopMenu scrollToSection={scrollToSection} sections={navSections} />
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <MobileMenu
          isMenuOpen={isMenuOpen}
          scrollToSection={scrollToSection}
          sections={navSections}
        />
      </div>
    </nav>
  );
};

export default Navbar;

const DesktopMenu = ({
  scrollToSection,
  sections,
}: {
  scrollToSection: (id: string) => void;
  sections: string[];
}) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {sections.map((section) => (
        <div key={section}>
          {section === "about" ? (
            <Link
              href={"/about"}
              className="text-sm capitalize font-medium hover:text-primary transition-colors"
            >
              {section}
            </Link>
          ) : (
            <button
              onClick={() => scrollToSection(section)}
              className="text-sm capitalize font-medium hover:text-primary transition-colors"
            >
              {section}
            </button>
          )}
        </div>
      ))}

      <Button
        onClick={() => scrollToSection("get-involved")}
        className="bg-primary hover:bg-primary/90"
      >
        Get Involved
      </Button>
    </div>
  );
};

const MobileMenu = ({
  isMenuOpen,
  scrollToSection,
  sections,
}: {
  isMenuOpen: boolean;
  scrollToSection: (id: string) => void;
  sections: string[];
}) => {
  if (!isMenuOpen) return;

  return (
    <div className="md:hidden bg-secondary absolute top-[100px] left-0 w-full">
      <div className="px-4 py-5 flex flex-col space-y-5">
        {sections.map((section) => (
          <div key={section}>
            {section === "about" ? (
              <Link
                href={"/about"}
                className="text-sm capitalize font-medium hover:text-primary transition-colors"
              >
                {section}
              </Link>
            ) : (
              <button
                onClick={() => scrollToSection(section)}
                className="text-sm capitalize font-medium hover:text-primary transition-colors"
              >
                {section}
              </button>
            )}
          </div>
        ))}
        <Button
          onClick={() => scrollToSection("get-involved")}
          className="bg-primary hover:bg-primary/90"
        >
          Get Involved
        </Button>
      </div>
    </div>
  );
};
