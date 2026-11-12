
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sprout,
  Wheat,
  TrendingUp,
  Leaf,
  HandCoins,
  Users,
  Lightbulb,
  
  Recycle,
  Target,
  CheckCircle2,
  HeartHandshake,

} from "lucide-react";

const livelihoodAreas = [
  {
    number: "01",
    icon: Sprout,
    title: "Sustainable Agriculture",
    description:
      "Promoting responsible agricultural practices that support food production, strengthen household livelihoods and encourage the productive use of available resources.",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Household Economic Empowerment",
    description:
      "Encouraging individuals and households to explore productive opportunities, strengthen their economic capacity and work towards greater financial independence.",
  },
  {
    number: "03",
    icon: Wheat,
    title: "Agricultural Production",
    description:
      "Recognising the importance of agricultural production in supporting household needs, food availability and community economic development.",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Skills & Knowledge Development",
    description:
      "Promoting practical knowledge and skills that can help community members identify opportunities and participate in productive activities.",
  },
  {
    number: "05",
    icon: Recycle,
    title: "Responsible Resource Use",
    description:
      "Encouraging responsible use of land, natural resources and locally available materials to support sustainable community development.",
  },
  {
    number: "06",
    icon: HandCoins,
    title: "Income-Generating Opportunities",
    description:
      "Recognising the role of productive activities, enterprise development and economic opportunities in improving household wellbeing.",
  },
];

const livelihoodPrinciples = [
  "Promote sustainable agricultural practices.",
  "Encourage productive use of available resources.",
  "Strengthen household economic opportunities.",
  "Promote practical knowledge and skills.",
  "Encourage environmental responsibility.",
  "Support community participation and ownership.",
];

const developmentSteps = [
  {
    number: "01",
    title: "Understand Local Resources",
    description:
      "Recognise the skills, knowledge, natural resources and opportunities available within the community.",
    icon: Sprout,
  },
  {
    number: "02",
    title: "Identify Livelihood Opportunities",
    description:
      "Consider practical opportunities in agriculture, production and other productive activities that respond to community priorities.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Build Knowledge & Capacity",
    description:
      "Encourage learning, knowledge sharing and practical skills that strengthen people's ability to pursue livelihood opportunities.",
    icon: Users,
  },
  {
    number: "04",
    title: "Encourage Productive Action",
    description:
      "Promote community participation and responsible action towards improved livelihoods and economic development.",
    icon: TrendingUp,
  },
  {
    number: "05",
    title: "Promote Sustainability",
    description:
      "Recognise the importance of responsible resource use, accountability and long-term thinking in livelihood development.",
    icon: Leaf,
  },
];

export default function SustainableLivelihoods() {
  return (
    <main className="overflow-hidden bg-white text-[#18352A]">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden md:min-h-[590px]">
        <img
          src="/images/kcida-livelihoods-hero.jpg"
          alt="Sustainable agriculture and community livelihoods"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082D20]/95 via-[#0B3828]/80 to-[#0B3828]/25" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <Sprout size={17} className="text-[#A9D875]" />
              What We Do
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Sustainable
              <span className="block text-[#A9D875]">
                Livelihoods
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              We believe sustainable livelihoods are essential to stronger
              households and thriving communities. Our approach recognises
              the importance of agriculture, production, economic empowerment
              and responsible use of available resources.
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
              src="/images/kcida-livelihoods-community.jpg"
              alt="Community members engaged in livelihood activities"
              className="h-[380px] w-full rounded-[28px] object-cover shadow-xl md:h-[470px]"
            />

            <div className="absolute -bottom-7 right-5 max-w-[260px] rounded-2xl bg-[#145C3D] p-6 text-white shadow-xl md:right-[-20px]">
              <Sprout size={32} className="mb-3 text-[#A9D875]" />
              <p className="text-xl font-bold">
                Growing Sustainable Opportunities
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Supporting the connection between productive activities,
                household wellbeing and community progress.
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pl-5">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Livelihood Philosophy
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Creating opportunities for stronger and more resilient
              households.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              At Kisonsomya Community Initiative for Development Association
              (KCIDA), we recognise that sustainable livelihoods play an
              important role in improving household wellbeing and supporting
              community development.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our development priorities recognise the connection between
              agriculture, production, economic empowerment, practical
              knowledge and environmental responsibility.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We believe communities should have opportunities to use their
              knowledge, abilities and available resources productively while
              considering the needs of future generations.
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

      {/* LIVELIHOOD AREAS */}
      <section className="bg-[#F3F8F1] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Livelihood Priorities
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              Building the Foundations for Sustainable Livelihoods
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Sustainable livelihoods require connected opportunities.
              These priorities reflect the areas that guide our commitment
              to household and community economic development.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {livelihoodAreas.map((area) => {
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

      {/* AGRICULTURE SECTION */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Agriculture & Production
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Strengthening livelihoods through sustainable agriculture.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Agriculture and production are important elements of KCIDA's
              constitutional vision. They provide an important foundation
              for thinking about household livelihoods, food production and
              local economic opportunities.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We recognise the value of responsible agricultural practices,
              productive knowledge and the sustainable use of resources in
              supporting community development.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Encouraging sustainable agricultural practices.",
                "Recognising the value of local production.",
                "Promoting responsible resource management.",
                "Connecting agricultural knowledge with household livelihoods.",
                "Supporting environmental awareness and sustainability.",
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
              to="/environment-resilience"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#247344] transition hover:gap-4"
            >
              Explore Environment & Resilience
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <img
              src="/images/kcida-livelihoods-agriculture.jpg"
              alt="Agriculture and sustainable production"
              className="h-[380px] w-full rounded-[30px] object-cover shadow-xl md:h-[480px]"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/95 p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EAF4E4] text-[#438B42]">
                  <Wheat size={28} />
                </div>

                <div>
                  <h3 className="font-bold text-[#18352A]">
                    Agriculture & Production
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Connected to KCIDA's constitutional vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECONOMIC EMPOWERMENT */}
      <section className="relative overflow-hidden bg-[#103F2C] px-6 py-20 text-white md:px-10 lg:px-12">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border-[55px] border-white/5" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#A9D875]">
              Economic Empowerment
            </p>

            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              Supporting people to identify and pursue economic opportunities.
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              Economic empowerment is an important part of sustainable
              community development. Households need opportunities to
              strengthen their productive capacity, develop useful skills
              and participate in economic activities.
            </p>

            <p className="mt-4 leading-8 text-white/75">
              KCIDA recognises the importance of creating opportunities for
              people to improve their livelihoods through knowledge,
              production and responsible economic participation.
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
              src="/images/kcida-livelihoods-enterprise.jpg"
              alt="Community economic activity"
              className="h-64 w-full rounded-3xl object-cover"
            />

            <img
              src="/images/kcida-livelihoods-production.jpg"
              alt="Local production activity"
              className="mt-10 h-64 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW WE APPROACH LIVELIHOOD DEVELOPMENT */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Approach
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              From Local Resources to Sustainable Opportunities
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We recognise that livelihood development should respond to
              community needs, build on available resources and consider
              long-term sustainability.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {developmentSteps.map((step) => {
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

      {/* RESPONSIBILITY AND SUSTAINABILITY */}
      <section className="bg-[#F3F8F1] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[30px]">
            <img
              src="/images/kcida-livelihoods-sustainability.jpg"
              alt="Environmental sustainability and responsible resource use"
              className="h-[360px] w-full object-cover md:h-[440px]"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Sustainability & Responsibility
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              Livelihood opportunities should also protect the future.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Sustainable livelihoods depend on responsible decisions about
              resources, production and the environment. Economic progress
              should recognise the importance of protecting the natural
              environment for present and future generations.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our approach therefore connects livelihood development with
              environmental conservation, community participation and
              responsible resource use.
            </p>

            <div className="mt-8 space-y-4">
              {livelihoodPrinciples.map((principle) => (
                <div key={principle} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-[#69A83E]"
                  />
                  <p className="leading-7 text-[#315343]">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
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
            <HeartHandshake size={32} />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
            Growing Together
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
            Stronger livelihoods. Stronger households. Stronger communities.
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Join us in promoting sustainable opportunities and community
            development through agriculture, production and economic
            empowerment.
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
