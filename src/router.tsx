import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Language } from "./data/portfolioData";

export type RoutePath = "/" | "/project" | "/product" | "/business";

interface RouterContextType {
  currentPath: RoutePath;
  currentHash: string;
  navigate: (to: string, options?: { replace?: boolean; scroll?: boolean }) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

function normalizePath(rawPath: string): RoutePath {
  const clean = rawPath.toLowerCase().replace(/\/+$/, "") || "/";
  if (clean === "/project") return "/project";
  if (clean === "/product") return "/product";
  if (clean === "/business") return "/business";
  return "/";
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() =>
    normalizePath(window.location.pathname),
  );
  const [currentHash, setCurrentHash] = useState<string>(() => window.location.hash);
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("demian_portfolio_lang");
    return saved === "en" || saved === "ru" ? saved : "ru";
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("demian_portfolio_lang", lang);
    document.documentElement.lang = lang;
  }, []);

  const navigate = useCallback(
    (to: string, options?: { replace?: boolean; scroll?: boolean }) => {
      const url = new URL(to, window.location.origin);
      const targetPath = normalizePath(url.pathname);
      const targetHash = url.hash;

      if (options?.replace) {
        window.history.replaceState({}, "", url.pathname + url.search + url.hash);
      } else {
        window.history.pushState({}, "", url.pathname + url.search + url.hash);
      }

      setCurrentPath(targetPath);
      setCurrentHash(targetHash);

      if (targetHash) {
        const id = targetHash.replace(/^#/, "");
        const elem = document.getElementById(decodeURIComponent(id));
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      if (options?.scroll !== false) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [],
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const value = useMemo(
    () => ({
      currentPath,
      currentHash,
      navigate,
      language,
      setLanguage,
    }),
    [currentPath, currentHash, navigate, language, setLanguage],
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return ctx;
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
  activeClassName?: string;
  exact?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, children, className = "", activeClassName = "active", exact = true, onClick, ...rest },
  ref,
) {
  const { currentPath, navigate } = useRouter();

  const isExternal = /^https?:\/\//i.test(to) || to.startsWith("mailto:") || to.startsWith("tel:");
  const isHashOnly = to.startsWith("#");

  let isActive = false;
  if (!isExternal && !isHashOnly) {
    const targetPath = normalizePath(to.split("#")[0] || "/");
    isActive = exact ? currentPath === targetPath : currentPath.startsWith(targetPath);
  }

  const finalClassName = [className, isActive ? activeClassName : ""].filter(Boolean).join(" ");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented || isExternal) return;

    // Open in new tab if meta/ctrl key pressed
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    e.preventDefault();

    if (isHashOnly) {
      const id = to.replace(/^#/, "");
      const elem = document.getElementById(decodeURIComponent(id));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState({}, "", to);
      }
      return;
    }

    navigate(to);
  };

  return (
    <a
      ref={ref}
      href={to}
      className={finalClassName}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
});
