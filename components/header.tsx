import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      if (!target.closest(".mobile-menu") && !target.closest(".mobile-menu-button")) {
        setIsMobileMenuOpen(false);
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
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <>
      <header
        className={`w-full h-16 md:h-20 flex justify-between items-center px-4 md:px-8 text-white fixed top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/20 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        {/* Mobile menu button */}
        <button
          className="md:hidden mobile-menu-button p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex justify-center items-center flex-1">
          <ul className="flex list-none gap-8 text-sm">
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
            <li>
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
            <li>
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

        {/* Mobile navigation center space */}
        <div className="md:hidden flex-1"></div>

        {/* Language selector */}
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

          {/* Language dropdown */}
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

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Mobile menu */}
          <div className="mobile-menu absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10">
            <nav className="px-4 py-6">
              <ul className="flex flex-col gap-4">
                <li>
                  <button
                    onClick={() => scrollToSection("sobre-mi")}
                    className={`w-full text-left py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 ${
                      activeSection === "sobre-mi" ? "text-blue-400 bg-blue-500/10" : "text-white"
                    }`}
                  >
                    {t("navigation.about")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("experiencia")}
                    className={`w-full text-left py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 ${
                      activeSection === "experiencia" ? "text-blue-400 bg-blue-500/10" : "text-white"
                    }`}
                  >
                    {t("navigation.experience")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("proyectos")}
                    className={`w-full text-left py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 ${
                      activeSection === "proyectos" ? "text-blue-400 bg-blue-500/10" : "text-white"
                    }`}
                  >
                    {t("navigation.projects")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("habilidades")}
                    className={`w-full text-left py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 ${
                      activeSection === "habilidades" ? "text-blue-400 bg-blue-500/10" : "text-white"
                    }`}
                  >
                    {t("navigation.skills")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contacto")}
                    className={`w-full text-left py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 ${
                      activeSection === "contacto" ? "text-blue-400 bg-blue-500/10" : "text-white"
                    }`}
                  >
                    {t("navigation.contact")}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
