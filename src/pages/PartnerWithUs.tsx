
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Handshake,
  Building2,
  GraduationCap,
  Sprout,
  HeartHandshake,
  Landmark,
  BriefcaseBusiness,
  Users,
  Lightbulb,
  CheckCircle2,
  Target,
  Globe2,
} from "lucide-react";

const partnershipAreas = [
  {
    icon: GraduationCap,
    title: "Education & Learning",
    description:
      "Collaborate on initiatives that strengthen access to education, literacy, knowledge-sharing and learning opportunities.",
  },
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    description:
      "Explore collaboration around sustainable farming, agricultural knowledge and community livelihood development.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Economic Empowerment",
    description:
      "Work together on approaches that encourage economic participation, skills development and improved livelihoods.",
  },
  {
    icon: HeartHandshake,
    title: "Community Wellbeing",
    description:
      "Support community-centred approaches that promote health, peace, inclusion and collective wellbeing.",
  },
  {
    icon: Globe2,
    title: "Environment & Resilience",
    description:
      "Explore opportunities to promote environmental conservation, responsible resource use and sustainable development.",
  },
  {
    icon: Lightbulb,
    title: "Technology & Innovation",
    description:
      "Share technical expertise, innovative ideas and knowledge that can contribute to local development priorities.",
  },
];

const partnerTypes = [
  {
    icon: Building2,
    title: "NGOs & Development Organisations",
    description:
      "Organisations interested in community development, programme collaboration and shared development priorities.",
  },
  {
    icon: Landmark,
    title: "Government Institutions",
    description:
      "Public institutions interested in constructive engagement around community development priorities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Businesses & Private Sector",
    description:
      "Businesses seeking meaningful ways to contribute through expertise, resources, technology and responsible engagement.",
  },
  {
    icon: GraduationCap,
    title: "Academic Institutions",
    description:
      "Schools, colleges and universities interested in learning, knowledge exchange and community engagement.",
  },
  {
    icon: Users,
    title: "Foundations & Networks",
    description:
      "Foundations, networks and other organisations interested in exploring areas of shared purpose.",
  },
  {
    icon: HeartHandshake,
    title: "Individuals & Community Groups",
    description:
      "People and community groups interested in sharing knowledge, experience and practical support.",
  },
];

const principles = [
  "Shared goals and a clear understanding of common priorities.",
  "Respect for community voices, participation and local knowledge.",
  "Transparency, accountability and responsible collaboration.",
  "Mutual respect, communication and clearly understood responsibilities.",
];

export default function PartnerWithUs() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[590px] items-center overflow-hidden bg-[#073d2c] md:min-h-[680px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/kcida-partnership-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#052e22]/95 via-[#075438]/85 to-[#073d2c]/45" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <Handshake size={18} className="text-[#a5df68]" />
              Get Involved
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Partner With Us.
              <span className="mt-2 block text-[#a6df69]">
                Together, We Can Do More.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Meaningful community development grows through collaboration.
              Join Kisonsomya Community Initiative for Development Association
              in exploring partnerships that support education, sustainable
              agriculture, economic transformation and community wellbeing.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#75bd3f] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#65aa34]"
              >
                Start a Conversation
                <ArrowRight size={19} />
              </Link>

              <a
                href="#partnership-areas"
                className="inline-flex items-center gap-3 rounded-full border border-white/50 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#075438]"
              >
                Explore Partnerships
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
              src="/images/kcida-partnership-community.jpg"
              alt="Community members collaborating on development activities"
              className="h-[360px] w-full rounded-3xl object-cover shadow-xl md:h-[470px]"
            />

            <div className="absolute -bottom-6 -right-3 hidden rounded-2xl bg-[#075b32] p-6 text-white shadow-xl sm:block md:-right-6">
              <Handshake size={35} className="mb-2 text-[#a6df69]" />
              <p className="text-lg font-bold">Stronger Together</p>
              <p className="mt-1 text-sm text-white/75">
                Collaboration for development
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Building Meaningful Relationships
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#103c2c] sm:text-4xl">
              Collaboration Is Essential to Sustainable Development
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Kisonsomya Community Initiative for Development Association
              (KCIDA) recognises that sustainable community development
              requires cooperation, shared knowledge and collective
              responsibility.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We believe that organisations, institutions, businesses and
              individuals can contribute different perspectives, expertise
              and resources towards addressing community priorities.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We welcome conversations with potential partners who share an
              interest in community participation, sustainable development
              and creating opportunities for people to improve their
              wellbeing.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#17643b]">
              <CheckCircle2 size={20} />
              Shared purpose. Responsible collaboration.
            </div>
          </div>
        </div>
      </section>

      {/* WHO CAN PARTNER */}
      <section className="bg-[#f3f8f1] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Potential Partners
            </p>

            <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
              Who Can Partner With KCIDA?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We are open to engaging with different stakeholders interested
              in exploring opportunities for collaboration around shared
              community-development priorities.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((partner, index) => {
              const Icon = partner.icon;

              return (
                <div
                  key={partner.title}
                  className="group rounded-2xl border border-green-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf5e3] text-[#27743e] transition group-hover:bg-[#27743e] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <span className="text-sm font-bold text-[#80b94e]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-[#103c2c]">
                    {partner.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {partner.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP AREAS */}
      <section
        id="partnership-areas"
        className="px-6 py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Areas for Collaboration
            </p>

            <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
              Where We Can Work Together
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our constitutional objectives provide a foundation for
              identifying potential areas of partnership and collaboration.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-[#eaf5e3] text-[#27743e]">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-bold text-[#103c2c]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm leading-6 text-slate-500">
            These areas describe potential collaboration priorities. They
            do not imply that particular funded projects or partnership
            agreements are currently available.
          </p>
        </div>
      </section>

      {/* PARTNERSHIP PRINCIPLES */}
      <section className="bg-[#f3f8f1] px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Our Approach
            </p>

            <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
              Partnerships Built on Shared Values
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We believe that meaningful partnerships should be grounded in
              mutual understanding, community participation and a shared
              commitment to responsible development.
            </p>

            <div className="mt-8 space-y-5">
              {principles.map((principle) => (
                <div key={principle} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-[#6eae3c]"
                  />
                  <p className="leading-7 text-slate-600">{principle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-[#0b4c34] p-8 text-white shadow-xl md:p-12">
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#a6df69]">
              <Target size={35} />
            </div>

            <h3 className="text-2xl font-extrabold md:text-3xl">
              A Shared Commitment to Community Development
            </h3>

            <p className="mt-5 leading-8 text-white/80">
              KCIDA's vision is:
            </p>

            <blockquote className="mt-5 border-l-4 border-[#a6df69] pl-5 text-xl font-semibold leading-9 text-white">
              "A well-sustained community through education, modified
              agriculture and production."
            </blockquote>

            <p className="mt-6 leading-8 text-white/80">
              We welcome dialogue with organisations and individuals who
              share an interest in advancing this vision through
              constructive collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP PROCESS */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Begin the Conversation
            </p>

            <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
              Exploring a Partnership With KCIDA
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Every meaningful collaboration begins with a conversation.
              Here is a simple starting point for exploring a potential
              partnership.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Introduce Your Organisation",
                description:
                  "Tell us about your organisation, institution or initiative and your interest in working with KCIDA.",
              },
              {
                number: "02",
                title: "Identify Shared Priorities",
                description:
                  "Discuss your areas of interest and identify possible points of alignment with KCIDA's objectives.",
              },
              {
                number: "03",
                title: "Explore Collaboration",
                description:
                  "Where there is mutual interest, discuss possible areas of cooperation, responsibilities and appropriate next steps.",
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
            <Handshake size={34} />
          </div>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Let's Build Something Meaningful Together.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Do you represent an organisation, institution or business
            interested in community development? We would welcome the
            opportunity to hear from you and explore areas of shared
            interest.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#8acb4b] px-8 py-4 font-bold text-white transition hover:bg-[#75b83a]"
            >
              Discuss a Partnership
              <ArrowRight size={19} />
            </Link>

            <Link
              to="/our-impact"
              className="inline-flex items-center rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#075438]"
            >
              Explore Our Impact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
