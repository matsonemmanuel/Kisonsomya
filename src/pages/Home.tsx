
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  Leaf,
  Users,
  HeartPulse,
  Sprout,
  Heart,
  BookOpen,
  HandHeart,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  Quote,
  Globe2,
  Mail,
  CalendarDays,
} from "lucide-react";


const slides = [
  {
    image: "/Images/slider1.jpg",
    tag: "Education • Agriculture • Community Development",
    title: "Working Together for a",
    highlight: "Sustained Community",
    description:
      "KCIDA works towards a well-sustained community through education, modified agriculture and production in Kisonsomya, Kabwoya Sub-county and Kikuube District.",
  },
  {
    image: "/Images/slider2.jpg",
    tag: "Agriculture • Production • Economic Transformation",
    title: "Promoting Education and",
    highlight: "Sustainable Development",
    description:
      "The association seeks to create opportunities through education centres, economic transformation and sustainable agricultural production.",
  },
  {
    image: "/Images/slider4.jpg",
    tag: "Health • Environment • Community Wellbeing",
    title: "Building a Healthier and",
    highlight: "Sustainable Community",
    description:
      "KCIDA promotes community wellbeing through health, environmental conservation, peace, prosperity, freedom and happiness.",
  },
];


const focusAreas = [
  {
    icon: GraduationCap,
    title: "Education & Learning",
    description: "Promoting education, literacy and learning opportunities within the community.",
  },
  {
    icon: Leaf,
    title: "Sustainable Development",
    description: "Encouraging modified agriculture, production and economic transformation.",
  },
  {
    icon: Users,
    title: "Economic Empowerment",
    description: "Promoting poverty reduction, economic transformation and sustainable livelihoods.",
  },
  {
    icon: HeartPulse,
    title: "Community Wellbeing",
    description: "Promoting health, peace, prosperity and community wellbeing.",
  },
  {
    icon: Sprout,
    title: "Environment & Resilience",
    description: "Encouraging environmental conservation and sustainable use of resources.",
  },
];

const impactStats = [
  { icon: CalendarDays, number: "2013", label: "Year Established" },
  { icon: Users, number: "Kisonsomya", label: "Home Community" },
  { icon: Users, number: "Kabwoya", label: "Sub-county" },
  { icon: Users, number: "Kikuube", label: "District" },
  { icon: Heart, number: "Uganda", label: "Country" },
];


const programs = [
  {
    image: "/Images/education.jpg",
    category: "Education",
    title: "Education & Learning",
    description:
      "Promoting education centres, literacy and learning as pathways to community opportunity and development.",
    link: "/what-we-do#education",
  },
  {
    image: "/Images/liveli.jpg",
    category: "Livelihoods",
    title: "Sustainable Development",
    description:
      "Encouraging modified agriculture, production and economic transformation in the community.",
    link: "/what-we-do#livelihoods",
  },
  {
    image: "/Images/comunity.jpg",
    category: "Community",
    title: "Community Development",
    description:
      "Encouraging community participation and collective action in identifying and addressing local development needs.",
    link: "/what-we-do#youth",
  },
];



const news = [
  {
    image: "/Images/slider4.jpg",
    category: "Education",
    date: "Association Background",
    title: "Education and opportunity in the community",
    description:
      "Education is one of the pathways identified in the association’s constitution for creating opportunities within the community.",
  },
  {
    image: "/Images/agric.jpg",
    category: "Livelihoods",
    date: "Constitution & Objectives",
    title: "Agriculture, production and economic transformation",
    description:
      "The association identifies modified agriculture and production as important elements of its vision for a well-sustained community.",
  },
  {
    image: "/Images/comunity1.jpg",
    category: "Community",
    date: "Governance & Accountability",
    title: "Community participation and collective development",
    description:
      "The association’s constitution provides for member participation and collective decision-making in its governance.",
  },
];


function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () =>
    setActiveSlide((current) => (current + 1) % slides.length);

  const previousSlide = () =>
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative h-[560px] min-h-[500px] w-full">

        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(5,25,25,0.88) 0%, rgba(5,25,25,0.60) 45%, rgba(5,25,25,0.05) 100%), url("${currentSlide.image}")`,
          }}
        />

        <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-6 sm:px-10 lg:px-16">

          <div className="max-w-[600px] text-white">

            <span className="inline-block rounded-full bg-[#A8E68A] px-4 py-1.5 text-xs font-semibold text-[#103E20] sm:text-sm">
              {currentSlide.tag}
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[52px]">
              {currentSlide.title}
              <span className="mt-1 block text-[#8EEA58]">
                {currentSlide.highlight}
              </span>
            </h1>

            <p className="mt-5 max-w-[490px] text-base leading-7 text-white/95 sm:text-lg">
              {currentSlide.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-4">

              <Link
                to="/what-we-do"
                className="flex items-center gap-2 rounded-xl bg-[#82E64E] px-6 py-3 text-sm font-bold text-[#103E20] transition hover:bg-[#A0F477]"
              >
                Our Work
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/about"
                className="flex items-center gap-2 rounded-xl border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#102744]"
              >
                <PlayCircle size={19} />
                Watch Our Story
              </Link>

            </div>

          </div>
        </div>

        {/* SLIDER ARROWS */}
        <button
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#102744] shadow-lg transition hover:bg-[#A8E68A]"
        >
          <ChevronLeft size={25} />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#102744] shadow-lg transition hover:bg-[#A8E68A]"
        >
          <ChevronRight size={25} />
        </button>

        {/* SLIDE INDICATORS */}
        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 rounded-full transition-all ${
                activeSlide === index
                  ? "w-8 bg-[#8EEA58]"
                  : "w-3 bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="relative z-10 mx-auto -mt-10 max-w-[1320px] px-5 sm:px-8">

        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-5">

          {focusAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className={`flex flex-col items-center px-5 py-7 text-center transition hover:bg-green-50 ${
                  index !== focusAreas.length - 1
                    ? "lg:border-r lg:border-gray-100"
                    : ""
                }`}
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4F5C6] text-[#086329]">
                  <Icon size={26} fill="currentColor" />
                </div>

                <h3 className="text-base font-bold text-[#102744]">
                  {area.title}
                </h3>

                <p className="mt-2 max-w-[190px] text-sm leading-6 text-[#102744]">
                  {area.description}
                </p>
              </div>
            );
          })}

        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="mx-auto mt-7 max-w-[1320px] px-5 sm:px-8">

        <div className="grid grid-cols-2 gap-y-8 rounded-2xl bg-gradient-to-r from-[#075525] to-[#08712F] px-6 py-8 text-white sm:grid-cols-3 lg:grid-cols-6 lg:items-center lg:gap-3 lg:px-10">

          <div className="flex items-center justify-center border-b border-white/30 pb-5 text-center sm:col-span-3 lg:col-span-1 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-5">
            <h2 className="text-2xl font-extrabold leading-tight">
              Our Organisation
              <br />
              at a Glance
            </h2>
          </div>

          {impactStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
              >
                <div className="flex items-center gap-2">
                  <Icon size={30} fill="currentColor" />
                  <span className="text-3xl font-extrabold">
                    {stat.number}
                  </span>
                </div>

                <p className="mt-2 text-sm text-white/95">
                  {stat.label}
                </p>
              </div>
            );
          })}

        </div>
      </section>

      {/* ABOUT US */}
      <section className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2">

        <div className="relative">
          <img
            src="/Images/about.jpg"
            alt="Community members participating in development activities"
            className="h-[390px] w-full rounded-2xl object-cover shadow-lg"
          />

          <div className="absolute -bottom-5 -right-4 rounded-xl bg-[#086329] px-7 py-5 text-white shadow-lg sm:right-5">
            <p className="text-2xl font-extrabold">Together</p>
            <p className="text-sm">Building stronger communities</p>
          </div>
        </div>

        <div className="lg:pl-5">

          <span className="rounded-full bg-[#D4F5C6] px-4 py-2 text-xs font-bold text-[#086329]">
            ABOUT US
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-[#102744]">
            Our Story
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600">
            Kisonsomya Community Initiative for Development Association (KCIDA) is a community-based association established in 2013 in Kisonsomya, Kabwoya Sub-county, Kikuube District, Uganda.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600">
            Its constitution sets out a vision of a well-sustained community through education, modified agriculture and production, and a mission focused on helping people create opportunities for themselves.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">

            <Link
              to="/about"
              className="flex items-center gap-2 rounded-full border-2 border-[#086329] px-7 py-3 text-sm font-bold text-[#086329] transition hover:bg-[#086329] hover:text-white"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/our-model"
              className="flex items-center gap-2 px-3 py-3 text-sm font-semibold text-[#102744] hover:text-[#086329]"
            >
              Our Model
              <ArrowRight size={17} />
            </Link>

          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#F7FAF6] py-20">

        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <span className="rounded-full bg-[#D4F5C6] px-4 py-2 text-xs font-bold text-[#086329]">
              OUR PROGRAMS
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#102744] sm:text-4xl">
              What We Do
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              The association’s stated objectives address education, poverty reduction, health, environmental conservation, sustainable agriculture, economic empowerment and community development.
            </p>

          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {programs.map((program) => (
              <article
                key={program.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">

                  <span className="text-xs font-bold uppercase tracking-wider text-[#16813A]">
                    {program.category}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-[#102744]">
                    {program.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {program.description}
                  </p>

                  <Link
                    to={program.link}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#086329] transition group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRight size={17} />
                  </Link>

                </div>
              </article>
            ))}

          </div>

          <div className="mt-12 text-center">
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 rounded-lg bg-[#086329] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#064D20]"
            >
              Explore All Our Programs
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* OUR MODEL */}
      <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-[#D4F5C6] px-4 py-2 text-xs font-bold text-[#086329]">
              HOW WE WORK
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102744] sm:text-4xl">
              A Community Association Built on Participation
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              KCIDA’s constitution provides for member participation and collective decision-making through its governance structures, including the General Assembly and Executive Committee.
            </p>

            <Link
              to="/our-model"
              className="mt-7 inline-flex items-center gap-2 font-bold text-[#086329] hover:gap-3"
            >
              Discover Our Model
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="grid grid-cols-2 gap-5">

            {[
              {
                icon: Users,
                title: "Member Participation",
                description: "Providing for members to take part in association decisions.",
              },
              {
                icon: BookOpen,
                title: "Education & Literacy",
                description: "Supporting education and literacy as routes to opportunity.",
              },
              {
                icon: HandHeart,
                title: "Accountability",
                description: "Providing for financial oversight, record keeping and reporting.",
              },
              {
                icon: Sprout,
                title: "Sustainable Development",
                description: "Pursuing education, agriculture and production for a well-sustained community.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-green-100 bg-[#F7FAF6] p-6 transition hover:border-green-300 hover:shadow-md"
                >
                  <Icon size={30} className="text-[#086329]" />

                  <h3 className="mt-4 font-bold text-[#102744]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* IMPACT AND TESTIMONIAL */}
      <section className="bg-[#F7FAF6] py-20">

        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">

          <div className="mb-12 text-center">
            <span className="rounded-full bg-[#D4F5C6] px-4 py-2 text-xs font-bold text-[#086329]">
              MAKING A DIFFERENCE
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#102744] sm:text-4xl">
              Our Impact in Communities
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              The association’s constitution outlines objectives relating to education, poverty reduction, health, environmental conservation, sustainable agriculture, economic empowerment and community development.
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <img
              src="/Images/impact.jpg"
              alt="Community members working together"
              className="h-[350px] w-full rounded-2xl object-cover shadow-lg"
            />

            <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-10">

              <Quote size={38} className="text-[#7BCB52]" />

              <h3 className="mt-5 text-2xl font-bold text-[#102744]">
                Working Towards a Well-Sustained Community
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                KCIDA’s vision is a well-sustained community through education, modified agriculture and production. Its mission is to facilitate people in Kisonsomya, Kabwoya and Kikuube District to create opportunities for themselves.
              </p>

              <Link
                to="/our-impact"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#086329] hover:gap-3"
              >
                Explore Our Impact
                <ArrowRight size={18} />
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20">

        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <span className="rounded-full bg-[#D4F5C6] px-4 py-2 text-xs font-bold text-[#086329]">
              WORKING TOGETHER
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#102744] sm:text-4xl">
              Our Partners & Collaborators
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              The association welcomes constructive collaboration that supports its documented objectives and community development priorities.
            </p>

          </div>

          {/* Replace these placeholders with verified partner logos */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">

            {["Partner One", "Partner Two", "Partner Three", "Partner Four", "Partner Five"].map(
              (partner) => (
                <div
                  key={partner}
                  className="flex min-h-28 items-center justify-center rounded-xl border border-gray-100 bg-white px-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div>
                    <Globe2
                      size={27}
                      className="mx-auto text-[#086329]"
                    />
                    <p className="mt-2 text-sm font-semibold text-gray-500">
                      {partner}
                    </p>
                    <p className="text-[10px] text-gray-400">
                      Logo placeholder
                    </p>
                  </div>
                </div>
              )
            )}

          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            Partner names and logos will be added once officially confirmed.
          </p>

        </div>
      </section>

      {/* NEWS AND STORIES */}
      <section className="bg-[#F7FAF6] py-20">

        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">

          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <span className="rounded-full bg-[#D4F5C6] px-4 py-2 text-xs font-bold text-[#086329]">
                DOCUMENTS & COMMUNITY INFORMATION
              </span>

              <h2 className="mt-5 text-3xl font-extrabold text-[#102744] sm:text-4xl">
                Community Information
              </h2>

              <p className="mt-3 text-gray-600">
                Explore the association’s background, governance records and development priorities.
              </p>
            </div>

            <Link
              to="/news"
              className="inline-flex items-center gap-2 font-bold text-[#086329] hover:gap-3"
            >
              View All Stories
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {news.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">

                  <div className="flex items-center gap-3 text-xs font-semibold text-[#16813A]">
                    <span>{item.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500">{item.date}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-snug text-[#102744]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <Link
                    to="/news"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#086329]"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* GET INVOLVED CTA */}
      <section className="relative overflow-hidden bg-[#086329] py-20">

        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />

        <div className="relative mx-auto max-w-[1100px] px-5 text-center text-white">

          <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wider">
            Support Community Development
          </span>

          <h2 className="mt-6 text-3xl font-extrabold sm:text-5xl">
            Join Us in Supporting Community Development
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/90">
            Your constructive engagement and collaboration can support the association’s objectives in education, agriculture, health, environmental conservation and community development.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <Link
              to="/get-involved"
              className="rounded-lg bg-[#8EEA58] px-7 py-3.5 text-sm font-bold text-[#103E20] transition hover:bg-white"
            >
              Get Involved
            </Link>

            <Link
              to="/donate"
              className="flex items-center gap-2 rounded-lg border border-white px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#086329]"
            >
              <Heart size={18} />
              Support Our Work
            </Link>

          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8">

        <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-[#F1F8ED] p-8 sm:flex-row sm:p-12">

          <div className="max-w-lg">
            <div className="flex items-center gap-2 text-[#086329]">
              <Mail size={22} />
              <span className="text-sm font-bold uppercase tracking-wider">
                Stay Connected
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-extrabold text-[#102744]">
              Follow Our Community Journey
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Keep informed about the association’s background, objectives and community development priorities.
            </p>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              alert("Newsletter subscription will be connected to the backend.");
            }}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#086329]"
            />

            <button
              type="submit"
              className="rounded-lg bg-[#086329] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#064D20]"
            >
              Subscribe
            </button>
          </form>

        </div>
      </section>

    </main>
  );
}

export default Home;
