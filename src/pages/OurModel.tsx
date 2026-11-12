
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Sprout,
  Users,
  HeartPulse,
  Leaf,
  Handshake,
  Target,
  Lightbulb,
  ClipboardCheck,
  TrendingUp,
  MapPin,
  ShieldCheck,
  GraduationCap,
  Building2,
  CheckCircle2,
} from "lucide-react";

const developmentPillars = [
  {
    number: "01",
    title: "Education & Learning",
    description:
      "We recognise education and literacy as important foundations for personal growth, informed decision-making and stronger communities.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Sustainable Agriculture",
    description:
      "We promote sustainable agricultural practices that can strengthen household livelihoods, improve food security and support environmental responsibility.",
    icon: Sprout,
  },
  {
    number: "03",
    title: "Economic Empowerment",
    description:
      "We encourage opportunities for individuals and households to develop productive skills, improve livelihoods and work towards greater economic independence.",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Health & Wellbeing",
    description:
      "We recognise the importance of health, wellbeing and community awareness in building a healthy and productive society.",
    icon: HeartPulse,
  },
  {
    number: "05",
    title: "Environmental Conservation",
    description:
      "We support responsible use of natural resources and community awareness of environmental protection for future generations.",
    icon: Leaf,
  },
  {
    number: "06",
    title: "Community Participation",
    description:
      "We value local knowledge, shared responsibility and active participation in identifying community priorities and pursuing solutions.",
    icon: Users,
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Listen & Understand",
    description:
      "We recognise the importance of understanding the community, its needs, available resources and development priorities.",
    icon: Users,
  },
  {
    number: "02",
    title: "Identify Opportunities",
    description:
      "We focus on identifying practical opportunities that connect community needs with education, agriculture and economic development.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Build Capacity",
    description:
      "We emphasise learning, skills development and knowledge sharing to strengthen people's ability to participate in their own development.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Take Community Action",
    description:
      "We encourage collective participation and locally relevant initiatives that contribute to the community's development priorities.",
    icon: Handshake,
  },
  {
    number: "05",
    title: "Review & Improve",
    description:
      "We recognise accountability, learning and reflection as important elements of responsible and sustainable community development.",
    icon: ClipboardCheck,
  },
];

const principles = [
  "Community ownership and participation",
  "Equal opportunity and inclusion",
  "Sustainability and environmental responsibility",
  "Transparency and accountability",
  "Learning, collaboration and shared responsibility",
];

export default function OurModel() {
  return (
    <main className="overflow-hidden bg-white text-[#18352A]">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden md:min-h-[590px]">
        <img
          src="/images/kcida-model-hero.jpg"
          alt="Community members participating in development activities"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082D20]/95 via-[#0B3828]/80 to-[#0B3828]/30" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#A5D66D]" />
              How We Create Change
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Model of
              <span className="block text-[#A9D875]">
                Community Development
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              We believe lasting development begins with people. Our approach
              places community participation, education, sustainable
              agriculture and economic empowerment at the centre of progress.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-3 rounded-full bg-[#75B843] px-7 py-3.5 font-bold text-white transition hover:bg-[#639F35]"
              >
                Explore Our Work
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/our-story"
                className="inline-flex items-center gap-3 rounded-full border border-white/60 px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-[#18352A]"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/kcida-model-community.jpg"
              alt="Community members working together"
              className="h-[380px] w-full rounded-[28px] object-cover shadow-xl md:h-[470px]"
            />

            <div className="absolute -bottom-7 right-5 max-w-[260px] rounded-2xl bg-[#145C3D] p-6 text-white shadow-xl md:right-[-20px]">
              <Users size={30} className="mb-3 text-[#A9D875]" />
              <p className="text-xl font-bold">People at the Centre</p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Community participation is central to meaningful development.
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pl-5">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Development Philosophy
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Development should begin with the community and grow with its
              people.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              At Kisonsomya Community Initiative for Development Association
              (KCIDA), we recognise that sustainable development requires
              more than short-term interventions. It requires people to have
              opportunities to learn, participate, build skills and contribute
              to the future of their communities.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our approach connects social and economic development with
              education, agriculture, health, environmental responsibility and
              community participation. These areas reflect our commitment to
              creating opportunities for people to improve their own lives.
            </p>

            <Link
              to="/governance"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#247344] transition hover:gap-4"
            >
              Learn about our governance
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PILLARS */}
      <section className="bg-[#F3F8F1] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Areas of Focus
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              Six Pillars That Guide Our Development Work
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our development priorities are interconnected. Together, they
              contribute to stronger households, improved opportunities and
              more sustainable communities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {developmentPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.number}
                  className="group rounded-3xl border border-[#E4EDE1] bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF4E4] text-[#438B42] transition group-hover:bg-[#438B42] group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <span className="text-3xl font-extrabold text-[#E0EBDD]">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#18352A]">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW OUR MODEL WORKS */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
                Our Approach in Practice
              </p>

              <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
                From understanding needs to creating opportunities.
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Meaningful development involves understanding local realities,
                identifying opportunities and supporting people to take part
                in positive change.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Our approach provides a practical way to communicate how KCIDA
                connects its development priorities with community
                participation and responsible action.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl">
                <img
                  src="/images/kcida-model-approach.jpg"
                  alt="Community development and collaboration"
                  className="h-[270px] w-full object-cover"
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute bottom-8 left-[27px] top-8 hidden w-0.5 bg-[#D8E9D1] sm:block" />

              <div className="space-y-5">
                {approachSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="relative flex gap-5 rounded-3xl border border-[#E9EFE6] bg-white p-6 transition hover:border-[#A7CE91] hover:shadow-lg md:p-7"
                    >
                      <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EAF4E4] text-[#438B42]">
                        <Icon size={25} />
                      </div>

                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-3">
                          <span className="text-xs font-extrabold tracking-widest text-[#75AD52]">
                            STEP {step.number}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-[#18352A]">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY OWNERSHIP */}
      <section className="relative overflow-hidden bg-[#103F2C] px-6 py-20 text-white md:px-10 lg:px-12">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border-[55px] border-white/5" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#A9D875]">
              The Heart of Our Model
            </p>

            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              People are not just beneficiaries of development. They are
              participants in shaping it.
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              We believe that communities have knowledge, experiences and
              abilities that are essential to development. By recognising
              these strengths, encouraging participation and creating
              opportunities, we support a more inclusive approach to
              community progress.
            </p>

            <Link
              to="/get-involved"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#79B94B] px-7 py-3.5 font-bold text-white transition hover:bg-[#68A53E]"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/kcida-model-participation.jpg"
              alt="Community participation"
              className="h-64 w-full rounded-3xl object-cover"
            />

            <img
              src="/images/kcida-model-learning.jpg"
              alt="Community learning activity"
              className="mt-10 h-64 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section className="bg-[#F5F8F3] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              What Guides Our Work
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              Principles Behind Our Approach
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our development work is guided by the values of participation,
              responsibility, inclusion and sustainability. These principles
              help shape how we engage with the community and pursue our
              objectives.
            </p>

            <div className="mt-8 space-y-4">
              {principles.map((principle) => (
                <div key={principle} className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-[#69A83E]"
                  />
                  <p className="font-medium leading-7 text-[#315343]">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] bg-white p-7 shadow-lg md:p-10">
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF4E4] text-[#438B42]">
              <Target size={32} />
            </div>

            <h3 className="text-2xl font-extrabold text-[#18352A]">
              Our Shared Direction
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              KCIDA's development philosophy is closely connected to its
              constitutional vision:
            </p>

            <blockquote className="mt-6 border-l-4 border-[#75B843] pl-5 text-xl font-bold leading-9 text-[#24563A]">
              "A well-sustained community through education, modified
              agriculture and production."
            </blockquote>

            <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6">
              <MapPin className="text-[#69A83E]" size={22} />
              <p className="text-sm font-semibold text-gray-600">
                Kisonsomya, Kabwoya Sub-county, Kikuube District, Uganda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOUNTABILITY */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-[30px] lg:order-1">
            <img
              src="/images/kcida-model-accountability.jpg"
              alt="Community members meeting and discussing development"
              className="h-[380px] w-full object-cover md:h-[460px]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Responsible Development
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Building trust through accountability and good governance.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Sustainable community development also requires responsible
              leadership, transparent processes and effective oversight.
              KCIDA recognises the importance of sound financial management,
              record keeping, reporting and accountability.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#F0F6ED] p-5">
                <ShieldCheck className="mb-3 text-[#438B42]" size={27} />
                <h3 className="font-bold">Accountability</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Responsible use of resources and clear oversight.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F0F6ED] p-5">
                <Building2 className="mb-3 text-[#438B42]" size={27} />
                <h3 className="font-bold">Good Governance</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Organised leadership and responsible decision-making.
                </p>
              </div>
            </div>

            <Link
              to="/governance"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#247344] transition hover:gap-4"
            >
              Explore Our Governance
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#EAF4E4] px-6 py-20 text-center md:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#438B42] shadow-sm">
            <Handshake size={32} />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
            Be Part of Community Progress
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
            Lasting change happens when people work together.
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Join KCIDA in supporting opportunities for education, sustainable
            livelihoods and community development.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-3 rounded-full bg-[#247344] px-8 py-3.5 font-bold text-white transition hover:bg-[#185B35]"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-[#247344] px-8 py-3.5 font-bold text-[#247344] transition hover:bg-[#247344] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
