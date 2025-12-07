import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import CertificateVerification from "@/components/CertificateVerification";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Courses />
        <Testimonials />
        <CertificateVerification />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
