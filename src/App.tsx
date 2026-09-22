import { useEffect } from "react";
import { RouterProvider, useRouter } from "./router";
import { SEO } from "./components/SEO";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HRFeedbackWidget } from "./components/HRFeedbackWidget";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";
import { ProductPage } from "./pages/ProductPage";
import { BusinessPage } from "./pages/BusinessPage";

function AppContent() {
  const { currentPath } = useRouter();

  // Scroll to hash on page mount or hash change
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const target = document.getElementById(decodeURIComponent(hash));
      if (target) {
        window.requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };

    window.addEventListener("hashchange", handleHash);
    const timeout = setTimeout(handleHash, 150);

    return () => {
      window.removeEventListener("hashchange", handleHash);
      clearTimeout(timeout);
    };
  }, [currentPath]);

  const renderCurrentPage = () => {
    switch (currentPath) {
      case "/project":
        return <ProjectPage />;
      case "/product":
        return <ProductPage />;
      case "/business":
        return <BusinessPage />;
      case "/":
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="site-canvas">
      <SEO />
      <Navbar />
      <main id="main-content" className="site-main">
        {renderCurrentPage()}
      </main>
      <Footer />
      <HRFeedbackWidget />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
