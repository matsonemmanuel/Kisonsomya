
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  GraduationCap,
  Lightbulb,
  BriefcaseBusiness,

  Handshake,
  TrendingUp,
  HeartHandshake,
  Megaphone,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  
  Star,
} from "lucide-react";

const empowermentAreas = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Education & Personal Development",
    description:
      "Recognising education, knowledge and continuous learning as important foundations for young people to discover their potential and pursue meaningful opportunities.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Skills Development",
    description:
      "Encouraging the development of practical knowledge, abilities and competencies that can prepare young people to respond to changing opportunities.",
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "Entrepreneurship & Economic Opportunities",
    description:
      "Promoting an entrepreneurial mindset and recognising the role of productive activities in helping young people work towards economic independence.",
  },
  {
    number: "04",
    icon: Users,
    title: "Leadership & Participation",
    description:
      "Encouraging young people to participate in community activities, contribute ideas and take part in decisions that affect their communities.",
  },
  {
    number: "05",
    icon: Handshake,
    title: "Mentorship & Collaboration",
    description:
      "Recognising the value of positive relationships, knowledge sharing and collaboration in supporting young people's growth and development.",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Innovation & Personal Growth",
    description:
      "Encouraging creativity, initiative and problem-solving as young people identify opportunities and contribute to positive change.",
  },
];

const youthPrinciples = [
  "Young people should have opportunities to participate in community development.",
  "Education and skills are important foundations for personal growth.",
  "Youth leadership should encourage responsibility and positive contribution.",
  "Young people have ideas, abilities and knowledge that deserve recognition.",
  "Economic opportunities can strengthen youth independence.",
  "Collaboration helps create a supportive environment for development.",
];

const empowermentSteps = [
  {
    number: "01",
    title: "Recognise Potential",
    description:
      "Recognise the talents, interests, experiences and aspirations that young people bring to their communities.",
    icon: Star,
  },
  {
    number: "02",
    title: "Create Learning Opportunities",
    description:
      "Emphasise education, knowledge sharing and skills development as foundations for personal growth.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Encourage Participation",
    description:
      "Promote meaningful youth participation in community initiatives, discussions and development activities.",
    icon: Users,
  },
  {
    number: "04",
    title: "Support Initiative",
    description:
      "Encourage creativity, leadership, entrepreneurship and responsible action among young people.",
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "Contribute to Community Progress",
    description:
      "Recognise young people as important contributors to stronger households and sustainable communities.",
    icon: TrendingUp,
  },
];

export default function YouthEmpowerment() {
  return (
    <main className="overflow-hidden bg-white text-[#18352A]">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden md:min-h-[590px]">
        <img
          src="/images/kcida-youth-hero.jpg"
          alt="Young people participating in community development"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082D20]/95 via-[#0B3828]/80 to-[#0B3828]/25" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <Users size={17} className="text-[#A9D875]" />
              What We Do
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Youth
              <span className="block text-[#A9D875]">
                Empowerment
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              We believe young people are essential to the future of every
              community. By recognising their potential and promoting
              opportunities for learning, leadership, skills development and
              participation, we seek to contribute to a generation that can
              shape positive change.
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
                to="/get-involved"
                className="inline-flex items-center gap-3 rounded-full border border-white/60 px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-[#18352A]"
              >
                Get Involved
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
              src="/images/kcida-youth-community.jpg"
              alt="Young people working together"
              className="h-[380px] w-full rounded-[28px] object-cover shadow-xl md:h-[470px]"
            />

            <div className="absolute -bottom-7 right-5 max-w-[260px] rounded-2xl bg-[#145C3D] p-6 text-white shadow-xl md:right-[-20px]">
              <Users size={32} className="mb-3 text-[#A9D875]" />
              <p className="text-xl font-bold">
                Young People, Stronger Communities
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Recognising youth potential as an important resource for
                community development.
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pl-5">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Investing in Young People
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Empowering young people to become active contributors to
              community progress.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              At Kisonsomya Community Initiative for Development Association
              (KCIDA), we recognise young people as an important part of
              community development. Their energy, creativity, ideas and
              abilities can contribute to meaningful social and economic
              progress.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We believe youth empowerment involves more than providing
              opportunities. It also means encouraging responsibility,
              participation, knowledge, leadership and the confidence to
              contribute to society.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our approach connects youth development with the association's
              wider commitment to education, economic transformation,
              community wellbeing and sustainable development.
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

      {/* EMPOWERMENT AREAS */}
      <section className="bg-[#F3F8F1] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Youth Development Priorities
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              Creating Opportunities for Young People to Thrive
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Youth empowerment is multidimensional. It involves creating
              opportunities for young people to learn, develop skills,
              participate in society and contribute to community development.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {empowermentAreas.map((area) => {
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

      {/* LEADERSHIP AND PARTICIPATION */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Youth Leadership & Participation
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Young people should have a voice in shaping their communities.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Young people are not simply recipients of development. They
              have ideas, perspectives and abilities that can contribute to
              identifying challenges and developing community solutions.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We recognise the importance of creating an environment where
              young people can express their ideas, develop leadership
              abilities, collaborate with others and participate in community
              initiatives.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Encouraging active participation in community affairs.",
                "Promoting responsibility and positive leadership.",
                "Recognising youth ideas and contributions.",
                "Supporting collaboration across generations.",
                "Encouraging young people to take initiative.",
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
              to="/governance"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#247344] transition hover:gap-4"
            >
              Learn About Our Governance
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <img
              src="/images/kcida-youth-leadership.jpg"
              alt="Youth leadership and community participation"
              className="h-[380px] w-full rounded-[30px] object-cover shadow-xl md:h-[480px]"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/95 p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EAF4E4] text-[#438B42]">
                  <Megaphone size={28} />
                </div>

                <div>
                  <h3 className="font-bold text-[#18352A]">
                    Youth Voices Matter
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Participation creates opportunities for shared progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS AND OPPORTUNITIES */}
      <section className="relative overflow-hidden bg-[#103F2C] px-6 py-20 text-white md:px-10 lg:px-12">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border-[55px] border-white/5" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#A9D875]">
              Skills, Innovation & Opportunity
            </p>

            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              Equipping young people with knowledge and the confidence to
              pursue their ambitions.
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              The ability to learn, adapt, innovate and solve problems is
              increasingly important in today's world. Young people need
              opportunities to discover their strengths and develop skills
              that can support their personal and economic growth.
            </p>

            <p className="mt-4 leading-8 text-white/75">
              We recognise the importance of practical knowledge,
              entrepreneurship, creativity and lifelong learning in
              supporting youth development.
            </p>

            <Link
              to="/education-learning"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#79B94B] px-7 py-3.5 font-bold text-white transition hover:bg-[#68A53E]"
            >
              Explore Education & Learning
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/kcida-youth-skills.jpg"
              alt="Young people learning practical skills"
              className="h-64 w-full rounded-3xl object-cover"
            />

            <img
              src="/images/kcida-youth-innovation.jpg"
              alt="Young people collaborating and sharing ideas"
              className="mt-10 h-64 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW WE APPROACH YOUTH EMPOWERMENT */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Approach
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              From Potential to Positive Community Contribution
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We recognise youth development as a process that connects
              personal growth, learning, participation and opportunities
              to contribute to society.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {empowermentSteps.map((step) => {
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

      {/* YOUTH AND COMMUNITY DEVELOPMENT */}
      <section className="bg-[#F3F8F1] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[30px]">
            <img
              src="/images/kcida-youth-community-development.jpg"
              alt="Young people contributing to community development"
              className="h-[360px] w-full object-cover md:h-[440px]"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Youth & Community Progress
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              Building a future where young people contribute to sustainable
              communities.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Youth empowerment is closely connected to the wider development
              of society. When young people have opportunities to learn,
              develop skills, participate and contribute, communities gain
              from their ideas, energy and initiative.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              KCIDA recognises that youth development should connect with
              education, sustainable livelihoods, community wellbeing and
              environmental responsibility.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5">
                <ShieldCheck className="mb-3 text-[#438B42]" size={27} />
                <h3 className="font-bold">Responsibility</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Encouraging positive contribution and accountability.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <HeartHandshake className="mb-3 text-[#438B42]" size={27} />
                <h3 className="font-bold">Collaboration</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Supporting cooperation and community participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Guiding Beliefs
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              The Principles Behind Our Youth Empowerment Commitment
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our approach to youth empowerment recognises the value of
              opportunity, participation, responsibility and inclusion.
            </p>

            <div className="mt-8 space-y-5">
              {youthPrinciples.map((principle, index) => (
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
              src="/images/kcida-youth-principles.jpg"
              alt="Youth participation and collaboration"
              className="h-[360px] w-full object-cover md:h-[440px]"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EAF4E4] px-6 py-20 text-center md:px-10">
        <div className="mx-auto max-w-3xl">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#438B42] shadow-sm">
            <Users size={32} />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
            The Future Starts With Participation
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
            Young people are not just the future. They are part of today's
            community progress.
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Join KCIDA in recognising youth potential and promoting
            opportunities for learning, leadership and sustainable development.
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
