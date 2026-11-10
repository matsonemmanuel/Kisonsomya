
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function PagePlaceholder({ title }: { title: string }) {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#102744]">
          {title}
        </h1>
        <p className="mt-3 text-gray-600">
          Kisonsomya Community Development
        </p>
      </div>
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<PagePlaceholder title="Home" />} />
        <Route path="/about" element={<PagePlaceholder title="About Us" />} />
        <Route path="/our-model" element={<PagePlaceholder title="Our Model" />} />
        <Route path="/what-we-do" element={<PagePlaceholder title="What We Do" />} />
        <Route path="/our-impact" element={<PagePlaceholder title="Our Impact" />} />
        <Route path="/get-involved" element={<PagePlaceholder title="Get Involved" />} />
        <Route path="/contact" element={<PagePlaceholder title="Contact Us" />} />
        <Route path="/donate" element={<PagePlaceholder title="Donate" />} />
        <Route path="*" element={<PagePlaceholder title="Page Not Found" />} />
      </Routes>
    </>
  );
}

export default App;
