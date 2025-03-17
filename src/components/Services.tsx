
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: "🎯",
      title: "Sponsored Products",
      description: "Get seen in top search results & product pages."
    },
    {
      icon: "🔰",
      title: "Defensive ASIN Targeting",
      description: "Keep competitors away from your listings."
    },
    {
      icon: "🏆",
      title: "Competitor Brand Targeting",
      description: "Steal market share from competing sellers."
    },
    {
      icon: "📹",
      title: "Amazon Video Ads",
      description: "High-ROI video marketing that captures attention."
    },
    {
      icon: "📢",
      title: "Sponsored Display & Retargeting",
      description: "Convert past visitors into loyal buyers."
    },
    {
      icon: "📊",
      title: "Auto & Manual Campaigns",
      description: "Data-driven testing & smart bid strategies."
    }
  ];

  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">PPC That Fuels Profits, Not Just Clicks</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Smarter Ads. Bigger Results. Higher ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-2">{service.icon}</span>
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Top Amazon sellers know that PPC isn't about traffic—it's about conversions. Our expert-driven approach ensures every ad dollar is spent strategically, bringing in high-intent buyers while cutting down on wasted spend.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
