import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Search,
  Bell,
  User,
  Menu,
  X,
  Home,
  Film,
  Tv,
  BookOpen,
} from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Movies",
      path: "/movies",
      icon: Film,
    },
    {
      name: "Series",
      path: "/series",
      icon: Tv,
    },
    {
      name: "Stories",
      path: "/stories",
      icon: BookOpen,
    },
  ];

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#050505]/95 shadow-2xl backdrop-blur-xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1500px] items-center px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 shadow-lg shadow-red-600/20 transition-transform duration-300 group-hover:scale-105">
              <span className="text-lg font-black text-white">
                S
              </span>
            </div>

            <span className="text-xl font-black tracking-[-0.04em] text-white sm:text-2xl">
              STORY<span className="text-red-500">FLIX</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="ml-10 hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={16}
                        strokeWidth={isActive ? 2.4 : 1.8}
                        className="transition-transform group-hover:scale-105"
                      />

                      <span>{item.name}</span>

                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-red-500" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            {/* Search */}
            <Link
              to="/search"
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              <Search size={20} strokeWidth={1.8} />
            </Link>

            {/* Notifications */}
            <button
              type="button"
              aria-label="Notifications"
              className="relative hidden h-10 w-10 items-center justify-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white sm:flex"
            >
              <Bell size={20} strokeWidth={1.8} />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
            </button>

            {/* Profile */}
            <button
              type="button"
              aria-label="Profile"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white sm:flex"
            >
              <User size={17} strokeWidth={1.8} />
            </button>

            {/* Mobile menu */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white md:hidden"
            >
              {mobileOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={`overflow-hidden border-t border-white/5 bg-[#070707]/98 backdrop-blur-xl transition-all duration-300 md:hidden ${
            mobileOpen
              ? "max-h-[420px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-5 py-4">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition ${
                        isActive
                          ? "bg-red-600/10 text-red-400"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    <Icon size={19} />

                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </div>

            <div className="mt-4 border-t border-white/5 pt-4">
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                <Bell size={19} />
                Notifications

                <span className="ml-auto rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">
                  1
                </span>
              </button>

              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                <User size={19} />
                My Account
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer so content isn't hidden behind fixed header */}
      <div className="h-[72px]" />
    </>
  );
}
