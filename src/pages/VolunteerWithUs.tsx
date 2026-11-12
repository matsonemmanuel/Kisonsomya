
import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartHandshake,
  GraduationCap,
  Sprout,
  Users,
  HeartPulse,
  Leaf,
  Lightbulb,
  HandHeart,
  CheckCircle2,
  Clock,
  MapPin,
} from "lucide-react";

const volunteerAreas = [
  {
    icon: GraduationCap,
    title: "Education & Learning",
    description:
      "Contribute your knowledge and skills towards education, literacy, learning support and community knowledge-sharing.",
  },
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    description:
      "Share agricultural knowledge and practical skills that can support sustainable farming and improved livelihoods.",
  },
  {
    icon: Users,
    title: "Youth & Community Development",
    description:
      "Support initiatives that encourage young people and community members to participate in local development.",
  },
  {
    icon: HeartPulse,
    title: "Community Wellbeing",
    description:
      "Contribute knowledge, experience and ideas that promote healthier, more informed and connected communities.",
  },
  {
    icon: Leaf,
    title: "Environment & Conservation",
    description:
      "Share ideas and skills that encourage environmental awareness, conservation and responsible use of natural resources.",
  },
  {
    icon: Lightbulb,
    title: "Professional & Technical Skills",
    description:
      "Offer professional expertise in areas such as administration, communication, technology, finance and organisational development.",
  },
];

const volunteerQualities = [
  "A willingness to contribute positively to community development.",
  "Respect for community members, local knowledge and cultural values.",
  "A responsible, collaborative and respectful attitude.",
  "A commitment to integrity, accountability and teamwork.",
];

export default function VolunteerWithUs() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[590px] items-center overflow-hidden bg-[#073d2c] md:min-h-[680px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/kcida-volunteer-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#052e22]/95 via-[#075438]/85 to-[#073d2c]/45" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <HeartHandshake size={18} className="text-[#a5df68]" />
              Get Involved
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Volunteer With Us.
              <span className="mt-2 block text-[#a6df69]">
                Be Part of the Change.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Your time, knowledge and skills can contribute to a stronger,
              more empowered community. Join KCIDA in supporting community
              development through education, sustainable agriculture,
              economic transformation and participation.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#75bd3f] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#65aa34]"
              >
                Express Your Interest
                <ArrowRight size={19} />
              </Link>

              <a
                href="#volunteer-areas"
                className="inline-flex items-center gap-3 rounded-full border border-white/50 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#075438]"
              >
                Explore Opportunities
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
              src="/images/kcida-volunteer-community.jpg"
              alt="Community members participating in community development"
              className="h-[360px] w-full rounded-3xl object-cover shadow-xl md:h-[470px]"
            />

            <div className="absolute -bottom-6 -right-3 hidden rounded-2xl bg-[#075b32] p-6 text-white shadow-xl sm:block md:-right-6">
              <HeartHandshake size={35} className="mb-2 text-[#a6df69]" />
              <p className="text-lg font-bold">Together We Grow</p>
              <p className="mt-1 text-sm text-white/75">
                Through shared commitment
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Make a Difference
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#103c2c] sm:text-4xl">
              Your Contribution Can Help Strengthen Our Community
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              At Kisonsomya Community Initiative for Development Association
              (KCIDA), we recognise that meaningful community development
              requires shared responsibility, knowledge and commitment.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Volunteering is an opportunity to share what you know, learn
              from others and contribute to a common goal. Whether you have
              professional experience, practical skills or simply a
              willingness to serve, your contribution can be valuable.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We welcome expressions of interest from people who believe in
              community participation and sustainable development.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#17643b]">
              <CheckCircle2 size={20} />
              Community participation is central to our approach.
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER AREAS */}
      <section
        id="volunteer-areas"
        className="bg-[#f3f8f1] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Where You Can Contribute
            </p>

            <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
              Share Your Skills. Support Our Priorities.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              KCIDA's community-development priorities provide different
              areas in which volunteers may be able to contribute their
              knowledge, experience and practical skills.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {volunteerAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="group rounded-2xl border border-green-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf5e3] text-[#27743e] transition group-hover:bg-[#27743e] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <span className="text-sm font-bold text-[#80b94e]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-[#103c2c]">
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
            These are areas of potential contribution, not a list of confirmed
            vacancies. Specific volunteer opportunities depend on KCIDA's
            needs and arrangements.
          </p>
        </div>
      </section>

      {/* WHO CAN VOLUNTEER */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Be Part of Our Community
            </p>

            <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
              Who Can Volunteer?
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We welcome expressions of interest from individuals who are
              passionate about community development and willing to
              contribute responsibly.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Volunteers may bring professional qualifications, technical
              expertise, practical experience or a willingness to learn and
              work alongside others.
            </p>

            <div className="mt-8 space-y-4">
              {volunteerQualities.map((quality) => (
                <div key={quality} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-[#6eae3c]"
                  />
                  <p className="leading-7 text-slate-600">{quality}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#0b4c34] p-8 text-white md:p-12">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border-[30px] border-white/5" />
            <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full border-[30px] border-white/5" />

            <div className="relative z-10">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#a6df69]">
                <HandHeart size={35} />
              </div>

              <h3 className="text-2xl font-extrabold md:text-3xl">
                Volunteerism Begins With a Willing Heart
              </h3>

              <p className="mt-5 leading-8 text-white/80">
                Community development is strengthened when people share
                responsibility, support one another and work towards common
                aspirations.
              </p>

              <div className="mt-9 space-y-5 border-t border-white/15 pt-7">
                <div className="flex items-center gap-4">
                  <Clock className="shrink-0 text-[#a6df69]" size={22} />
                  <span className="text-sm text-white/85">
                    Discuss your availability and possible contribution.
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="shrink-0 text-[#a6df69]" size={22} />
                  <span className="text-sm text-white/85">
                    Community focus: Kisonsomya, Kikuube District, Uganda.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO GET INVOLVED */}
      <section className="bg-[#f3f8f1] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Getting Started
            </p>

            <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
              How to Express Your Interest
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Interested in volunteering? Start a conversation with KCIDA
              about your skills, interests and the ways you may be able to
              contribute.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Reach Out",
                description:
                  "Contact KCIDA and introduce yourself, explaining why you are interested in volunteering.",
              },
              {
                number: "02",
                title: "Share Your Skills",
                description:
                  "Tell us about your experience, areas of interest, skills and availability.",
              },
              {
                number: "03",
                title: "Discuss Possibilities",
                description:
                  "Discuss potential areas of contribution and any appropriate next steps with KCIDA.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-white p-8 shadow-sm"
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
            <HeartHandshake size={34} />
          </div>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Ready to Make a Difference?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Your contribution matters. Get in touch with KCIDA and explore
            how your skills, time and commitment can support community
            development.
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
              to="/get-involved"
              className="inline-flex items-center rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#075438]"
            >
              Explore Other Ways to Help
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
