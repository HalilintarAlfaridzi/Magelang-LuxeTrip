import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#111827]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
