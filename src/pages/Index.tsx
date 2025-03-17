
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeeImpact from "@/components/FeeImpact";
import Optimization from "@/components/Optimization";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>UpsAndGigs - Amazon PPC That Works | Turn Browsers into Buyers</title>
        <meta name="description" content="Maximize sales and minimize wasted ad spend with our expert Amazon PPC management services. Get more conversions at lower costs." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <Services />
          <FeeImpact />
          <Optimization />
          <WhyChooseUs />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
