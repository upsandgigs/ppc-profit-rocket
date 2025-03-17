
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Boost Your Amazon Sales?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Schedule a free consultation with our Amazon PPC experts and discover how we can help you increase sales and reduce wasted ad spend.
        </p>
        <Button className="bg-accent hover:bg-accent/90 text-secondary text-lg px-8 py-6 font-semibold">
          Get Your Free Strategy Session
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
