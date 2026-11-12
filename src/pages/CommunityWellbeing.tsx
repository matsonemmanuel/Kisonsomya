
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  HeartHandshake,
  Users,
  ShieldCheck,
  HandHeart,
  Activity,
  BookOpen,
  House,
  Handshake,
  Scale,
  Leaf,
  CheckCircle2,
  Target,
  Smile,
  Sprout,
  MessageCircle,
} from "lucide-react";

const wellbeingAreas = [
  {
    number: "01",
    icon: Heart,
    title: "Health & Healthy Living",
    description:
      "Recognising the importance of health, healthy living and community awareness in supporting the wellbeing and quality of life of individuals and families.",
  },
  {
    number: "02",
    icon: HandHeart,
    title: "Social Support & Inclusion",
    description:
      "Promoting a community environment where people are respected, included and encouraged to participate in activities that contribute to shared wellbeing.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Peace & Social Harmony",
    description:
      "Recognising peace, mutual respect and positive relationships as important foundations for a stable and supportive community.",
  },
  {
    number: "04",
    icon: Users,
    title: "Community Participation",
    description:
      "Encouraging individuals, families and community members to contribute ideas, participate in local initiatives and take collective responsibility for development.",
  },
  {
    number: "05",
    icon: BookOpen,
    title: "Education & Awareness",
    description:
      "Recognising the role of education, information and awareness in helping people make informed decisions and improve their lives.",
  },
  {
    number: "06",
    icon: House,
    title: "Family & Household Wellbeing",
    description:
      "Promoting the importance of stronger households, supportive relationships and opportunities that contribute to individual and family wellbeing.",
  },
];

const wellbeingPrinciples = [
  "Respect the dignity and rights of every individual.",
  "Encourage peaceful coexistence and mutual respect.",
  "Promote community participation and shared responsibility.",
  "Recognise health as an important part of quality of life.",
  "Encourage inclusion and equal opportunities.",
  "Support sustainable improvements in community wellbeing.",
];

const wellbeingApproach = [
  {
    number: "01",
    title: "Listen to the Community",
    description:
      "Recognise community experiences, priorities and concerns as important considerations in development.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Promote Awareness",
    description:
      "Recognise the importance of education, information and awareness in strengthening individual and community wellbeing.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Encourage Participation",
    description:
      "Promote involvement, cooperation and shared responsibility among individuals, households and community groups.",
    icon: Users,
  },
  {
    number: "04",
    title: "Strengthen Relationships",
    description:
      "Encourage peaceful coexistence, mutual respect and positive relationships within the community.",
    icon: Handshake,
  },
  {
    number: "05",
    title: "Promote Sustainable Wellbeing",
    description:
      "Connect social wellbeing with education, economic opportunities, health and environmental responsibility.",
    icon: Sprout,
  },
];

export default function CommunityWellbeing() {
  return (
    <main className="overflow-hidden bg-white text-[#18352A]">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden md:min-h-[590px]">
        <img
          src="/images/kcida-wellbeing-hero.jpg"
          alt="Community members coming together for community wellbeing"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082D20]/95 via-[#0B3828]/80 to-[#0B3828]/25" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <HeartHandshake size={17} className="text-[#A9D875]" />
              What We Do
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Community
              <span className="block text-[#A9D875]">
                Wellbeing
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              We believe a thriving community is built on the wellbeing of
              its people. Our approach recognises the importance of health,
              peace, social inclusion, education and meaningful community
              participation in creating a better quality of life.
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
              src="/images/kcida-wellbeing-community.jpg"
              alt="Community members participating in a community activity"
              className="h-[380px] w-full rounded-[28px] object-cover shadow-xl md:h-[470px]"
            />

            <div className="absolute -bottom-7 right-5 max-w-[260px] rounded-2xl bg-[#145C3D] p-6 text-white shadow-xl md:right-[-20px]">
              <HeartHandshake size={32} className="mb-3 text-[#A9D875]" />
              <p className="text-xl font-bold">
                People at the Centre of Development
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Recognising that stronger communities begin with the wellbeing
                and participation of their people.
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pl-5">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Wellbeing Philosophy
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Building a community where people can live with dignity,
              opportunity and hope.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              At Kisonsomya Community Initiative for Development Association
              (KCIDA), we recognise that community development goes beyond
              physical infrastructure and economic progress. It also involves
              the social, physical and personal wellbeing of individuals
              and families.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              A healthy and supportive community requires peace, positive
              relationships, access to knowledge, social inclusion and
              opportunities for people to participate in shaping their future.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our approach places people at the centre of development and
              recognises the connection between wellbeing, education,
              livelihoods and sustainable community progress.
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

      {/* WELLBEING AREAS */}
      <section className="bg-[#F3F8F1] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Wellbeing Priorities
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              Creating the Conditions for People to Thrive
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Community wellbeing is interconnected. These priorities
              reflect important dimensions of a supportive, peaceful,
              inclusive and sustainable community.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wellbeingAreas.map((area) => {
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

      {/* HEALTH AND QUALITY OF LIFE */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Health & Quality of Life
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Healthy people are an important foundation of thriving
              communities.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Health is an important dimension of individual and community
              wellbeing. People's ability to learn, work, care for their
              families and participate in society is closely connected
              to their health and quality of life.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              KCIDA recognises the importance of health awareness, healthy
              living and community wellbeing as part of its broader commitment
              to community development.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Recognising health as an important community development priority.",
                "Encouraging health awareness and informed decision-making.",
                "Promoting healthy living and personal responsibility.",
                "Recognising the wellbeing needs of individuals and families.",
                "Connecting health with education and social wellbeing.",
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
          </div>

          <div className="relative">
            <img
              src="/images/kcida-wellbeing-health.jpg"
              alt="Community health awareness and wellbeing"
              className="h-[380px] w-full rounded-[30px] object-cover shadow-xl md:h-[480px]"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/95 p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EAF4E4] text-[#438B42]">
                  <Activity size={28} />
                </div>

                <div>
                  <h3 className="font-bold text-[#18352A]">
                    Health & Wellbeing
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    An important foundation for community development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PEACE AND SOCIAL COHESION */}
      <section className="relative overflow-hidden bg-[#103F2C] px-6 py-20 text-white md:px-10 lg:px-12">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border-[55px] border-white/5" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#A9D875]">
              Peace & Social Harmony
            </p>

            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              A peaceful and united community creates room for shared progress.
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              Sustainable community development depends on positive
              relationships, mutual respect and the ability of people to
              work together. Peace and social harmony help create an
              environment where individuals and families can pursue
              opportunities and participate in community life.
            </p>

            <p className="mt-4 leading-8 text-white/75">
              KCIDA recognises peace, prosperity, freedom and happiness
              among the aspirations expressed in its constitutional mission.
              These values are important considerations in building
              supportive communities.
            </p>

            <Link
              to="/governance"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#79B94B] px-7 py-3.5 font-bold text-white transition hover:bg-[#68A53E]"
            >
              Learn About Our Governance
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/kcida-wellbeing-peace.jpg"
              alt="Community members meeting and engaging together"
              className="h-64 w-full rounded-3xl object-cover"
            />

            <img
              src="/images/kcida-wellbeing-togetherness.jpg"
              alt="Community members sharing a community experience"
              className="mt-10 h-64 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* INCLUSION AND PARTICIPATION */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="relative">
            <img
              src="/images/kcida-wellbeing-inclusion.jpg"
              alt="Community members participating in a group activity"
              className="h-[380px] w-full rounded-[30px] object-cover shadow-xl md:h-[450px]"
            />

            <div className="absolute -bottom-6 left-6 rounded-2xl bg-[#145C3D] p-5 text-white shadow-xl">
              <div className="flex items-center gap-3">
                <Users size={28} className="text-[#A9D875]" />
                <div>
                  <p className="font-bold">Everyone Matters</p>
                  <p className="text-sm text-white/75">
                    Inclusion and participation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 lg:pl-5">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Inclusion & Community Participation
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Every person has a role to play in building a stronger
              community.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Community wellbeing is strengthened when people are respected,
              included and encouraged to contribute. Participation creates
              opportunities for individuals and households to share their
              perspectives and take part in decisions and initiatives
              that affect their lives.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We recognise that stronger communities require cooperation,
              respect for individual dignity and a shared commitment to
              collective progress.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#F3F8F1] p-5">
                <Scale className="mb-3 text-[#438B42]" size={27} />
                <h3 className="font-bold">Dignity & Respect</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Recognising the value and dignity of every individual.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F3F8F1] p-5">
                <Handshake className="mb-3 text-[#438B42]" size={27} />
                <h3 className="font-bold">Shared Responsibility</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Encouraging cooperation and community ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE APPROACH WELLBEING */}
      <section className="bg-[#F3F8F1] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Approach
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              Putting People at the Centre of Community Development
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We recognise that meaningful community wellbeing requires
              listening, participation, awareness, positive relationships
              and long-term commitment.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {wellbeingApproach.map((step) => {
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

      {/* GUIDING PRINCIPLES */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Guiding Principles
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              The Values Behind Our Community Wellbeing Commitment
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our approach is guided by the belief that community development
              should improve people's lives while respecting their dignity,
              encouraging participation and promoting shared responsibility.
            </p>

            <div className="mt-8 space-y-5">
              {wellbeingPrinciples.map((principle, index) => (
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
              src="/images/kcida-wellbeing-principles.jpg"
              alt="Community members working together"
              className="h-[360px] w-full object-cover md:h-[440px]"
            />
          </div>
        </div>
      </section>

      {/* CONSTITUTIONAL MISSION */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-5xl rounded-[30px] bg-[#EAF4E4] px-7 py-12 text-center md:px-14">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#438B42] shadow-sm">
            <Target size={31} />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
            Our Mission
          </p>

          <h2 className="mt-5 text-xl font-extrabold leading-relaxed text-[#18352A] md:text-2xl">
            "To facilitate the people of Kisonsomya Village, Kabwoya
            Sub-county and Kikuube District in general to create opportunities
            for themselves through education centres, economic transformation,
            peace, prosperity, health, freedom and happiness."
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
            <Smile size={32} />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
            Together for a Better Community
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
            A stronger community begins with the wellbeing of its people.
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Join KCIDA in promoting a peaceful, inclusive and supportive
            community where individuals and families have opportunities
            to thrive.
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
