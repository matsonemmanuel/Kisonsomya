
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  HandHeart,
  Gift,
  GraduationCap,
  Sprout,
  Users,
  HeartHandshake,
  Package,
  BriefcaseBusiness,
  CheckCircle2,
  ShieldCheck,
  Target,
  MessageCircle,
  Building2,
} from "lucide-react";

const supportAreas = [
  {
    icon: GraduationCap,
    title: "Education & Learning",
    description:
      "Support community education, literacy initiatives, learning opportunities and activities that encourage knowledge-sharing.",
  },
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    description:
      "Contribute resources, expertise or practical support towards sustainable agriculture and improved community livelihoods.",
  },
  {
    icon: Users,
    title: "Youth & Community Development",
    description:
      "Help strengthen opportunities for young people and community members to participate in local development.",
  },
  {
    icon: HeartHandshake,
    title: "Community Wellbeing",
    description:
      "Support initiatives and activities that promote health, peace, inclusion and community wellbeing.",
  },
  {
    icon: Gift,
    title: "Essential Resources",
    description:
      "Contribute relevant materials, equipment, supplies or other resources that may support identified organisational needs.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Skills & Professional Expertise",
    description:
      "Share professional knowledge, technical expertise and specialised services that can strengthen community development efforts.",
  },
];

const supportMethods = [
  {
    icon: Heart,
    title: "Financial Contributions",
    description:
      "Provide financial support towards agreed community-development priorities and organisational needs.",
  },
  {
    icon: Package,
    title: "Material Contributions",
    description:
      "Contribute useful materials, equipment, learning resources or supplies based on identified needs.",
  },
  {
    icon: Users,
    title: "Skills & Knowledge",
    description:
      "Share your professional experience, technical abilities or practical knowledge to support community initiatives.",
  },
  {
    icon: Building2,
    title: "Institutional Support",
    description:
      "Explore opportunities for organisations and institutions to contribute resources, expertise or other forms of assistance.",
  },
];

const principles = [
  "Support should respond to clearly identified community or organisational needs.",
  "Contributions should be handled responsibly and transparently.",
  "Support should respect community priorities and participation.",
  "Appropriate accountability and reporting should guide the use of resources.",
];

export default function SupportOurWork() {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[590px] items-center overflow-hidden bg-[#073d2c] md:min-h-[680px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/kcida-support-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#052e22]/95 via-[#075438]/85 to-[#073d2c]/45" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <Heart size={18} className="text-[#a5df68]" />
              Get Involved
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Support Our Work.
              <span className="mt-2 block text-[#a6df69]">
                Empower Our Community.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Every meaningful contribution can help create opportunities
              for community development. Support KCIDA through resources,
              knowledge, expertise and responsible contributions towards
              our shared development aspirations.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#75bd3f] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#65aa34]"
              >
                Support KCIDA
                <ArrowRight size={19} />
              </Link>

              <a
                href="#ways-to-support"
                className="inline-flex items-center gap-3 rounded-full border border-white/50 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#075438]"
              >
                Explore Ways to Help
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="relative">
            <img
              src="/images/kcida-support-community.jpg"
              alt="Community members participating in development activities"
              className="h-[360px] w-full rounded-3xl object-cover shadow-xl md:h-[470px]"
            />

            <div className="absolute -bottom-6 -right-3 hidden rounded-2xl bg-[#075b32] p-6 text-white shadow-xl sm:block md:-right-6">
              <HandHeart size={35} className="mb-2 text-[#a6df69]" />
              <p className="text-lg font-bold">Every Contribution Matters</p>
              <p className="mt-1 text-sm text-white/75">
                Supporting shared aspirations
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Be Part of the Difference
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#103c2c] sm:text-4xl">
              Your Support Can Help Create Opportunities
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Kisonsomya Community Initiative for Development Association
              (KCIDA) believes that sustainable community development
              requires collective effort, shared responsibility and
              access to opportunities.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Support from individuals, institutions, organisations and
              other well-wishers can contribute to addressing community
              priorities through financial resources, materials,
              professional expertise and knowledge-sharing.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We welcome conversations with people and organisations
              interested in understanding our work and exploring
              appropriate ways to contribute.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#17643b]">
              <CheckCircle2 size={20} />
              Every contribution should serve a meaningful purpose.
            </div>
          </div>

        </div>
      </section>

      {/* WAYS TO SUPPORT */}
      <section
        id="ways-to-support"
        className="bg-[#f3f8f1] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Ways to Contribute
            </p>

            <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
              How You Can Support Our Work
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              There are different ways to support community development.
              You can contribute according to your capacity, expertise
              and available resources.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <div
                  key={method.title}
                  className="group rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf5e3] text-[#27743e] transition group-hover:bg-[#27743e] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <span className="text-sm font-bold text-[#80b94e]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-[#103c2c]">
                    {method.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SUPPORT PRIORITIES */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Supporting Our Priorities
            </p>

            <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
              Areas Where Your Support Can Make a Difference
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              KCIDA's constitutional objectives provide a foundation
              for identifying community-development priorities that
              may benefit from appropriate support.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supportAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#eaf5e3] text-[#27743e]">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-xl font-bold text-[#103c2c]">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm leading-6 text-slate-500">
            These are organisational priority areas, not a representation
            that specific funding campaigns or projects are currently open.
          </p>

        </div>
      </section>

      {/* ACCOUNTABILITY */}
      <section className="bg-[#f3f8f1] px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Responsibility & Accountability
            </p>

            <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
              Supporting Our Work With Responsibility
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We recognise the importance of responsible resource
              management and accountability in community development.
              Contributions should be handled in a manner that respects
              their intended purpose and organisational responsibilities.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              KCIDA's governance and accountability framework includes
              financial management, auditing, procurement, reporting
              and oversight.
            </p>

            <div className="mt-8 space-y-5">
              {principles.map((principle) => (
                <div key={principle} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-[#6eae3c]"
                  />
                  <p className="leading-7 text-slate-600">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-[#0b4c34] p-8 text-white shadow-xl md:p-12">

            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#a6df69]">
              <ShieldCheck size={35} />
            </div>

            <h3 className="text-2xl font-extrabold md:text-3xl">
              Building Trust Through Accountability
            </h3>

            <p className="mt-5 leading-8 text-white/80">
              Meaningful support goes hand in hand with responsible
              management, transparency and appropriate oversight.
            </p>

            <div className="mt-9 space-y-5 border-t border-white/15 pt-7">

              <div className="flex items-center gap-4">
                <CheckCircle2 className="shrink-0 text-[#a6df69]" size={22} />
                <span className="text-sm text-white/85">
                  Financial management and oversight
                </span>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircle2 className="shrink-0 text-[#a6df69]" size={22} />
                <span className="text-sm text-white/85">
                  Auditing and accountability
                </span>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircle2 className="shrink-0 text-[#a6df69]" size={22} />
                <span className="text-sm text-white/85">
                  Procurement and reporting procedures
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SUPPORT PROCESS */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Getting Started
            </p>

            <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
              How to Offer Your Support
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We encourage potential supporters to get in touch so that
              contributions can be discussed and aligned with appropriate
              needs and priorities.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Get in Touch",
                description:
                  "Contact KCIDA and introduce yourself or your organisation and your interest in supporting our work.",
              },
              {
                number: "02",
                title: "Discuss Your Contribution",
                description:
                  "Share the type of support you would like to offer and discuss relevant community or organisational priorities.",
              },
              {
                number: "03",
                title: "Agree on Next Steps",
                description:
                  "Where appropriate, discuss the contribution, its intended purpose and the arrangements for responsible coordination.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-green-100 bg-white p-8 shadow-sm"
              >
                <span className="text-4xl font-extrabold text-[#8cc65a]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#103c2c]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#075438] px-6 py-20 lg:px-10">
        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[45px] border-white/5" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-[#a6df69]">
            <Heart size={34} />
          </div>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Be Part of Our Community Development Journey.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Your generosity, knowledge, resources and commitment can
            contribute to meaningful opportunities. Connect with KCIDA
            and explore how you can support our work.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#8acb4b] px-8 py-4 font-bold text-white transition hover:bg-[#75b83a]"
            >
              Contact KCIDA
              <ArrowRight size={19} />
            </Link>

            <Link
              to="/our-impact"
              className="inline-flex items-center rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#075438]"
            >
              Discover Our Impact
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
