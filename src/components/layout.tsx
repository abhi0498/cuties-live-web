import { useTheme } from "@/hooks/useTheme";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${theme} flex flex-col`}>
      <div className="bg-background text-foreground flex flex-col h-full flex-1">
        <Header toggleTheme={toggleTheme} />
        {children}
        <Footer />
      </div>
    </div>
  );
}
