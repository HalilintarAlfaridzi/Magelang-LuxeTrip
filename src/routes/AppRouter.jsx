import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper.jsx";
import Home from "../pages/Home.jsx";
import Destinations from "../pages/Destinations.jsx";
import DestinationDetail from "../pages/DestinationDetail.jsx";
import Packages from "../pages/Packages.jsx";
import PackageDetail from "../pages/PackageDetail.jsx";
import TravelTips from "../pages/TravelTips.jsx";
import BlogDetail from "../pages/BlogDetail.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import FAQ from "../pages/FAQ.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

const baseUrl = import.meta.env.BASE_URL || "/";
const routerBasename = baseUrl.startsWith("/") && baseUrl !== "/" ? baseUrl.replace(/\/$/, "") : undefined;

export default function AppRouter() {
  return (
    <BrowserRouter basename={routerBasename}>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:slug" element={<PackageDetail />} />
          <Route path="/travel-tips" element={<TravelTips />} />
          <Route path="/travel-tips/:slug" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}
