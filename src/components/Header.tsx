import { Fragment, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/user-agreement", label: "User Agreement" },
];
export default function Header({ toggleTheme }: { toggleTheme: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activePath = usePathname();
  console.log(activePath);

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/cuties-live-web/icon.png"
            alt="Cuties Live"
            width={32}
            height={32}
          />
          <h1 className="text-2xl font-bold">Cuties Live</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Fragment key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-primary transition-colors relative ${
                  activePath === link.href
                    ? "text-primary after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-1/2 after:h-0.5 after:bg-primary"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </Fragment>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-background py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors relative ${
                  activePath === link.href
                    ? "text-primary after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-2 after:h-0.5 after:bg-primary"
                    : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
