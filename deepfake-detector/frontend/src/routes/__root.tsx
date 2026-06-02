import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode, useState } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Menu, X } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-white">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-white">Page not found</h2>
        <p className="mt-2 text-sm text-neutral-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 border border-neutral-800 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-white">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center gap-2 border border-neutral-800 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-neutral-800 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Deepfake Detector — Authenticity" },
      { name: "description", content: "Verify media authenticity in seconds." },
      { name: "author", content: "Deepfake Detector" },
      { property: "og:title", content: "Deepfake Detector" },
      { property: "og:description", content: "Verify media authenticity in seconds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth bg-black">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased bg-black">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import SmoothScroll from "../components/SmoothScroll";
import { motion, AnimatePresence } from "framer-motion";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/detect", label: "Detect" },
    { to: "/how-it-works", label: "Philosophy" },
    { to: "/about", label: "About" },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black font-serif">
          
          {/* Minimalist Header */}
          <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference pointer-events-none">
            <div className="mx-auto px-6 py-8 flex items-center justify-between pointer-events-auto">
              <Link 
                to="/" 
                className="text-sm font-bold tracking-wider uppercase flex items-center gap-2 hover:opacity-70 transition-opacity text-white font-sans"
              >
                Deepfake Detector
              </Link>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity text-white font-sans"
              >
                Menu
              </button>
            </div>
          </header>

          {/* Full Screen Menu Overlay - Translucent Glassmorphic */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 z-[100] flex flex-col font-sans"
              >
                {/* Glass background with blur */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />
                
                {/* Optional: Ocean blue glow in background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-600/20 rounded-full blur-[120px]" />
                  <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-600/20 rounded-full blur-[120px]" />
                </div>

                {/* Menu Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="px-6 py-8 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-wider uppercase text-white">Menu</span>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity text-white"
                    >
                      Close
                    </button>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center px-6 md:px-24">
                    <nav className="flex flex-col gap-4 md:gap-8">
                      {navLinks.map((link, i) => (
                        <div key={link.to} className="overflow-hidden">
                          <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.76, 0, 0.24, 1] }}
                          >
                            <Link
                              to={link.to}
                              onClick={() => setMobileMenuOpen(false)}
                              activeProps={{ className: "text-white/40" }}
                              className="text-5xl md:text-7xl font-bold tracking-tighter uppercase hover:ml-4 hover:text-white/70 transition-all duration-300 text-white/90"
                            >
                              {link.label}
                            </Link>
                          </motion.div>
                        </div>
                      ))}
                    </nav>
                  </div>

                  {/* Footer note in menu */}
                  <div className="px-6 py-8">
                    <p className="text-[10px] uppercase tracking-wider text-white/30 text-center font-sans">
                      Deepfake Detector — Authenticity Standard
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <main className="flex-1">
            <Outlet />
          </main>

          {/* Footer */}
          <footer className="py-12 px-6 border-t border-neutral-900 bg-black">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs uppercase tracking-widest text-neutral-600 font-sans font-bold">
              <span>© {new Date().getFullYear()} Authenticity Standard</span>
              <div className="flex gap-8">
                <Link to="/about" className="hover:text-white transition-colors">Information</Link>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </footer>
        </div>
      </SmoothScroll>
    </QueryClientProvider>
  );
}