
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
  Lightbulb,
  
  Library,
  HeartHandshake,
  CheckCircle2,
  Target,
  BookMarked,
  Sprout,
} from "lucide-react";

const learningAreas = [
  {
    icon: BookOpen,
    title: "Literacy & Foundational Learning",
    description:
      "Promoting the importance of reading, writing and essential learning skills as foundations for personal development and participation in society.",
  },
  {
    icon: GraduationCap,
    title: "Access to Education",
    description:
      "Recognising education as an important opportunity for children, young people and adults to expand their knowledge and improve their future prospects.",
  },
  {
    icon: Lightbulb,
    title: "Practical Knowledge & Skills",
    description:
      "Encouraging the acquisition of useful knowledge and practical skills that can help individuals respond to everyday challenges and opportunities.",
  },
  {
    icon: Users,
    title: "Community Learning",
    description:
      "Valuing shared knowledge, participation and learning opportunities that bring community members together.",
  },
  {
    icon: Library,
    title: "Lifelong Learning",
    description:
      "Supporting the understanding that learning does not end in the classroom but continues throughout life.",
  },
  {
    icon: HeartHandshake,
    title: "Inclusive Learning Opportunities",
    description:
      "Promoting an approach to education that recognises the importance of participation and opportunities for different members of the community.",
  },
];

const learningPrinciples = [
  "Education is a foundation for sustainable community development.",
  "Literacy empowers people to access information and make informed decisions.",
  "Learning should create opportunities for personal and social growth.",
  "Communities have valuable knowledge and experiences to share.",
  "Education should be inclusive and responsive to community needs.",
];

export default function EducationLearning() {
  return (
    <main className="overflow-hidden bg-white text-[#18352A]">

      {/* HERO */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden md:min-h-[590px]">
        <img
          src="/images/kcida-education-hero.jpg"
          alt="Education and community learning"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082D20]/95 via-[#0B3828]/80 to-[#0B3828]/25" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <BookOpen size={17} className="text-[#A9D875]" />
              What We Do
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Education &
              <span className="block text-[#A9D875]">
                Learning
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              We believe education is one of the foundations of a
              well-sustained community. Through a commitment to learning,
              literacy and knowledge sharing, we seek to promote opportunities
              that contribute to individual growth and community development.
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
              src="/images/kcida-education-community.jpg"
              alt="Community education and learning"
              className="h-[380px] w-full rounded-[28px] object-cover shadow-xl md:h-[470px]"
            />

            <div className="absolute -bottom-7 right-5 max-w-[260px] rounded-2xl bg-[#145C3D] p-6 text-white shadow-xl md:right-[-20px]">
              <GraduationCap size={32} className="mb-3 text-[#A9D875]" />
              <p className="text-xl font-bold">Learning Creates Opportunity</p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Knowledge and education can open pathways to a stronger future.
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pl-5">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Commitment to Education
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Building opportunities through knowledge and learning.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              At Kisonsomya Community Initiative for Development Association
              (KCIDA), education is recognised as an essential driver of
              personal growth, economic transformation and sustainable
              community development.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We believe that individuals and communities are better
              positioned to identify opportunities, make informed decisions
              and participate in development when they have access to
              knowledge and learning opportunities.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our commitment reflects the association's objectives of
              promoting education, literacy and opportunities for community
              development.
            </p>

            <Link
              to="/our-story"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#247344] transition hover:gap-4"
            >
              Learn About KCIDA
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* LEARNING AREAS */}
      <section className="bg-[#F3F8F1] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Education Priorities
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              Creating a Culture of Learning
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Education goes beyond formal schooling. Our commitment
              recognises different forms of learning that can strengthen
              individuals, households and the wider community.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {learningAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="group rounded-3xl border border-[#E4EDE1] bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF4E4] text-[#438B42] transition group-hover:bg-[#438B42] group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <span className="text-3xl font-extrabold text-[#E0EBDD]">
                      0{index + 1}
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

      {/* WHY EDUCATION MATTERS */}
      <section className="px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Why Education Matters
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
              Education is more than acquiring knowledge. It is about
              unlocking potential.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              A community's development is strengthened when people have
              opportunities to learn, understand their environment and
              participate in decisions that affect their lives.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Education and literacy can contribute to improved communication,
              informed choices, practical problem-solving and greater
              participation in social and economic activities.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Strengthening knowledge and literacy.",
                "Encouraging informed decision-making.",
                "Supporting personal development and confidence.",
                "Promoting participation in community development.",
                "Creating pathways towards economic opportunities.",
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
              src="/images/kcida-education-learning.jpg"
              alt="People participating in a learning activity"
              className="h-[380px] w-full rounded-[30px] object-cover shadow-xl md:h-[480px]"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/95 p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EAF4E4] text-[#438B42]">
                  <BookMarked size={28} />
                </div>

                <div>
                  <h3 className="font-bold text-[#18352A]">
                    Learning for Life
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Knowledge remains valuable at every stage of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION AND COMMUNITY DEVELOPMENT */}
      <section className="relative overflow-hidden bg-[#103F2C] px-6 py-20 text-white md:px-10 lg:px-12">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border-[55px] border-white/5" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#A9D875]">
              Learning Beyond the Classroom
            </p>

            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              A knowledgeable community is better equipped to shape its future.
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              Learning takes place in many environments. Families,
              community groups, institutions and individuals all have a role
              in sharing knowledge and creating opportunities for growth.
            </p>

            <p className="mt-4 leading-8 text-white/75">
              We value the connection between education and other areas of
              community development, including sustainable agriculture,
              economic empowerment, health and environmental conservation.
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
              src="/images/kcida-education-community-learning.jpg"
              alt="Community learning"
              className="h-64 w-full rounded-3xl object-cover"
            />

            <img
              src="/images/kcida-education-skills.jpg"
              alt="Practical learning and skills development"
              className="mt-10 h-64 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section className="bg-[#F5F8F3] px-6 py-20 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[30px]">
            <img
              src="/images/kcida-education-principles.jpg"
              alt="Education and community development"
              className="h-[360px] w-full object-cover md:h-[440px]"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
              Our Guiding Beliefs
            </p>

            <h2 className="text-3xl font-extrabold text-[#18352A] md:text-4xl">
              The Principles Behind Our Education Commitment
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our commitment to education is guided by the belief that
              knowledge, participation and opportunity are essential
              foundations for sustainable development.
            </p>

            <div className="mt-8 space-y-5">
              {learningPrinciples.map((principle, index) => (
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
        </div>
      </section>

      {/* VISION STRIP */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-5xl rounded-[30px] bg-[#EAF4E4] px-7 py-12 text-center md:px-14">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#438B42] shadow-sm">
            <Target size={31} />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
            Connected to Our Vision
          </p>

          <h2 className="mt-5 text-2xl font-extrabold leading-relaxed text-[#18352A] md:text-3xl">
            "A well-sustained community through education, modified
            agriculture and production."
          </h2>

          <p className="mt-5 text-sm font-semibold text-[#63846D]">
            KCIDA Constitutional Vision
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-white px-6 py-20 text-center md:px-10">
        <div className="mx-auto max-w-3xl">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF4E4] text-[#438B42]">
            <Sprout size={32} />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#69A83E]">
            Learning Builds the Future
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#18352A] md:text-4xl">
            Together, we can create more opportunities through education.
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Be part of a community that values knowledge, learning and
            sustainable development.
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
