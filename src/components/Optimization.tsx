
import { CheckCircle } from "lucide-react";

const Optimization = () => {
  const strategies = [
    "Deep Keyword Research – Pinpointing the exact search terms that drive purchases.",
    "Campaign Optimization – Smart bidding, strategic ad structuring, and ongoing adjustments.",
    "Lower ACOS, Higher Profits – We cut unnecessary ad spend and scale what works.",
    "Sales Acceleration – PPC + listing optimization + conversion hacks = revenue growth.",
    "Clear Weekly Reporting – Get insights into performance with transparent tracking.",
    "Impactful Visuals – High-converting creatives that grab attention & boost clicks."
  ];

  const tactics = [
    {
      icon: "🔹",
      title: "Broad Match Targeting",
      description: "Expands reach, discovers new keyword opportunities."
    },
    {
      icon: "🔹",
      title: "Phrase Match Precision",
      description: "Ensures ads show for relevant search intent."
    },
    {
      icon: "🔹",
      title: "Exact Match Bidding",
      description: "Laser-targeted ads for high-converting traffic."
    }
  ];

  const successStories = [
    {
      client: "Stamp Hub",
      result: "293% increase in monthly revenue after campaign optimization."
    },
    {
      client: "Chirp",
      result: "519% sales growth in a highly competitive niche."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How We Optimize Your Amazon Ads for Maximum Sales</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8">
            <ul className="space-y-4">
              {strategies.map((strategy, index) => (
                <li key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="h-6 w-6 text-accent mr-3 shrink-0 mt-1" />
                  <span className="text-gray-800">{strategy}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6">Data-Driven PPC Strategies That Deliver Results</h3>
            <p className="text-gray-700 mb-6">
              We use a proven, numbers-backed approach to fine-tune your Amazon PPC campaigns—no guessing, just measurable growth.
            </p>
            
            <h4 className="text-xl font-bold text-secondary mb-4">Winning PPC Tactics We Deploy</h4>
            <div className="space-y-4 mb-8">
              {tactics.map((tactic, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-2xl mr-3">{tactic.icon}</span>
                  <div>
                    <h5 className="font-semibold text-secondary">{tactic.title}</h5>
                    <p className="text-gray-700">{tactic.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-gray-700 mb-8 italic">
              Every campaign is custom-built to align with your specific business goals.
            </p>
            
            <h4 className="text-xl font-bold text-secondary mb-4">Real Success Stories: Amazon PPC in Action</h4>
            <div className="space-y-4">
              {successStories.map((story, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-2xl mr-3">🚀</span>
                  <p className="text-gray-800">
                    <span className="font-semibold">{story.client}</span> – {story.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Optimization;
