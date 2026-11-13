
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import OurTeam from "./pages/OurTeam";
import Governance from "./pages/Governance";
import OurModel from "./pages/OurModel";

import EducationLearning from "./pages/EducationLearning";
import SustainableLivelihoods from "./pages/SustainableLivelihoods";
import YouthEmpowerment from "./pages/YouthEmpowerment";
import CommunityWellbeing from "./pages/CommunityWellbeing";
import EnvironmentResilience from "./pages/EnvironmentResilience";
import OurImpact from "./pages/OurImpact";
import VolunteerWithUs from "./pages/VolunteerWithUs";
import PartnerWithUs from "./pages/PartnerWithUs";
import SupportOurWork from "./pages/SupportOurWork";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import ScrollToTop from "./components/ScrollToTop";


function PagePlaceholder({ title }: { title: string }) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-[#102744]">
        {title}
      </h1>
    </main>
  );
}

function App() {
  return (
    <>

      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* About Us */}
        <Route path="/about" element={<OurStory />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/governance" element={<Governance />} />

        {/* Other Pages */}
        <Route path="/our-model" element={<OurModel />} />
        <Route
          path="/education-learning"
          element={<EducationLearning />}
        />
        <Route path="/sustainable-livelihoods" element={<SustainableLivelihoods />} />
        <Route
          path="/youth-empowerment"
          element={<YouthEmpowerment />}
        />
        <Route
          path="/community-wellbeing"
          element={<CommunityWellbeing />}
        />
        <Route path="/environment-resilience" element={<EnvironmentResilience />} />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route path="/volunteer-with-us" element={<VolunteerWithUs />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
        <Route path="/support-our-work" element={<SupportOurWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/news" element={<PagePlaceholder title="News & Stories" />} />

        {/* Future Pages */}
        <Route path="/our-team" element={<PagePlaceholder title="Our Team" />} />
        <Route path="/governance" element={<PagePlaceholder title="Our Governance" />} />

        {/* 404 */}
        <Route path="*" element={<PagePlaceholder title="Page Not Found" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
