
import { Link } from "react-router-dom";
import {
  Heart,
  MessageCircle,
  HandHeart,
  Users,
  GraduationCap,
  Sprout,
  ArrowRight,
  ShieldCheck,
  
} from "lucide-react";

const WHATSAPP_NUMBER = "256784871700";

const donationMessage =
  "Hello KCIDA, I am interested in supporting your community development work. Kindly share the available donation options and payment details.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  donationMessage
)}`;

const supportAreas = [
  {
    icon: GraduationCap,
    title: "Education & Learning",
    description:
      "Support educational opportunities, literacy and community learning initiatives.",
  },
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    description:
      "Contribute towards agricultural development and improved community livelihoods.",
  },
  {
    icon: Users,
    title: "Community Development",
    description:
      "Help strengthen community participation and local development priorities.",
  },
  {
    icon: HandHeart,
    title: "Community Wellbeing",
    description:
      "Support initiatives that promote health, peace and a stronger community.",
  },
];

export default function Donate() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* HERO */}
      <section className="relative flex min-h-[580px] items-center overflow-hidden bg-[#073d2c] md:min-h-[650px]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/kcida-donate-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#052e22]/95 via-[#075438]/85 to-[#073d2c]/45" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <Heart size={18} className="text-[#a5df68]" />
              Support Our Work
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Your Generosity.
              <span className="mt-2 block text-[#a6df69]">
                Our Shared Future.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Your contribution can help support community development
              through education, sustainable agriculture, economic
              transformation and community participation.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#1da851]"
              >
                <MessageCircle size={21} />
                Donate via WhatsApp
                <ArrowRight size={18} />
              </a>

              <a
                href="#why-support"
                className="inline-flex items-center gap-3 rounded-full border border-white/50 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#075438]"
              >
                Learn More
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="why-support" className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Make a Contribution
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#103c2c] sm:text-4xl">
              Be Part of Building a Stronger Community
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Kisonsomya Community Initiative for Development Association
              (KCIDA) believes that sustainable community development
              requires shared responsibility and collective effort.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Contributions from individuals, organisations and
              well-wishers can help support identified community priorities
              through financial resources, materials, expertise and
              knowledge.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We invite you to contact us directly to discuss how you
              would like to contribute and receive the appropriate
              donation information.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#17643b]">
              <ShieldCheck size={21} />
              Discuss your contribution directly with KCIDA.
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/kcida-donate-community.jpg"
              alt="Community members working together"
              className="h-[350px] w-full rounded-3xl object-cover shadow-xl md:h-[460px]"
            />

            <div className="absolute -bottom-6 -left-3 hidden rounded-2xl bg-[#075b32] p-6 text-white shadow-xl sm:block md:-left-6">
              <Heart size={32} className="mb-2 text-[#a6df69]" />
              <p className="text-lg font-bold">Every Contribution Matters</p>
              <p className="mt-1 text-sm text-white/75">
                Supporting shared aspirations
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SUPPORT AREAS */}
      <section className="bg-[#f3f8f1] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
              Your Support Matters
            </p>

            <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
              Areas Your Contribution Can Support
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              KCIDA's development objectives provide different areas
              where appropriate contributions can make a difference.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf5e3] text-[#27743e]">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-xl font-bold text-[#103c2c]">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHATSAPP DONATION SECTION */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-5xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#075438] px-7 py-14 text-center text-white shadow-xl md:px-16 md:py-16">

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/5" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border-[40px] border-white/5" />

            <div className="relative z-10">

              <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg">
                <MessageCircle size={40} />
              </div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a6df69]">
                Simple & Direct
              </p>

              <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
                Ready to Make a Contribution?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
                Contact our designated representative directly through
                WhatsApp. We will be able to discuss your intended
                contribution and share the appropriate donation options.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-9 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#1da851]"
              >
                <MessageCircle size={22} />
                Continue to WhatsApp
                <ArrowRight size={19} />
              </a>

              <p className="mt-5 text-sm text-white/65">
                WhatsApp: +256 784 871 700
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* ACCOUNTABILITY */}
      <section className="bg-[#f3f8f1] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#27743e] shadow-sm">
            <ShieldCheck size={29} />
          </div>

          <h2 className="text-2xl font-extrabold text-[#103c2c] sm:text-3xl">
            Responsible Giving Matters
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            KCIDA recognises the importance of transparency, accountability
            and responsible resource management. Please contact the
            organisation directly to confirm official donation arrangements
            and obtain verified payment information before making a
            contribution.
          </p>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
            Thank You for Supporting Community Development.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Your interest, generosity and willingness to contribute
            are valuable to our shared development aspirations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/our-impact"
              className="inline-flex items-center gap-2 rounded-full border border-[#27743e] px-7 py-4 font-bold text-[#27743e] transition hover:bg-[#27743e] hover:text-white"
            >
              Explore Our Impact
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#075438] px-7 py-4 font-bold text-white transition hover:bg-[#06452e]"
            >
              Contact KCIDA
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
