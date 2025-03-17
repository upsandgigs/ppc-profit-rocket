
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Profit-First Strategy",
      description: "We focus on boosting sales while reducing wasted spend."
    },
    {
      title: "Full-Service PPC Management",
      description: "We handle everything from research to reporting."
    },
    {
      title: "Beyond PPC: Complete Growth System",
      description: "PPC + SEO, conversion optimization & pricing strategies."
    },
    {
      title: "Amazon Marketing Experts",
      description: "We know what works and have a track record of driving results."
    }
  ];

  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Sellers Choose Ups and Gigs for Amazon PPC</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-secondary/50 border-accent/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                    <p className="text-white/80">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Make Your Amazon Ads Work Smarter, Not Harder</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            <span className="text-accent font-semibold">💡</span> Ready to increase sales and scale your business with optimized PPC? Let's talk.
          </p>
          <p className="text-xl">
            <span className="text-accent font-semibold">📩</span> Contact us today! - <a href="mailto:info@upsandgigs.com" className="text-accent hover:underline">info@upsandgigs.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
