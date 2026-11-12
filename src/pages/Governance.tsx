
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Home,
  Users,
  Building2,
  ShieldCheck,
  
  FileCheck,
  Wallet,
  ClipboardList,
  Eye,
  Handshake,
  UserRound,
  Landmark,
  BookOpen,
  CheckCircle2,
  FileText,
  Gavel,
} from "lucide-react";

const governanceBodies = [
  {
    number: "01",
    icon: Users,
    title: "General Assembly",
    description:
      "The association's wider membership structure, providing a platform for member participation and collective decision-making.",
    responsibility: "Membership participation",
  },
  {
    number: "02",
    icon: Building2,
    title: "Executive Committee",
    description:
      "The organisational leadership structure responsible for providing direction and oversight in accordance with the association's governance framework.",
    responsibility: "Leadership and oversight",
  },
  {
    number: "03",
    icon: UserRound,
    title: "Executive Leadership",
    description:
      "Leadership positions including the Executive Director, Chairperson and Treasurer contribute to organisational administration and coordination.",
    responsibility: "Administration and coordination",
  },
  {
    number: "04",
    icon: ClipboardList,
    title: "Committees",
    description:
      "Committee structures support the association's organisational responsibilities and community development objectives.",
    responsibility: "Organisational support",
  },
];

const leadershipRoles = [
  {
    icon: Gavel,
    title: "Chairperson",
    description:
      "A recognised leadership position within the association's governance structure, contributing to organisational leadership and oversight.",
  },
  {
    icon: BriefcaseIcon,
    title: "Executive Director",
    description:
      "A leadership position associated with the coordination and administration of the association's work.",
  },
  {
    icon: Wallet,
    title: "Treasurer",
    description:
      "A recognised organisational role connected to the association's financial management responsibilities.",
  },
];

const accountabilityAreas = [
  {
    icon: Wallet,
    title: "Financial Management",
    description:
      "Responsible financial management is important for ensuring that organisational resources are properly managed and accounted for.",
  },
  {
    icon: FileCheck,
    title: "Auditing",
    description:
      "Auditing provides an accountability mechanism for examining financial records and supporting responsible organisational management.",
  },
  {
    icon: ClipboardList,
    title: "Procurement",
    description:
      "Procurement procedures are recognised as part of the association's accountability and organisational management framework.",
  },
  {
    icon: FileText,
    title: "Reporting",
    description:
      "Organisational reporting supports communication, oversight and accountability in the association's activities.",
  },
];

const membershipPrinciples = [
  {
    icon: Users,
    title: "Participation",
    description:
      "Members have a role in participating in the association's activities and collective decision-making.",
  },
  {
    icon: BookOpen,
    title: "Rights and Responsibilities",
    description:
      "Membership is guided by defined rights and responsibilities within the association's governing framework.",
  },
  {
    icon: Handshake,
    title: "Shared Responsibility",
    description:
      "Members contribute to the association's objectives through cooperation and responsible participation.",
  },
];

function BriefcaseIcon({ size = 24 }: { size?: number }) {
  return <Landmark size={size} />;
}

export default function Governance() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[340px] items-center bg-cover bg-center md:min-h-[410px]"
        style={{
          backgroundImage: "url('/images/kcida-governance-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#062d18]/90 via-[#073b20]/70 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-2xl text-white">

            <span className="inline-flex rounded-full bg-[#a6e77d] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#123c1d]">
              About KCIDA
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
              Governance,
              <span className="block text-[#a6e77d]">
                Accountability & Leadership
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              Discover the organisational structures and accountability
              principles that guide Kisonsomya Community Initiative
              for Development Association.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm font-medium">
              <Link
                to="/"
                className="flex items-center gap-2 transition hover:text-[#a6e77d]"
              >
                <Home size={16} />
                Home
              </Link>

              <ChevronRight size={16} />

              <Link
                to="/our-story"
                className="transition hover:text-[#a6e77d]"
              >
                About Us
              </Link>

              <ChevronRight size={16} />

              <span className="text-[#a6e77d]">
                Governance
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* GOVERNANCE INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="inline-flex rounded-full bg-[#e4f6df] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#17652e]">
              How We Are Organised
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102448] md:text-4xl">
              Strong Governance
              <span className="block">for Sustainable Development</span>
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-600">
              <p>
                Kisonsomya Community Initiative for Development
                Association (KCIDA) recognises good governance
                as an important foundation for responsible
                organisational management and community development.
              </p>

              <p>
                Its governance framework establishes organisational
                structures, leadership responsibilities, membership
                participation and accountability mechanisms that
                guide the association.
              </p>

              <p>
                Through these structures, the association recognises
                the importance of transparency, collective
                responsibility and responsible management of
                organisational affairs.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#structure"
                className="inline-flex items-center gap-2 rounded-full bg-[#08752e] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#075d26]"
              >
                Explore Our Structure
                <ArrowRight size={17} />
              </a>

              <Link
                to="/our-team"
                className="inline-flex items-center gap-2 rounded-full border border-[#08752e] px-6 py-3 text-sm font-bold text-[#08752e] transition hover:bg-[#edf8ed]"
              >
                Meet Our Team
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-3 -left-3 h-32 w-32 rounded-3xl bg-[#16813a]" />

            <img
              src="/images/kcida-governance.jpg"
              alt="Community members participating in organisational discussions"
              className="relative h-[320px] w-full rounded-3xl object-cover md:h-[390px]"
            />

            <div className="absolute bottom-5 right-5 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f6df] text-[#08752e]">
                <ShieldCheck size={25} />
              </div>

              <div>
                <p className="font-bold text-[#102448]">
                  Responsible Leadership
                </p>
                <p className="text-xs text-slate-500">
                  Accountability and oversight
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GOVERNANCE STRUCTURE */}
      <section
        id="structure"
        className="bg-[#f5faf3] px-6 py-16 md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#e0f2d9] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#17652e]">
              Organisational Framework
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102448] md:text-4xl">
              Our Governance Structure
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              KCIDA's governance framework recognises different
              organisational structures that contribute to
              membership participation, leadership, administration
              and oversight.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {governanceBodies.map((body) => {
              const Icon = body.icon;

              return (
                <article
                  key={body.number}
                  className="group rounded-3xl border border-[#e5eee1] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f6df] text-[#08752e]">
                      <Icon size={27} />
                    </div>

                    <span className="text-3xl font-extrabold text-[#e0eee0]">
                      {body.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-[#102448]">
                    {body.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {body.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-bold uppercase tracking-wide text-[#08752e]">
                    <CheckCircle2 size={16} />
                    {body.responsibility}
                  </div>
                </article>
              );
            })}

          </div>

          <div className="mt-9 rounded-2xl border border-[#dcebd7] bg-white p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e8f6df] text-[#08752e]">
                <Landmark size={27} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#102448]">
                  Organisational Governance
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  These structures form part of KCIDA's documented
                  organisational framework. Their specific powers,
                  reporting relationships and procedures are
                  governed by the association's constitution.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* LEADERSHIP RESPONSIBILITIES */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-12 max-w-3xl">
          <span className="inline-flex rounded-full bg-[#e4f6df] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#17652e]">
            Leadership Responsibilities
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-[#102448] md:text-4xl">
            Leadership and Organisational Roles
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            KCIDA's documented structure recognises leadership
            positions that contribute to organisational direction,
            coordination and financial responsibilities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {leadershipRoles.map((role) => {
            const Icon = role.icon;

            return (
              <article
                key={role.title}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f6df] text-[#08752e]">
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#102448]">
                  {role.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {role.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl bg-[#f0f8ed] p-6">
          <div className="flex items-start gap-4">
            <Eye className="mt-1 shrink-0 text-[#08752e]" size={23} />

            <p className="text-sm leading-7 text-slate-600">
              These are recognised positions within the association's
              governance framework. This page does not assign
              additional powers or responsibilities beyond those
              confirmed in the governing documents.
            </p>
          </div>
        </div>
      </section>

      {/* ACCOUNTABILITY */}
      <section className="bg-[#f5faf3] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#e0f2d9] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#17652e]">
              Transparency
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102448] md:text-4xl">
              Accountability and Financial Oversight
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Responsible organisational management requires
              accountability mechanisms that support transparency
              and proper oversight of resources and activities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {accountabilityAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-3xl border border-[#e5eee1] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f6df] text-[#08752e]">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#102448]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* MEMBERSHIP AND PARTICIPATION */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div className="relative">
            <div className="absolute -bottom-3 -right-3 h-32 w-32 rounded-3xl bg-[#16813a]" />

            <img
              src="/images/kcida-membership.jpg"
              alt="Community members taking part in a meeting"
              className="relative h-[320px] w-full rounded-3xl object-cover md:h-[390px]"
            />
          </div>

          <div>
            <span className="inline-flex rounded-full bg-[#e4f6df] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#17652e]">
              Membership
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#102448] md:text-4xl">
              Participation Starts
              <span className="block">With Our Members</span>
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-slate-600">
              Membership is an important part of KCIDA's organisational
              identity. The association's governing framework
              recognises membership participation, rights,
              responsibilities and collective decision-making.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Members are an important part of the association's
              community-based approach and its aspirations for
              sustainable development.
            </p>

            <div className="mt-8 space-y-5">
              {membershipPrinciples.map((principle) => {
                const Icon = principle.icon;

                return (
                  <div
                    key={principle.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f6df] text-[#08752e]">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#102448]">
                        {principle.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* GOVERNANCE COMMITMENT */}
      <section className="bg-[#eaf6e7] px-6 py-14 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center md:flex-row md:text-left">

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-[#08752e]">
            <ShieldCheck size={32} />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-[#102448]">
              Governance Rooted in Responsibility
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
              KCIDA's governance framework provides an organisational
              foundation for participation, leadership, oversight
              and responsible management.
            </p>
          </div>

          <Link
            to="/our-team"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#08752e] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#075d26]"
          >
            Meet Our Team
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section
        className="relative bg-cover bg-center px-6 py-16 text-center md:px-10 md:py-20"
        style={{
          backgroundImage: "url('/images/kcida-governance-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#062d18]/85" />

        <div className="relative mx-auto max-w-3xl text-white">

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Together, We Build Stronger Communities
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Responsible leadership and active participation
            create a stronger foundation for community development.
            Discover how you can be part of KCIDA's journey.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 rounded-full bg-[#91df61] px-7 py-3 font-bold text-[#123c1d] transition hover:bg-[#a7ed7d]"
            >
              Get Involved
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white px-7 py-3 font-bold text-white transition hover:bg-white hover:text-[#123c1d]"
            >
              Contact Us
              <Handshake size={17} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
