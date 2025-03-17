
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Turn Browsers into Buyers with Amazon PPC That <span className="text-accent">Works</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Maximize Sales. Minimize Wasted Spend. Dominate Amazon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-secondary text-lg px-8 py-6 font-semibold">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/5 text-lg px-8 py-6 font-semibold">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
              alt="Amazon PPC Management" 
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-accent font-bold text-3xl">293%</p>
              <p className="text-secondary text-sm">Revenue Increase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
