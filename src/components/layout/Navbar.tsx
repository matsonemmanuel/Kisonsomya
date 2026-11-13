
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Heart,
  ChevronDown,
} from "lucide-react";

import logo from "../../assets/logos/log.png";

const navigation = [
  {
    name: "About Us",
    path: "/about",
    dropdown: [
      { name: "Our Story", path: "/our-story" },
      { name: "Our Team", path: "/our-team" },
      { name: "Governance", path: "/governance" },
    ],
  },
  {
    name: "Our Model",
    path: "/our-model",
  },
  {
    name: "What We Do",
    path: "/what-we-do",
    dropdown: [
      { name: "Education & Learning", path: "/education-learning" },
      { name: "Sustainable Livelihoods", path: "/sustainable-livelihoods" },
      { name: "Youth Empowerment", path: "/youth-empowerment" },
      { name: "Community Wellbeing", path: "/community-wellbeing" },
      { name: "Environment & Resilience", path: "/environment-resilience" },
    ],
  },
  {
    name: "Our Impact",
    path: "/our-impact",
  },
  {
    name: "Get Involved",
    path: "/get-involved",
    dropdown: [
      {
        name: "Volunteer With Us",
        path: "/volunteer-with-us",
      },
      {
        name: "Partner With Us",
        path: "/partner-with-us",
      },
      {
        name: "Support Our Work",
        path: "/support-our-work",
      },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMenu(null);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative cursor-pointer whitespace-nowrap py-3 text-sm font-semibold transition-colors
    ${
      isActive
        ? "text-[#12652D] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#12652D]"
        : "text-[#102744] hover:text-[#12652D]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">

      {/* MAIN HEADER */}
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 2xl:gap-6 2xl:px-6">

        {/* LOGO AND ORGANIZATION IDENTITY */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex min-w-0 shrink items-center gap-3 2xl:gap-4"
        >
          <img
            src={logo}
            alt="KCIDA Logo"
            className="h-[76px] w-[76px] shrink-0 object-contain 2xl:h-[82px] 2xl:w-[82px]"
          />

          <div className="h-[72px] w-px shrink-0 bg-gray-300" />

          <div className="flex min-w-0 flex-col justify-center">
            <h1 className="text-[25px] font-extrabold leading-none tracking-tight text-[#102744]">
              Kisonsomya
            </h1>

            <p className="mt-1 max-w-[440px] text-[15px] font-bold leading-snug text-[#12652D] 2xl:text-[17px]">
              Community Initiative for Development Association (KCIDA)
            </p>

            <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[11px] font-medium text-[#526174] 2xl:text-xs">
              <span>For the Wellbeing of Our Community</span>
              <span className="text-[#16813A]">|</span>
              <span className="font-bold text-[#12652D]">God First</span>
            </div>
          </div>
        </Link>

        {/* DESKTOP CONTACT AND NAVIGATION */}
        <div className="hidden min-w-0 flex-1 flex-col items-end 2xl:flex">

          {/* CONTACT INFORMATION */}
          <div className="mb-4 flex items-center justify-end gap-5 text-[12px] text-[#102744] 2xl:gap-7 2xl:text-[13px]">

            <a
              href="tel:+256784871700"
              className="flex shrink-0 items-center gap-2 transition hover:text-[#12652D]"
            >
              <Phone size={18} className="text-[#12652D]" />
              +256 784 871 700
            </a>

            <a
              href="mailto:info@kisonsomya.org"
              className="flex shrink-0 items-center gap-2 transition hover:text-[#12652D]"
            >
              <Mail size={20} className="text-[#12652D]" />
              info@kisonsomya.org
            </a>

            <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
              <MapPin size={20} className="text-[#12652D]" />
              Kikuube, Uganda
            </div>

          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="flex w-full items-center justify-end gap-4 2xl:gap-5">

            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            {navigation.map((item) => (
              <div key={item.name} className="group relative">

                <NavLink to={item.path} className={navLinkClass}>
                  <span className="flex items-center gap-1">
                    {item.name}

                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    )}
                  </span>
                </NavLink>

                {/* DESKTOP DROPDOWN */}
                {item.dropdown && (
                  <div className="invisible absolute left-0 top-full z-50 mt-1 w-64 translate-y-2 rounded-lg border border-gray-100 bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block cursor-pointer px-5 py-3 text-sm text-[#102744] transition hover:bg-green-50 hover:text-[#12652D]"
                      >
                        {subItem.name}
                      </Link>
                    ))}

                  </div>
                )}

              </div>
            ))}

            {/* DESKTOP DONATE */}
            <Link
              to="/donate"
              className="flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg bg-[#086329] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#064d20]"
            >
              <Heart size={18} fill="currentColor" />
              Donate
            </Link>

          </nav>
        </div>

        {/* MOBILE / TABLET MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="shrink-0 cursor-pointer rounded-lg p-2 text-[#102744] transition hover:bg-green-50 2xl:hidden"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE / TABLET NAVIGATION */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white shadow-lg 2xl:hidden">

          <nav className="max-h-[75vh] space-y-1 overflow-y-auto px-5 py-4">

            {/* HOME */}
            <NavLink
              to="/"
              end
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold ${
                  isActive
                    ? "bg-green-50 text-[#12652D]"
                    : "text-[#102744] hover:bg-gray-50"
                }`
              }
            >
              Home
            </NavLink>

            {/* MOBILE NAVIGATION ITEMS */}
            {navigation.map((item) => (
              <div key={item.name}>

                <div className="flex items-center justify-between">

                  <NavLink
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `flex-1 cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold ${
                        isActive
                          ? "bg-green-50 text-[#12652D]"
                          : "text-[#102744] hover:bg-gray-50"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>

                  {/* MOBILE DROPDOWN TOGGLE */}
                  {item.dropdown && (
                    <button
                      type="button"
                      aria-label={`Expand ${item.name}`}
                      aria-expanded={expandedMenu === item.name}
                      onClick={() =>
                        setExpandedMenu(
                          expandedMenu === item.name ? null : item.name
                        )
                      }
                      className="cursor-pointer rounded-lg p-3 text-[#102744] transition hover:bg-green-50"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          expandedMenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}

                </div>

                {/* MOBILE DROPDOWN SUBMENU */}
                {item.dropdown && expandedMenu === item.name && (
                  <div className="ml-5 border-l-2 border-green-100 pl-3">

                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={closeMobileMenu}
                        className="block cursor-pointer rounded-lg px-4 py-2.5 text-sm text-gray-600 transition hover:bg-green-50 hover:text-[#12652D]"
                      >
                        {subItem.name}
                      </Link>
                    ))}

                  </div>
                )}

              </div>
            ))}

            {/* MOBILE DONATE BUTTON */}
            <Link
              to="/donate"
              onClick={closeMobileMenu}
              className="mt-3 flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#086329] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#064d20]"
            >
              <Heart size={18} fill="currentColor" />
              Donate
            </Link>

            {/* MOBILE CONTACT INFORMATION */}
            <div className="mt-5 space-y-3 border-t border-gray-100 pt-4 text-sm text-gray-600">

              <a
                href="tel:+256784871700"
                className="flex cursor-pointer items-center gap-3"
              >
                <Phone size={17} className="text-green-700" />
                +256 784 871 700
              </a>

              <a
                href="mailto:info@kisonsomya.org"
                className="flex cursor-pointer items-center gap-3"
              >
                <Mail size={17} className="text-green-700" />
                info@kisonsomya.org
              </a>

              <div className="flex items-center gap-3">
                <MapPin size={17} className="text-green-700" />
                Kikuube, Uganda
              </div>

            </div>

          </nav>
        </div>
      )}

    </header>
  );
}

export default Navbar;
