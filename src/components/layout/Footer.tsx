
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  UsersRound,
  Camera,
  BriefcaseBusiness,
  Heart,
  ArrowRight,
} from "lucide-react";

import logo from "../../assets/logos/logoso.png";

function Footer() {
  return (
    <footer className="bg-[#102744] text-white">

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-[1320px] px-6 pb-12 pt-16 sm:px-8">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* ORGANIZATION INFORMATION */}
          <div>

            {/* CLICKABLE LOGO AND ORGANIZATION IDENTITY */}
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
              aria-label="KCIDA Home"
            >
              <img
                src={logo}
                alt="Kisonsomya Community Initiative for Development Association Logo"
                className="h-[76px] w-[76px] shrink-0 rounded-full bg-white p-1 object-contain shadow-md transition duration-300 group-hover:scale-105"
              />

              <div className="flex flex-col">
                <h2 className="text-xl font-extrabold leading-tight text-white">
                  Kisonsomya
                </h2>

                <p className="mt-1 max-w-[230px] text-sm font-semibold leading-snug text-[#A8E68A]">
                  Community Initiative for Development Association (KCIDA)
                </p>
              </div>
            </Link>

            {/* ORGANIZATION DESCRIPTION */}
            <p className="mt-6 text-sm leading-7 text-gray-300">
              Kisonsomya Community Initiative for Development Association
              (KCIDA) is committed to promoting community development through
              education, modified agriculture, production and economic
              transformation.
            </p>

            <p className="mt-4 text-sm font-semibold leading-6 text-[#A8E68A]">
              For the Wellbeing of Our Community.
              <br />
              God First.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="mt-6 flex gap-3">

              {[
                { icon: UsersRound, label: "Facebook", href: "#" },
                { icon: Camera, label: "Instagram", href: "#" },
                { icon: BriefcaseBusiness, label: "LinkedIn", href: "#" },
              ].map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#8EEA58] hover:text-[#102744]"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="mb-6 text-lg font-bold">
              Quick Links
            </h3>

            <div className="space-y-4 text-sm text-gray-300">

              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Our Model", "/our-model"],
                ["What We Do", "/what-we-do"],
                ["Our Impact", "/our-impact"],
                ["Get Involved", "/get-involved"],
                ["News & Stories", "/news"],
                ["Contact Us", "/contact"],
              ].map(([name, path]) => (
                <Link
                  key={name}
                  to={path}
                  className="flex items-center gap-2 transition hover:translate-x-1 hover:text-[#A8E68A]"
                >
                  <ArrowRight size={14} />
                  {name}
                </Link>
              ))}

            </div>
          </div>

          {/* OUR FOCUS AREAS */}
          <div>

            <h3 className="mb-6 text-lg font-bold">
              Our Focus Areas
            </h3>

            <div className="space-y-4 text-sm text-gray-300">

              {[
                "Education & Learning",
                "Sustainable Livelihoods",
                "Youth Empowerment",
                "Community Wellbeing",
                "Environment & Resilience",
              ].map((program) => (
                <Link
                  key={program}
                  to="/what-we-do"
                  className="flex items-center gap-2 transition hover:translate-x-1 hover:text-[#A8E68A]"
                >
                  <ArrowRight size={14} />
                  {program}
                </Link>
              ))}

              <Link
                to="/donate"
                className="inline-flex items-center gap-2 pt-3 font-bold text-[#A8E68A] hover:text-white"
              >
                <Heart size={16} />
                Support Our Work
              </Link>

            </div>
          </div>

          {/* CONTACT INFORMATION */}
          <div>

            <h3 className="mb-6 text-lg font-bold">
              Contact Us
            </h3>

            <p className="mb-5 text-sm leading-7 text-gray-300">
              We welcome partnerships, collaborations and conversations
              about community development.
            </p>

            <div className="space-y-5 text-sm text-gray-300">

              <a
                href="tel:+256784871700"
                className="flex items-start gap-3 transition hover:text-[#A8E68A]"
              >
                <Phone
                  size={19}
                  className="mt-1 shrink-0 text-[#A8E68A]"
                />
                <span>+256 784 871 700</span>
              </a>

              <a
                href="mailto:info@kisonsomya.org"
                className="flex items-start gap-3 transition hover:text-[#A8E68A]"
              >
                <Mail
                  size={19}
                  className="mt-1 shrink-0 text-[#A8E68A]"
                />
                <span>info@kisonsomya.org</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#A8E68A]"
                />
                <span>Kisonsomya, Kabwoya, Kikuube District, Uganda</span>
              </div>

            </div>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#086329] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0B8038]"
            >
              Get in Touch
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-white/15">

        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-gray-300 sm:flex-row sm:px-8 sm:text-left">

          <p className="leading-6">
            © {new Date().getFullYear()} Kisonsomya Community Initiative
            for Development Association (KCIDA). All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              to="/"
              className="transition hover:text-[#A8E68A]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="transition hover:text-[#A8E68A]"
            >
              Terms & Conditions
            </Link>

          </div>

          <p className="whitespace-nowrap">
            Designed with{" "}
            <Heart
              size={12}
              className="mx-1 inline text-red-400"
              fill="currentColor"
            />{" "}
            for community.
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
