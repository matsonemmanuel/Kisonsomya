
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Leaf,
  Sprout,
  Trees,
  Recycle,
  Droplets,
  Sun,
  Wind,
  ShieldCheck,
  Users,
  Globe2,
  Mountain,
  CheckCircle2,
  Target,
  TreePine,
  
  Lightbulb,
  
} from "lucide-react";

const environmentAreas = [
  {
    number: "01",
    icon: Trees,
    title: "Environmental Conservation",
    description:
      "Recognising the importance of protecting the natural environment, conserving local resources and encouraging responsible practices that support long-term community wellbeing.",
  },
  {
    number: "02",
    icon: Sprout,
    title: "Sustainable Agriculture",
    description:
      "Promoting agricultural approaches that recognise soil health, responsible land use, productive farming and the relationship between agriculture and environmental sustainability.",
  },
  {
    number: "03",
    icon: Droplets,
    title: "Water Resource Protection",
    description:
      "Encouraging responsible water use and awareness of the importance of protecting water resources for households, agriculture and community development.",
  },
  {
    number: "04",
    icon: Recycle,
    title: "Waste Management & Clean Communities",
    description:
      "Recognising the importance of responsible waste management, cleanliness and community awareness in protecting the environment and supporting healthy surroundings.",
  },
  {
    number: "05",
    icon: Sun,
    title: "Climate Awareness & Adaptation",
    description:
      "Promoting awareness of environmental changes and the importance of practical, responsible approaches that help communities respond to environmental challenges.",
  },
  {
    number: "06",
    icon: Mountain,
    title: "Natural Resource Management",
    description:
      "Encouraging responsible use of land, vegetation, water and other natural resources to support community livelihoods and environmental sustainability.",
  },
];

const environmentalPrinciples = [
  "Protect and conserve the natural environment.",
  "Encourage responsible use of natural resources.",
  "Promote sustainable agricultural practices.",
  "Support environmental awareness and education.",
  "Encourage community participation in conservation.",
  "Consider the needs of future generations.",
];

const resilienceSteps = [
  {
    number: "01",
    title: "Understand Environmental Challenges",
    description:
      "Recognise local environmental conditions, available resources and challenges that may affect community wellbeing.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Promote Environmental Awareness",
    description:
      "Encourage knowledge sharing and responsible attitudes towards the environment and natural resources.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Encourage Community Action",
    description:
      "Promote community participation and shared responsibility in environmental protection and conservation.",
    icon: Users,
  },
  {
    number: "04",
    title: "Support Sustainable Practices",
    description:
      "Recognise the value of responsible agriculture, resource management and environmentally conscious activities.",
    icon: Sprout,
  },
  {
    number: "05",
    title: "Build Long-Term Resilience",
    description:
      "Encourage sustainable decisions that strengthen community capacity to respond to environmental changes and future challenges.",
    icon: ShieldCheck,
  },
];

export default function EnvironmentResilience() {
  return (
    <main className="overflow-hidden bg-white text-[#18352A]">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden md:min-h-[590px]">
        <img
          src="/images/kcida-environment-hero.jpg"
          alt="Natural environment and community conservation"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082D20]/95 via-[#0B3828]/80 to-[#0B3828]/25" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <Leaf size={17} className="text-[#A9D875]" />
              What We Do
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Environment
              <span className="block text-[#A9D875]">
                & Resilience
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              We believe sustainable community development depends on a
              healthy environment. Our approach recognises the importance
              of environmental conservation, responsible resource use,
              sustainable agriculture and community resilience.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/our-model"
                className="inline-flex items-center gap-3 rounded-full bg-[#75B843] px-7 py-3.5 font-bold text-white transition hover:bg-[#639F35]"
              >
                Explore Our Model
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/60 px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-[#18352A]"
              >
                Get in Touch
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
              src="/images/kcida-environment-community.jpg"
              alt="Community members engaging in environmental activities"
              className="h-[380px] w-full rounded-[28px] object-cover shadow-xl md:h-[470px]"
            />

            <div className="absolute -bottom-7 right-5 max-w-[260px] rounded-2xl bg-[#145C3D] p-6 text-white shadow-xl md:right-[-20px]">
              <Leaf size={32} className="mb-3 text-[#A9D875]" />
              <p className="text-xl font-bold">
                Protecting Our Environment
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Recognising that environmental responsibility is part of
                building sustainable communities.
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pl-5">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Environmental Philosophy
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Building communities that value nature and prepare for the future.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              At Kisonsomya Community Initiative for Development Association
              (KCIDA), we recognise that people and the environment are
              closely connected. Natural resources support livelihoods,
              agricultural production and the wellbeing of households.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Environmental sustainability therefore forms an important
              consideration in community development. Responsible use of
              natural resources helps communities consider both present
              needs and the wellbeing of future generations.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our approach connects environmental conservation with
              sustainable agriculture, community participation, economic
              opportunities and long-term resilience.
            </p>

            <Link
              to="/our-story"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#247344] transition hover:gap-4"
            >
              Discover Our Story
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ENVIRONMENTAL PRIORITIES */}
      <section className="bg-[#F3F8F1] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Environmental Priorities
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              Protecting Natural Resources for Sustainable Development
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Environmental sustainability requires connected efforts.
              These priorities reflect important considerations in
              protecting natural resources and strengthening community
              resilience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {environmentAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.number}
                  className="group rounded-3xl border border-[#E4EDE1] bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF4E4] text-[#438B42] transition group-hover:bg-[#438B42] group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <span className="text-3xl font-extrabold text-[#E0EBDD]">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#18352A]">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AGRICULTURE AND ENVIRONMENT */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Sustainable Agriculture
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Supporting agricultural practices that respect the environment.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Agriculture is closely connected to environmental sustainability.
              Land, water, soil and vegetation are important resources that
              contribute to food production and household livelihoods.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              KCIDA recognises the importance of responsible agricultural
              practices that consider resource conservation, productive
              land use and long-term environmental wellbeing.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Encouraging responsible land and soil management.",
                "Recognising the importance of water conservation.",
                "Promoting awareness of sustainable agricultural practices.",
                "Connecting agricultural production with environmental protection.",
                "Encouraging responsible use of natural resources.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-[#69A83E]"
                  />
                  <p className="leading-7 text-[#315343]">{item}</p>
                </div>
              ))}
            </div>

            <Link
              to="/sustainable-livelihoods"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#247344] transition hover:gap-4"
            >
              Explore Sustainable Livelihoods
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <img
              src="/images/kcida-environment-agriculture.jpg"
              alt="Sustainable agriculture and land management"
              className="h-[380px] w-full rounded-[30px] object-cover shadow-xl md:h-[480px]"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/95 p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EAF4E4] text-[#438B42]">
                  <Sprout size={28} />
                </div>

                <div>
                  <h3 className="font-bold text-[#18352A]">
                    Agriculture & Conservation
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Supporting productive and responsible resource use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NATURAL RESOURCE MANAGEMENT */}
      <section className="relative overflow-hidden bg-[#103F2C] px-6 py-20 text-white md:px-10 lg:px-12">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border-[55px] border-white/5" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#A9D875]">
              Natural Resource Management
            </p>

            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              Responsible resource use today helps protect opportunities for
              tomorrow.
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              Communities depend on natural resources for agriculture,
              production, household needs and economic activity. Their
              responsible management is therefore important for both
              community wellbeing and long-term development.
            </p>

            <p className="mt-4 leading-8 text-white/75">
              KCIDA recognises the value of environmental awareness,
              conservation and shared responsibility in promoting
              sustainable resource use.
            </p>

            <Link
              to="/our-model"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#79B94B] px-7 py-3.5 font-bold text-white transition hover:bg-[#68A53E]"
            >
              Discover Our Development Model
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/kcida-environment-water.jpg"
              alt="Water resources and environmental conservation"
              className="h-64 w-full rounded-3xl object-cover"
            />

            <img
              src="/images/kcida-environment-trees.jpg"
              alt="Trees and natural vegetation"
              className="mt-10 h-64 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* COMMUNITY RESILIENCE */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="relative">
            <img
              src="/images/kcida-environment-resilience.jpg"
              alt="Community members participating in environmental activities"
              className="h-[380px] w-full rounded-[30px] object-cover shadow-xl md:h-[450px]"
            />

            <div className="absolute -bottom-6 left-6 rounded-2xl bg-[#145C3D] p-5 text-white shadow-xl">
              <div className="flex items-center gap-3">
                <ShieldCheck size={28} className="text-[#A9D875]" />
                <div>
                  <p className="font-bold">Community Resilience</p>
                  <p className="text-sm text-white/75">
                    Preparing for future challenges
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 lg:pl-5">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Building Environmental Resilience
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Helping communities recognise, prepare for and respond to
              environmental challenges.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Environmental resilience is about recognising the challenges
              that can affect natural resources, livelihoods and community
              wellbeing, while encouraging responsible approaches to
              addressing them.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We recognise the importance of awareness, community
              participation, sustainable resource management and
              long-term thinking in strengthening resilience.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#F3F8F1] p-5">
                <Wind className="mb-3 text-[#438B42]" size={27} />
                <h3 className="font-bold">Climate Awareness</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Recognising environmental changes and their implications.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F3F8F1] p-5">
                <ShieldCheck className="mb-3 text-[#438B42]" size={27} />
                <h3 className="font-bold">Preparedness</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Encouraging responsible decisions for future challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE APPROACH RESILIENCE */}
      <section className="bg-[#F3F8F1] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Approach
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              From Environmental Awareness to Sustainable Community Action
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We recognise that environmental resilience requires
              knowledge, participation, responsible practices and
              a long-term commitment to sustainability.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {resilienceSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-3xl border border-[#E5EDE1] bg-white p-6 transition hover:-translate-y-2 hover:shadow-lg"
                >
                  <span className="text-sm font-extrabold tracking-widest text-[#75AD52]">
                    {step.number}
                  </span>

                  <div className="my-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF4E4] text-[#438B42]">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-lg font-bold text-[#18352A]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENVIRONMENTAL RESPONSIBILITY */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Guiding Principles
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              A Shared Responsibility to Protect Our Environment
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Environmental sustainability is not the responsibility of
              one individual or institution alone. It requires awareness,
              participation and responsible decisions from households,
              communities and organisations.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our approach recognises the importance of collective
              responsibility in protecting natural resources and promoting
              sustainable development.
            </p>

            <div className="mt-8 space-y-5">
              {environmentalPrinciples.map((principle, index) => (
                <div key={principle} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDEED4] text-sm font-extrabold text-[#438B42]">
                    {index + 1}
                  </div>

                  <p className="pt-1 leading-7 text-[#315343]">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px]">
            <img
              src="/images/kcida-environment-conservation.jpg"
              alt="Nature conservation and environmental protection"
              className="h-[360px] w-full object-cover md:h-[440px]"
            />
          </div>
        </div>
      </section>

      {/* CONSTITUTIONAL VISION */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-5xl rounded-[30px] bg-[#EAF4E4] px-7 py-12 text-center md:px-14">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#438B42] shadow-sm">
            <Target size={31} />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
            Our Constitutional Vision
          </p>

          <h2 className="mt-5 text-2xl font-extrabold leading-relaxed text-[#18352A] md:text-3xl">
            "A well-sustained community through education, modified
            agriculture and production."
          </h2>

          <p className="mt-5 text-sm font-semibold text-[#63846D]">
            Kisonsomya Community Initiative for Development Association
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 text-center md:px-10">
        <div className="mx-auto max-w-3xl">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF4E4] text-[#438B42]">
            <TreePine size={32} />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
            Protecting Our Future Together
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
            A sustainable environment is a foundation for thriving
            communities.
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Join KCIDA in promoting environmental responsibility,
            sustainable resource use and community resilience for
            present and future generations.
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
              Contact KCIDA
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
