import { Link, useLocation } from "react-router-dom";
import {
  Search,
  Bell,
  User,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "Series", path: "/series" },
    { name: "Stories", path: "/stories" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 lg:px-8">

        <Link
          to="/"
          className="text-[24px] font-black tracking-[-1px]"
        >
          STORY<span className="text-red-500">FLIX</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => {
            const active =
              location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">

          <Link
            to="/search"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10"
          >
            <Search size={19} />
          </Link>

          <button className="hidden h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10 sm:flex">
            <Bell size={19} />
          </button>

          <button className="hidden h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10 sm:flex">
            <User size={19} />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10 md:hidden"
          >
            {mobileOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black px-5 py-4 md:hidden">

          <nav className="flex flex-col gap-1">

            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-zinc-300 hover:bg-white/10 hover:text-white"
              >
                {item.name}
              </Link>
            ))}

          </nav>

        </div>
      )}
    </header>
  );
}
