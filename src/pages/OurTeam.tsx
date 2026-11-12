
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  GraduationCap,
  Heart,
  Handshake,
  ChevronRight,
  Home,
  Award,
  BookOpen,
  UserRound,
  
} from "lucide-react";

/*
  Add confirmed team member information here.

  Replace the placeholder names, roles and image paths
  with actual KCIDA personnel details when available.
*/

const leadershipTeam = [
  {
    name: "Name to be added",
    role: "Executive Director",
    image: "/images/team-placeholder.jpg",
    description: "Leadership profile to be added.",
  },
  {
    name: "Name to be added",
    role: "Chairperson",
    image: "/images/team-placeholder.jpg",
    description: "Leadership profile to be added.",
  },
  {
    name: "Name to be added",
    role: "Treasurer",
    image: "/images/team-placeholder.jpg",
    description: "Leadership profile to be added.",
  },
];

/*
  Add actual trainer names, training areas and photographs
  after confirming the trainer information.
*/

const trainers = [
  {
    name: "Trainer profile to be added",
    role: "Trainer / Facilitator",
    expertise: "Training area to be confirmed",
    image: "/images/trainer-placeholder.jpg",
  },
  {
    name: "Trainer profile to be added",
    role: "Trainer / Facilitator",
    expertise: "Training area to be confirmed",
    image: "/images/trainer-placeholder.jpg",
  },
  {
    name: "Trainer profile to be added",
    role: "Trainer / Facilitator",
    expertise: "Training area to be confirmed",
    image: "/images/trainer-placeholder.jpg",
  },
];

const contributions = [
  {
    icon: Users,
    title: "Community Participation",
    description:
      "Members contribute to the association's activities, priorities and collective decision-making.",
  },
  {
    icon: BookOpen,
    title: "Learning and Knowledge",
    description:
      "Knowledge sharing and learning are important elements of community development.",
  },
  {
    icon: Handshake,
    title: "Collective Responsibility",
    description:
      "Working together helps strengthen community participation and shared ownership.",
  },
];

function ProfileCard({
  name,
  role,
  image,
  description,
}: {
  name: string;
  role: string;
  image: string;
  description: string;
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[300px] overflow-hidden bg-[#eaf4e8]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center text-[#08752e]">
          <UserRound size={65} strokeWidth={1.2} />
        </div>

        <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#08752e] shadow-sm">
          KCIDA Team
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-[#16813a]">
          {role}
        </p>

        <h3 className="mt-2 text-xl font-extrabold text-[#102448]">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function OurTeam() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[340px] items-center bg-cover bg-center md:min-h-[410px]"
        style={{
          backgroundImage: "url('/images/kcida-team-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#062d18]/90 via-[#073b20]/70 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
          <div className="max-w-2xl text-white">

            <span className="inline-flex rounded-full bg-[#a6e77d] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#123c1d]">
              About Us
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
              Meet the People
              <span className="block text-[#a6e77d]">
                Behind Our Work
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              Our people are central to our community development
              journey. Discover the leadership, trainers and
              contributors behind KCIDA.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm font-medium">
              <Link to="/" className="flex items-center gap-2 hover:text-[#a6e77d]">
                <Home size={16} />
                Home
              </Link>

              <ChevronRight size={16} />

              <Link to="/our-story" className="hover:text-[#a6e77d]">
                About Us
              </Link>

              <ChevronRight size={16} />

              <span className="text-[#a6e77d]">Our Team</span>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#e4f6df] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#17652e]">
            The People of KCIDA
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102448] md:text-4xl">
            Together, We Make
            <span className="block">Community Development Possible</span>
          </h2>

          <p className="mt-5 text-[15px] leading-8 text-slate-600">
            Behind every community development initiative are people
            who provide leadership, share knowledge, facilitate
            learning and contribute their time and experience.
            At Kisonsomya Community Initiative for Development
            Association, we recognise the importance of people
            working together towards shared development aspirations.
          </p>

        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="bg-[#f5faf3] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-[#e0f2d9] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#17652e]">
                Leadership
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-[#102448] md:text-4xl">
                Our Leadership Team
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                The people entrusted with providing organisational
                direction, coordination and oversight.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#08752e]">
              <Award size={19} />
              Organisational Leadership
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((member, index) => (
              <ProfileCard
                key={`${member.role}-${index}`}
                {...member}
              />
            ))}
          </div>

        </div>
      </section>

      {/* TRAINERS SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="inline-flex rounded-full bg-[#e4f6df] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#17652e]">
              Knowledge & Skills
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102448] md:text-4xl">
              Meet Our Trainers
              <span className="block text-[#16813a]">
                & Facilitators
              </span>
            </h2>

            <p className="mt-5 text-[15px] leading-8 text-slate-600">
              Trainers and facilitators are an important part of
              learning and skills development. This section recognises
              the individuals who share knowledge, guide learning
              experiences and support capacity development.
            </p>

            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              We will feature each trainer's profile, area of
              expertise, experience and the training activities
              they support.
            </p>

            <div className="mt-7 flex items-center gap-4 rounded-2xl bg-[#f0f8ed] p-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#08752e] text-white">
                <GraduationCap size={29} />
              </div>

              <div>
                <h3 className="font-bold text-[#102448]">
                  Knowledge Sharing
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Supporting learning and skills development.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-3 -right-3 h-32 w-32 rounded-3xl bg-[#16813a]" />

            <img
              src="/images/kcida-training.jpg"
              alt="Community training and learning activity"
              className="relative h-[320px] w-full rounded-3xl object-cover md:h-[390px]"
            />
          </div>

        </div>

        {/* TRAINER PROFILE CARDS */}
        <div className="mt-16">

          <div className="mb-9">
            <h3 className="text-2xl font-extrabold text-[#102448] md:text-3xl">
              Our Training Team
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Get to know the people who contribute to training,
              facilitation and knowledge sharing.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {trainers.map((trainer, index) => (
              <article
                key={`${trainer.name}-${index}`}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex h-[270px] items-center justify-center overflow-hidden bg-[#eaf4e8]">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <GraduationCap
                    size={65}
                    strokeWidth={1.2}
                    className="text-[#08752e]"
                  />

                  <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#08752e] shadow-sm">
                    Trainer
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#16813a]">
                    {trainer.role}
                  </p>

                  <h4 className="mt-2 text-xl font-extrabold text-[#102448]">
                    {trainer.name}
                  </h4>

                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <BookOpen size={16} className="text-[#08752e]" />
                    {trainer.expertise}
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* COMMUNITY CONTRIBUTORS */}
      <section className="bg-[#f5faf3] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#e0f2d9] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#17652e]">
              Working Together
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102448] md:text-4xl">
              Beyond Leadership
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Meaningful community development depends on the
              participation and contributions of many people.
              We recognise the value of collective responsibility.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {contributions.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-[#e7eee3] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* JOIN OUR TEAM CTA */}
      <section
        className="relative bg-cover bg-center px-6 py-16 text-center md:px-10 md:py-20"
        style={{
          backgroundImage: "url('/images/kcida-training.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#062d18]/85" />

        <div className="relative mx-auto max-w-3xl text-white">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#a6e77d] text-[#123c1d]">
            <Heart size={30} />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">
            Be Part of Our Team
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            We believe in the power of people working together.
            Whether through knowledge, skills, time or community
            participation, your contribution can make a difference.
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
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white px-7 py-3 font-bold text-white transition hover:bg-white hover:text-[#123c1d]"
            >
              Contact Us
              <Handshake size={17} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
