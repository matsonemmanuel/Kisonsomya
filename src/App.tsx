
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import OurTeam from "./pages/OurTeam";
import Governance from "./pages/Governance";

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
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* About Us */}
        <Route path="/about" element={<OurStory />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/governance" element={<Governance />} />

        {/* Other Pages */}
        <Route path="/our-model" element={<PagePlaceholder title="Our Model" />} />
        <Route path="/what-we-do" element={<PagePlaceholder title="What We Do" />} />
        <Route path="/our-impact" element={<PagePlaceholder title="Our Impact" />} />
        <Route path="/get-involved" element={<PagePlaceholder title="Get Involved" />} />
        <Route path="/contact" element={<PagePlaceholder title="Contact Us" />} />
        <Route path="/donate" element={<PagePlaceholder title="Donate" />} />
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
