"use client";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navSections = [
  {
    label: "Upcoming Events",
    href: "/events",
  },
  {
    label: "Programs",
    href: "/programs",
  },
  {
    label: "Resources",
    href: "/resources",
  },  
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Join",  
    href: "/join",
  },
];

  const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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

        <DesktopMenu 
          scrollToSection={scrollToSection} 
          sections={navSections} 
          isHomePage={isHomePage} 
        />
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <MobileMenu
          isMenuOpen={isMenuOpen}
          scrollToSection={scrollToSection}
          sections={navSections}
          isHomePage={isHomePage}
        />
      </div>
    </nav>
  );
};

export default Navbar;

const DesktopMenu = ({
  scrollToSection,
  sections,
  isHomePage,
}: {
  scrollToSection: (id: string) => void;
  sections: { label: string; href: string }[];
  isHomePage: boolean;
}) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {sections.map((section) => (
        <div key={section.label}>
          {["About", "Resources"].includes(section.label) ? (
            <Link
              href={section.href}
              className="text-sm capitalize font-medium hover:text-primary transition-colors"
            >
              {section.label}
            </Link>
          ) : section.label === "Join" ? (
            <Link
              href="/signup"
              className="text-sm capitalize font-medium hover:text-primary transition-colors"
            >
              Join Us
            </Link>
          ) : isHomePage ? (
            <button
              onClick={() => scrollToSection(section.href.substring(1))}
              className="text-sm capitalize font-medium hover:text-primary transition-colors"
            >
              {section.label}
            </button>
          ) : (
            <Link
              href={`/#${section.href.substring(1)}`}
              className="text-sm capitalize font-medium hover:text-primary transition-colors"
            >
              {section.label}
            </Link>
          )}
        </div>
      ))}

      {isHomePage ? (
        <Button
          onClick={() => scrollToSection("get-involved")}
          className="bg-primary hover:bg-primary/90"
        >
          Get Involved
        </Button>
      ) : (
        <Link href="/#get-involved">
          <Button className="bg-primary hover:bg-primary/90">
            Get Involved
          </Button>
        </Link>
      )}
    </div>
  );
};

const MobileMenu = ({
  isMenuOpen,
  scrollToSection,
  sections,
  isHomePage,
}: {
  isMenuOpen: boolean;
  scrollToSection: (id: string) => void;
  sections: { label: string; href: string }[];
  isHomePage: boolean;
}) => {
  if (!isMenuOpen) return;

  return (
    <div className="md:hidden bg-secondary absolute top-[100px] left-0 w-full">
      <div className="px-4 py-5 flex flex-col space-y-5">
        {sections.map((section) => (
          <div key={section.label}>
            {["About", "Resources"].includes(section.label) ? (
              <Link
                href={section.href}
                className="text-sm capitalize font-medium hover:text-primary transition-colors"
              >
                {section.label}
              </Link>
            ) : section.label === "Join" ? (
              <Link
                href="/signup"
                className="text-sm capitalize font-medium hover:text-primary transition-colors"
              >
                Join Us
              </Link>
            ) : isHomePage ? (
              <button
                onClick={() => scrollToSection(section.href.substring(1))}
                className="text-sm capitalize font-medium hover:text-primary transition-colors"
              >
                {section.label}
              </button>
            ) : (
              <Link
                href={`/#${section.href.substring(1)}`}
                className="text-sm capitalize font-medium hover:text-primary transition-colors"
              >
                {section.label}
              </Link>
            )}
          </div>
        ))}
        
        {isHomePage ? (
          <Button
            onClick={() => scrollToSection("get-involved")}
            className="bg-primary hover:bg-primary/90"
          >
            Get Involved
          </Button>
        ) : (
          <Link href="/#get-involved">
            <Button className="bg-primary hover:bg-primary/90">
              Get Involved
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
