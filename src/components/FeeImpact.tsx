
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const FeeImpact = () => {
  const impacts = [
    {
      icon: "📌",
      title: "Higher Fulfillment Fees",
      description: "Eating into your profits, making it harder to scale."
    },
    {
      icon: "📌",
      title: "Increased Storage Costs",
      description: "Long-term storage is more expensive, forcing sellers to optimize inventory."
    },
    {
      icon: "📌",
      title: "Referral Fee Adjustments",
      description: "Amazon is taking a bigger cut from each sale."
    },
    {
      icon: "📌",
      title: "Tighter Profit Margins",
      description: "Sellers need smarter strategies to stay profitable."
    }
  ];

  const solutions = [
    {
      icon: "✅",
      title: "Cost-Optimized PPC Strategies",
      description: "We maximize ROI so you spend less to earn more."
    },
    {
      icon: "✅",
      title: "Smart Inventory Planning",
      description: "Reduce storage fees by optimizing FBA shipments & turnover."
    },
    {
      icon: "✅",
      title: "Profit-Driven Pricing Strategy",
      description: "Ensure you're still competitive without losing margins."
    },
    {
      icon: "✅",
      title: "Listing Optimization",
      description: "Higher conversions mean better organic ranking and lower ad spend."
    },
    {
      icon: "✅",
      title: "Fee Analysis & Cost Cutting",
      description: "We help identify hidden fees and ways to save."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Amazon Fees Are Rising – Here's What It Means for Sellers</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Amazon has been steadily increasing its FBA fees, storage costs, and referral fees, making it more expensive for sellers to maintain profitability. These rising costs are putting pressure on margins, forcing many sellers to either increase prices, reduce inventory, or cut into their profits just to stay competitive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6">How These Fee Increases Affect Sellers:</h3>
            <div className="space-y-4">
              {impacts.map((impact, index) => (
                <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="text-2xl mr-3">{impact.icon}</span>
                  <div>
                    <h4 className="font-semibold text-secondary">{impact.title}</h4>
                    <p className="text-gray-700">{impact.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6">How Ups and Gigs Can Help You Stay Profitable:</h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="text-2xl mr-3">{solution.icon}</span>
                  <div>
                    <h4 className="font-semibold text-secondary">{solution.title}</h4>
                    <p className="text-gray-700">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-accent font-bold flex items-center justify-center">
            <span className="text-2xl mr-2">📈</span>
            Don't let Amazon's rising costs eat into your profits. Let's build a strategy that keeps your business growing despite fee hikes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeeImpact;
