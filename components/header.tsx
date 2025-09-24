import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const languages = [
    {
      code: "es",
      name: t("language.spanish"),
      flag: "🇪🇸",
    },
    {
      code: "en",
      name: t("language.english"),
      flag: "🇬🇧",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar sección activa
      const sections = [
        "inicio",
        "experiencia",
        "sobre-mi",
        "proyectos",
        "habilidades",
        "contacto",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".language-dropdown")) {
        setIsLangDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];
    
// Define breakpoint for mobile menu
const [isMobileView, setIsMobileView] = useState(false);

// Check for mobile view on mount and resize
useEffect(() => {
    const checkMobileView = () => {
        setIsMobileView(window.innerWidth < 640); // sm breakpoint in Tailwind
    };
    
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
    
    return () => window.removeEventListener('resize', checkMobileView);
}, []);

  return (
    <header
      className={`w-full h-16 md:h-20 flex justify-between items-center px-4 md:px-8 text-white fixed top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Navegación principal */}
      <nav className="flex justify-center items-center flex-1">
        <ul className="flex list-none gap-4 md:gap-8 text-sm md:text-sm">
          <li>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className={`hover:text-blue-400 cursor-pointer transition-all duration-300 relative ${
                activeSection === "sobre-mi" ? "text-blue-400" : ""
              }`}
            >
              {t("navigation.about")}
              {activeSection === "sobre-mi" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
              )}
            </button>
          </li>
          <li className="hidden sm:block">
            <button
              onClick={() => scrollToSection("experiencia")}
              className={`hover:text-blue-400 cursor-pointer transition-all duration-300 relative ${
                activeSection === "experiencia" ? "text-blue-400" : ""
              }`}
            >
              {t("navigation.experience")}
              {activeSection === "experiencia" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
              )}
            </button>
          </li>

          <li className="hidden sm:block">
            <button
              onClick={() => scrollToSection("proyectos")}
              className={`hover:text-blue-400 cursor-pointer transition-all duration-300 relative ${
                activeSection === "proyectos" ? "text-blue-400" : ""
              }`}
            >
              {t("navigation.projects")}
              {activeSection === "proyectos" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
              )}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("habilidades")}
              className={`hover:text-blue-400 cursor-pointer transition-all duration-300 relative ${
                activeSection === "habilidades" ? "text-blue-400" : ""
              }`}
            >
              {t("navigation.skills")}
              {activeSection === "habilidades" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
              )}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contacto")}
              className={`hover:text-blue-400 cursor-pointer transition-all duration-300 relative ${
                activeSection === "contacto" ? "text-blue-400" : ""
              }`}
            >
              {t("navigation.contact")}
              {activeSection === "contacto" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
              )}
            </button>
          </li>
        </ul>
      </nav>

      {/* Selector de idioma */}
      <div className="relative language-dropdown">
        <button
          onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105"
        >
          <span className="text-xl">{currentLanguage.flag}</span>
          <span className="hidden sm:block text-sm font-medium">
            {currentLanguage.code.toUpperCase()}
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isLangDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        {isLangDropdownOpen && (
          <div className="absolute right-0 top-full mt-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl overflow-hidden min-w-[140px]">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 ${
                  i18n.language === language.code
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-white"
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
