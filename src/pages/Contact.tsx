
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,

  Send,
  MessageCircle,
  
  Navigation,
  
  Handshake,
  HeartHandshake,
} from "lucide-react";
import type { FormEvent } from "react";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+256 784 871 700",
    description: "Speak with us about your enquiry.",
    href: "tel:+256784871700",
    action: "Call KCIDA",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@kisonsomya.org",
    description: "Send us your questions or proposals.",
    href: "mailto:info@kisonsomya.org",
    action: "Send an Email",
  },
  {
    icon: MapPin,
    title: "Our Location",
    detail: "Kisonsomya, Kikuube District",
    description: "Kabwoya Sub-county, Uganda.",
    href: "https://www.google.com/maps/search/?api=1&query=Kisonsomya%2C+Kabwoya%2C+Kikuube%2C+Uganda",
    action: "View Location",
  },
];

const enquiryTypes = [
  "General Enquiry",
  "Volunteering",
  "Partnership Opportunity",
  "Supporting Our Work",
  "Education & Learning",
  "Community Development",
  "Other",
];

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString() || "General Enquiry";
    const message = formData.get("message")?.toString().trim() || "";

    const emailSubject = encodeURIComponent(`KCIDA Website: ${subject}`);

    const emailBody = encodeURIComponent(
      `Hello KCIDA Team,

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Enquiry Type: ${subject}

Message:
${message}

Sent through the KCIDA website contact form.`
    );

    window.location.href =
      `mailto:info@kisonsomya.org?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden bg-[#073d2c] md:min-h-[590px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/kcida-contact-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#052e22]/95 via-[#075438]/85 to-[#073d2c]/50" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <MessageCircle size={18} className="text-[#a5df68]" />
              Get in Touch
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Let's Start a
              <span className="mt-2 block text-[#a6df69]">
                Conversation.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Have a question, an idea or an opportunity to collaborate?
              We would love to hear from you. Connect with KCIDA and let's
              explore how we can work together towards a stronger community.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 rounded-full bg-[#75bd3f] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#65aa34]"
              >
                Send Us a Message
                <ArrowRight size={19} />
              </a>

              <a
                href="tel:+256772345678"
                className="inline-flex items-center gap-3 rounded-full border border-white/50 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#075438]"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
            We Are Here to Listen
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#103c2c] sm:text-4xl">
            Every Great Partnership Begins With a Conversation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-600">
            Whether you are a community member, prospective volunteer,
            development partner, institution or well-wisher, KCIDA welcomes
            your questions, ideas and expressions of interest. Reach out
            and let us explore the possibilities together.
          </p>

        </div>
      </section>

      {/* CONTACT INFORMATION CARDS */}
      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">

          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-green-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eaf5e3] text-[#27743e] transition group-hover:bg-[#27743e] group-hover:text-white">
                  <Icon size={29} />
                </div>

                <h3 className="text-xl font-bold text-[#103c2c]">
                  {item.title}
                </h3>

                <p className="mt-3 break-words text-lg font-semibold text-[#27743e]">
                  {item.detail}
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  target={item.title === "Our Location" ? "_blank" : undefined}
                  rel={item.title === "Our Location" ? "noreferrer" : undefined}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#27743e] transition hover:gap-3"
                >
                  {item.action}
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}

        </div>
      </section>

      {/* CONTACT FORM AND SIDEBAR */}
      <section
        id="contact-form"
        className="bg-[#f3f8f1] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.35fr_0.75fr]">

          {/* FORM */}
          <div className="rounded-3xl bg-white p-7 shadow-lg sm:p-10 lg:p-12">

            <div className="mb-9">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
                Contact Form
              </p>

              <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
                Send Us a Message
              </h2>

              <p className="mt-4 leading-7 text-slate-500">
                Fill in the form below and tell us how we can assist you.
                We look forward to hearing from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#103c2c]"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-slate-200 bg-[#fafcf9] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#65aa34] focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#103c2c]"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-slate-200 bg-[#fafcf9] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#65aa34] focus:ring-4 focus:ring-green-100"
                  />
                </div>

              </div>

              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-[#103c2c]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+256 ..."
                    autoComplete="tel"
                    className="w-full rounded-xl border border-slate-200 bg-[#fafcf9] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#65aa34] focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-[#103c2c]"
                  >
                    Enquiry Type <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-[#fafcf9] px-4 py-4 text-sm text-slate-600 outline-none transition focus:border-[#65aa34] focus:ring-4 focus:ring-green-100"
                  >
                    <option value="" disabled>
                      Select enquiry type
                    </option>

                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#103c2c]"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us more about your enquiry..."
                  className="w-full resize-y rounded-xl border border-slate-200 bg-[#fafcf9] px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#65aa34] focus:ring-4 focus:ring-green-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#08713b] px-8 py-4 font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-[#075b32] sm:w-auto"
              >
                Send Message
                <Send size={18} />
              </button>

              <p className="text-xs leading-6 text-slate-400">
                Submitting this form opens your default email application
                with your message prepared for KCIDA. Your message is not
                automatically transmitted by this website.
              </p>

            </form>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-7">

            <div className="rounded-3xl bg-[#075438] p-8 text-white shadow-lg md:p-10">

              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#a6df69]">
                <MessageCircle size={29} />
              </div>

              <h3 className="text-2xl font-extrabold">
                Let's Talk
              </h3>

              <p className="mt-4 leading-8 text-white/80">
                Have a question about our work, community priorities or
                opportunities to get involved? Our contact channels are
                open for your enquiries.
              </p>

              <div className="mt-8 space-y-6 border-t border-white/15 pt-7">

                <a
                  href="tel:+256772345678"
                  className="flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#a6df69]">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-white/60">Call Us</p>
                    <p className="mt-1 font-semibold">
                      +256 772 345 678
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@kisonsomya.org"
                  className="flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#a6df69]">
                    <Mail size={20} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-white/60">Email Address</p>
                    <p className="mt-1 break-all font-semibold">
                      info@kisonsomya.org
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#a6df69]">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-white/60">Location</p>
                    <p className="mt-1 font-semibold">
                      Kisonsomya, Kikuube, Uganda
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* GET INVOLVED CARD */}
            <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf5e3] text-[#27743e]">
                <HeartHandshake size={29} />
              </div>

              <h3 className="text-xl font-extrabold text-[#103c2c]">
                Want to Get Involved?
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                There are different ways to contribute to community
                development. Explore how you can participate.
              </p>

              <div className="mt-6 space-y-4">

                <Link
                  to="/volunteer-with-us"
                  className="flex items-center justify-between border-b border-slate-100 pb-4 text-sm font-semibold text-[#27743e] hover:text-[#75bd3f]"
                >
                  Volunteer With Us
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/partner-with-us"
                  className="flex items-center justify-between border-b border-slate-100 pb-4 text-sm font-semibold text-[#27743e] hover:text-[#75bd3f]"
                >
                  Partner With Us
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/support-our-work"
                  className="flex items-center justify-between text-sm font-semibold text-[#27743e] hover:text-[#75bd3f]"
                >
                  Support Our Work
                  <ArrowRight size={17} />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#68a83d]">
                Find Us
              </p>

              <h2 className="text-3xl font-extrabold text-[#103c2c] sm:text-4xl">
                Visit Our Community
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                KCIDA is based in Kisonsomya, Kabwoya Sub-county,
                Kikuube District, Uganda.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kisonsomya%2C+Kabwoya%2C+Kikuube%2C+Uganda"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#27743e] px-6 py-3 text-sm font-bold text-[#27743e] transition hover:bg-[#27743e] hover:text-white"
            >
              Get Directions
              <Navigation size={17} />
            </a>

          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f3f8f1] shadow-lg">
            <iframe
              title="KCIDA location in Kisonsomya, Kikuube District"
              src="https://maps.google.com/maps?q=Kisonsomya%2C%20Kabwoya%2C%20Kikuube%2C%20Uganda&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="430"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <p className="mt-4 text-sm text-slate-400">
            Map displays the general Kisonsomya area. Contact KCIDA for
            precise directions to its office or meeting location.
          </p>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#075438] px-6 py-20 lg:px-10">

        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[45px] border-white/5" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border-[40px] border-white/5" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-[#a6df69]">
            <Handshake size={34} />
          </div>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Together, We Can Create Lasting Change.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Whether you want to volunteer, collaborate, support our work
            or simply learn more about KCIDA, we welcome the opportunity
            to connect with you.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:info@kisonsomya.org"
              className="inline-flex items-center gap-3 rounded-full bg-[#8acb4b] px-8 py-4 font-bold text-white transition hover:bg-[#75b83a]"
            >
              Email KCIDA
              <ArrowRight size={19} />
            </a>

            <Link
              to="/our-story"
              className="inline-flex items-center rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#075438]"
            >
              Discover Our Story
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
