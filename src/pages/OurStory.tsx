
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Heart,
  Home,
  Leaf,
  MapPin,
  Users,
  Handshake,
  Sprout,
  Building2,
  ShieldCheck,
  Scale,
} from "lucide-react";

const images = {
  hero: "/images/kcida-story-hero.jpg",
  community: "/images/kcida-community.jpg",
  team: "/images/kcida-team.jpg",
  gathering: "/images/kcida-community-gathering.jpg",
};

const focusAreas = [
  {
    icon: BookOpen,
    title: "Education & Learning",
    description:
      "Promoting education, literacy and learning opportunities as foundations for individual growth and community development.",
  },
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    description:
      "Encouraging sustainable agricultural practices that contribute to improved livelihoods and community resilience.",
  },
  {
    icon: Users,
    title: "Community Participation",
    description:
      "Encouraging people to participate in identifying their priorities and developing solutions together.",
  },
];

const governanceStructures = [
  {
    icon: Users,
    title: "General Assembly",
    description:
      "The wider membership structure that provides a platform for participation and collective decision-making.",
  },
  {
    icon: Building2,
    title: "Executive Committee",
    description:
      "The leadership structure responsible for providing organisational direction and oversight.",
  },
  {
    icon: ShieldCheck,
    title: "Executive Leadership",
    description:
      "Leadership positions, including the Executive Director, Chairperson and Treasurer, support the administration and coordination of the association.",
  },
  {
    icon: Scale,
    title: "Accountability & Oversight",
    description:
      "Financial management, reporting, auditing and procurement procedures support responsible organisational management.",
  },
];

export default function OurStory() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[330px] items-center bg-cover bg-center md:min-h-[390px]"
        style={{
          backgroundImage: `url(${images.hero})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#062d18]/90 via-[#073b20]/65 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-2xl text-white">

            <span className="mb-5 inline-flex rounded-full bg-[#a6e77d] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#123c1d]">
              About Us
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Our Story, Our People,
              <span className="block text-[#a6e77d]">
                Our Community
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/95 md:text-lg">
              Discover the story of Kisonsomya Community Initiative
              for Development Association and our commitment to
              supporting community-led development.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm font-medium text-white">
              <Link
                to="/"
                className="flex items-center gap-2 transition hover:text-[#a6e77d]"
              >
                <Home size={16} />
                Home
              </Link>

              <ChevronRight size={16} />

              <span className="text-[#a6e77d]">
                Our Story
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section
        id="story"
        className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div className="relative">
            <div className="absolute -bottom-3 -left-3 h-32 w-32 rounded-3xl bg-[#16813a]" />

            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={images.community}
                alt="Community member participating in local development"
                className="h-[320px] w-full object-cover md:h-[390px]"
              />
            </div>

            <div className="absolute bottom-5 right-5 flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f5e6] text-[#08752e]">
                <Heart size={20} fill="currentColor" />
              </span>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Community First
                </p>
                <p className="text-xs text-slate-500">
                  Working together
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full bg-[#e4f6df] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#17652e]">
              Who We Are
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102448] md:text-4xl">
              About Kisonsomya
              <span className="block">
                Community Development
              </span>
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-600">
              <p>
                Kisonsomya Community Initiative for Development
                Association (KCIDA) is a community-based association
                established in 2013 in Kisonsomya, Kabwoya Sub-county,
                Kikuube District, Uganda.
              </p>

              <p>
                The association is founded on the belief that
                communities can create meaningful opportunities
                for themselves through education, economic
                transformation, sustainable agriculture and
                collective participation.
              </p>

              <p>
                Our work is guided by the aspirations and development
                priorities of the community. We recognise that
                lasting progress requires local ownership,
                cooperation and accountability.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 rounded-full bg-[#08752e] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#075d26]"
              >
                Explore Our Work
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/get-involved"
                className="inline-flex items-center gap-2 rounded-full border border-[#08752e] px-6 py-3 text-sm font-bold text-[#08752e] transition hover:bg-[#edf8ed]"
              >
                Get Involved
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* WHAT GUIDES US */}
      <section className="bg-[#f5faf3] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#e0f2d9] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#17652e]">
              What Guides Us
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102448] md:text-4xl">
              Building Progress Together
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our approach is rooted in the belief that communities
              should participate in identifying their priorities
              and creating opportunities for sustainable development.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-[#e7eee3] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f6df] text-[#08752e]">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#102448]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 h-1 w-12 rounded-full bg-[#83cf58]" />
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* OUR TEAM */}
      <section
        id="team"
        className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="inline-flex rounded-full bg-[#e4f6df] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#17652e]">
              Our People
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#102448] md:text-4xl">
              The People Behind
              <span className="block">
                Our Community Journey
              </span>
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-slate-600">
              Community development is a shared responsibility.
              KCIDA's organisational structure brings together
              leadership, members and committees who contribute
              to the association's development objectives.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              We recognise the importance of responsible leadership,
              meaningful participation and working together towards
              community priorities.
            </p>

            <Link
              to="/our-team"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#08752e] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#075d26]"
            >
              Meet Our Team
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -bottom-3 -right-3 h-32 w-32 rounded-3xl bg-[#16813a]" />

            <img
              src={images.team}
              alt="KCIDA team and community representatives"
              className="relative h-[320px] w-full rounded-3xl object-cover md:h-[390px]"
            />
          </div>

        </div>
      </section>

      {/* GOVERNANCE */}
      <section
        id="governance"
        className="bg-[#f7faf6] px-6 py-16 md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#e4f6df] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#17652e]">
              Accountability
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102448] md:text-4xl">
              Our Governance
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Strong governance helps ensure that the association
              is managed responsibly, with clear leadership
              structures, participation and accountability.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {governanceStructures.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f6df] text-[#08752e]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#102448]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-9 rounded-2xl border border-[#dcebd7] bg-white p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div>
                <h3 className="text-xl font-bold text-[#102448]">
                  Transparency and Responsibility
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                  KCIDA's documented governance framework recognises
                  financial management, reporting, auditing,
                  procurement and oversight as important
                  accountability mechanisms.
                </p>
              </div>

              <Link
                to="/governance"
                className="inline-flex shrink-0 items-center gap-2 font-bold text-[#08752e] transition hover:text-[#064e22]"
              >
                Governance Details
                <ArrowRight size={17} />
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div className="order-2 lg:order-1">
            <img
              src={images.gathering}
              alt="Community members meeting and participating in community activities"
              className="h-[320px] w-full rounded-3xl object-cover md:h-[390px]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex rounded-full bg-[#e4f6df] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#17652e]">
              Our Journey
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#102448] md:text-4xl">
              Rooted in Community,
              <span className="block">
                Focused on Development
              </span>
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-slate-600">
              Established in 2013, Kisonsomya Community Initiative
              for Development Association was formed around a
              commitment to community development and the belief
              that people can create opportunities through
              collective effort.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              The association's constitution sets out development
              objectives that include education and literacy,
              poverty reduction, health, environmental conservation,
              sustainable agriculture and economic empowerment.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              These priorities provide an important foundation
              for the association's community development
              aspirations.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-[#f0f8ed] p-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#08752e] text-white">
                <Leaf size={27} />
              </div>

              <div>
                <p className="text-2xl font-extrabold text-[#08752e]">
                  2013
                </p>
                <p className="text-sm font-medium text-slate-600">
                  Year KCIDA was established
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* COMMUNITY LOCATION STRIP */}
      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 rounded-3xl bg-[#eaf6e7] p-7 md:grid-cols-3 md:p-9">

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#08752e]">
              <MapPin size={24} />
            </div>

            <div>
              <p className="font-bold text-[#102448]">
                Kisonsomya
              </p>
              <p className="text-sm text-slate-600">
                Community of origin
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#08752e]">
              <Sprout size={24} />
            </div>

            <div>
              <p className="font-bold text-[#102448]">
                Kabwoya Sub-county
              </p>
              <p className="text-sm text-slate-600">
                Kikuube District
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#08752e]">
              <Handshake size={24} />
            </div>

            <div>
              <p className="font-bold text-[#102448]">
                Uganda
              </p>
              <p className="text-sm text-slate-600">
                Our country
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section
        className="relative bg-cover bg-center px-6 py-16 text-center md:px-10 md:py-20"
        style={{
          backgroundImage: `url(${images.gathering})`,
        }}
      >
        <div className="absolute inset-0 bg-[#062d18]/85" />

        <div className="relative mx-auto max-w-3xl text-white">

          <h2 className="text-3xl font-extrabold md:text-4xl">
            Be Part of Our Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Community development takes people working together.
            Join us in supporting opportunities for learning,
            sustainable livelihoods and stronger communities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 rounded-full bg-[#91df61] px-7 py-3 font-bold text-[#123c1d] transition hover:bg-[#a7ed7d]"
            >
              Get Involved
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-full border border-white px-7 py-3 font-bold text-white transition hover:bg-white hover:text-[#123c1d]"
            >
              Support Our Work
              <Heart size={17} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
