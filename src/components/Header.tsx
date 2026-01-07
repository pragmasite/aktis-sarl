import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  window.addEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 10);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="AKTIS" className="h-8 w-auto" />
          <div className="hidden sm:flex flex-col">
            <span
              className={`font-serif text-lg font-bold transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              AKTIS
            </span>
            <span
              className={`text-xs tracking-widest transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              {t.nav.profession}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#a-propos"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.about}
          </a>
          <a
            href="#services"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.services}
          </a>
          <a
            href="#horaires"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.hours}
          </a>
          <a
            href="#contact"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild size="sm">
            <a href="tel:+41794217583">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#a-propos" className="block text-sm font-medium text-foreground hover:text-accent py-2">
              {t.nav.about}
            </a>
            <a href="#services" className="block text-sm font-medium text-foreground hover:text-accent py-2">
              {t.nav.services}
            </a>
            <a href="#horaires" className="block text-sm font-medium text-foreground hover:text-accent py-2">
              {t.nav.hours}
            </a>
            <a href="#contact" className="block text-sm font-medium text-foreground hover:text-accent py-2">
              {t.nav.contact}
            </a>
            <Link to={otherLangPath} className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent py-2">
              <Globe className="h-4 w-4" />
              {otherLang.toUpperCase()}
            </Link>
            <Button asChild className="w-full" size="sm">
              <a href="tel:+41794217583">
                <Phone className="h-4 w-4 mr-2" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
