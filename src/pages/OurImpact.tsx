
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  GraduationCap,
  Sprout,
  HeartHandshake,
  Users,
  Leaf,
  BookOpen,
  HandHeart,
  ShieldCheck,
  TrendingUp,
  Globe2,
  CalendarDays,
  ClipboardCheck,
  FileText,
  Handshake,
  
  Award,
  
  BarChart3,
} from "lucide-react";

const impactAreas = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Education & Learning",
    description:
      "Promoting education, literacy, knowledge and learning opportunities as foundations for individual growth and sustainable community development.",
    link: "/education-learning",
  },
  {
    number: "02",
    icon: Sprout,
    title: "Sustainable Livelihoods",
    description:
      "Recognising the importance of sustainable agriculture, production and economic opportunities in strengthening household livelihoods.",
    link: "/sustainable-livelihoods",
  },
  {
    number: "03",
    icon: Users,
    title: "Youth Empowerment",
    description:
      "Recognising young people as important contributors to community transformation, leadership and sustainable development.",
    link: "/youth-empowerment",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Community Wellbeing",
    description:
      "Promoting peace, health, social inclusion, participation and a supportive environment for individuals and families.",
    link: "/community-wellbeing",
  },
  {
    number: "05",
    icon: Leaf,
    title: "Environment & Resilience",
    description:
      "Encouraging environmental conservation, responsible natural resource management and sustainable community practices.",
    link: "/environment-resilience",
  },
];

const developmentPrinciples = [
  {
    icon: Users,
    title: "People-Centred Development",
    description:
      "Recognising community members as important participants in identifying priorities and shaping development.",
  },
  {
    icon: Handshake,
    title: "Community Participation",
    description:
      "Encouraging cooperation, shared responsibility and collective ownership of community initiatives.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description:
      "Recognising transparency, responsible resource management and organisational accountability as important foundations.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Progress",
    description:
      "Promoting development approaches that consider long-term community wellbeing and future generations.",
  },
];

const measurementAreas = [
  {
    icon: ClipboardCheck,
    title: "Activity Documentation",
    description:
      "Keeping records of activities, participation and implementation progress.",
  },
  {
    icon: FileText,
    title: "Monitoring & Reporting",
    description:
      "Using appropriate documentation and reporting processes to communicate progress and challenges.",
  },
  {
    icon: BarChart3,
    title: "Learning & Improvement",
    description:
      "Reviewing experiences and lessons to inform future planning and organisational development.",
  },
  {
    icon: Users,
    title: "Community Feedback",
    description:
      "Recognising community experiences and feedback as important considerations in assessing development efforts.",
  },
];

export default function OurImpact() {
  return (
    <main className="overflow-hidden bg-white text-[#18352A]">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden md:min-h-[590px]">
        <img
          src="/images/kcida-impact-hero.jpg"
          alt="KCIDA community members participating in development activities"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082D20]/95 via-[#0B3828]/80 to-[#0B3828]/25" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <Target size={17} className="text-[#A9D875]" />
              Our Impact
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Creating Change.
              <span className="block text-[#A9D875]">
                Transforming Communities.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              Our commitment is to contribute to a well-sustained community
              through education, sustainable agriculture, production,
              economic transformation and community participation.
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
                to="/get-involved"
                className="inline-flex items-center gap-3 rounded-full border border-white/60 px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-[#18352A]"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT INTRODUCTION */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="relative">
            <img
              src="/images/kcida-impact-community.jpg"
              alt="Community members coming together for development"
              className="h-[380px] w-full rounded-[28px] object-cover shadow-xl md:h-[470px]"
            />

            <div className="absolute -bottom-7 right-5 max-w-[260px] rounded-2xl bg-[#145C3D] p-6 text-white shadow-xl md:right-[-20px]">
              <Globe2 size={32} className="mb-3 text-[#A9D875]" />
              <p className="text-xl font-bold">
                Community-Led Transformation
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Development that recognises people as central to sustainable
                community progress.
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pl-5">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              The Difference We Seek to Make
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Building opportunities for a stronger and more sustainable
              community.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Established in 2013, Kisonsomya Community Initiative for
              Development Association (KCIDA) is committed to supporting
              community development in Kisonsomya, Kabwoya Sub-county,
              Kikuube District, Uganda.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our development philosophy recognises that meaningful
              transformation involves education, economic opportunities,
              sustainable agriculture, health, peace and environmental
              responsibility.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We believe that lasting progress is strengthened when
              individuals, households and communities participate in
              identifying needs, creating opportunities and taking
              responsibility for their development.
            </p>

            <Link
              to="/our-story"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#247344] transition hover:gap-4"
            >
              Learn About Our Journey
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ORGANISATIONAL MILESTONE */}
      <section className="bg-[#103F2C] px-6 py-16 text-white md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A9D875]">
              Our Journey
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              A Commitment to Community Development Since 2013
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/75">
              KCIDA was established with a commitment to supporting
              community opportunities through education, modified
              agriculture and production.
            </p>
          </div>

          <div className="flex items-center gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
            <CalendarDays size={38} className="shrink-0 text-[#A9D875]" />
            <div>
              <p className="text-sm text-white/70">Established</p>
              <p className="text-4xl font-extrabold">2013</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT AREAS */}
      <section className="bg-[#F3F8F1] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Areas of Impact
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              Five Connected Areas Driving Community Development
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our work is organised around interconnected development
              priorities that contribute to the vision of a well-sustained
              community.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((area) => {
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

                  <Link
                    to={area.link}
                    className="mt-6 inline-flex items-center gap-2 font-bold text-[#247344] transition group-hover:gap-4"
                  >
                    Explore Area
                    <ArrowRight size={17} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR DEVELOPMENT APPROACH */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              How We Create Meaningful Change
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              Development Built on Participation and Sustainability
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our approach recognises that sustainable development requires
              more than individual activities. It requires community
              participation, accountability and a long-term perspective.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {developmentPrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#E7EEE3] bg-white p-7 transition hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF4E4] text-[#438B42]">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-lg font-bold text-[#18352A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS AND MILESTONES */}
      <section className="bg-[#F3F8F1] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Journey & Milestones
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Every step forward is part of a larger community journey.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Since its establishment in 2013, KCIDA has maintained a
              commitment to community development through education,
              modified agriculture and production.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We believe it is important to document organisational
              milestones, community initiatives, lessons and experiences
              to provide a clear picture of the organisation's journey.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DDEED4] text-[#438B42]">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="font-bold">Organisational Foundation</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Established in 2013 in Kisonsomya, Kabwoya Sub-county,
                    Kikuube District.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DDEED4] text-[#438B42]">
                  <BookOpen size={22} />
                </div>
                <div>
                  <h3 className="font-bold">Development Priorities</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    A continued organisational focus on education,
                    agriculture, production and community transformation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DDEED4] text-[#438B42]">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="font-bold">Governance & Accountability</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Organisational structures and accountability mechanisms
                    that support responsible management.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/our-story"
              className="mt-9 inline-flex items-center gap-2 font-bold text-[#247344] transition hover:gap-4"
            >
              Explore Our Story
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <img
              src="/images/kcida-impact-milestones.jpg"
              alt="KCIDA community development journey"
              className="h-[400px] w-full rounded-[30px] object-cover shadow-xl md:h-[500px]"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/95 p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EAF4E4] text-[#438B42]">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-[#18352A]">
                    Progress Through Collective Action
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Building on community participation and sustainable
                    development priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT MEASUREMENT */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Accountability & Learning
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              How We Understand and Document Progress
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Responsible community development involves documenting
              activities, learning from experience and communicating
              progress transparently.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {measurementAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#E7EEE3] bg-white p-7 transition hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF4E4] text-[#438B42]">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-lg font-bold text-[#18352A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-5xl rounded-[30px] bg-[#EAF4E4] px-7 py-12 text-center md:px-14">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#438B42] shadow-sm">
            <Target size={31} />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
            Our Vision
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

      {/* PARTNERSHIP CTA */}
      <section className="relative overflow-hidden bg-[#103F2C] px-6 py-20 text-center text-white md:px-10">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border-[55px] border-white/5" />

        <div className="relative mx-auto max-w-3xl">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-[#A9D875]">
            <HandHeart size={32} />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#A9D875]">
            Be Part of the Journey
          </p>

          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Together, We Can Create Lasting Community Change.
          </h2>

          <p className="mt-5 leading-8 text-white/75">
            Whether you are an individual, organisation, development partner
            or community supporter, your collaboration can contribute to
            sustainable community development.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-3 rounded-full bg-[#79B94B] px-8 py-3.5 font-bold text-white transition hover:bg-[#68A53E]"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/60 px-8 py-3.5 font-bold text-white transition hover:bg-white hover:text-[#18352A]"
            >
              Partner With KCIDA
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
