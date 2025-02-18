import React, { useState } from "react";

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const pricingPlans = [
    {
      name: "Basic",
      price: "$10/month",
      features: [
        "Access to basic practice questions",
        "Limited mock interviews",
        "Community forum access",
      ],
      isBest: false,
    },
    {
      name: "Premium",
      price: "$25/month",
      features: [
        "Unlimited practice questions",
        "Unlimited mock interviews",
        "Personalized feedback",
        "Expert tips and strategies",
        "Priority support",
      ],
      isBest: true,
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      features: [
        "Customized training programs",
        "Dedicated account manager",
        "API access",
        "On-site workshops",
      ],
      isBest: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 pt-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-4 rounded-lg shadow-md transition-transform duration-300 w-72 md:w-80 lg:w-90 min-h-[20rem] ${ // Adjusted width and min-height
                hoveredPlan === index ? "scale-105" : ""
              } ${plan.isBest ? "border-4 border-[#66b3ff]" : ""}`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
              <p className="text-lg mb-4">{plan.price}</p>
              <ul className="list-disc pl-6 text-base">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              {plan.name === "Enterprise" ? (
                <button className="mt-6 bg-[#66b3ff] text-white px-6 py-3 rounded-lg hover:bg-[#5299e6] transition-all">
                  Contact Us
                </button>
              ) : (
                <button className="mt-6 bg-[#66b3ff] text-white px-6 py-3 rounded-lg hover:bg-[#5299e6] transition-all">
                  Get Started
                </button>
              )}

              {/* "Best Value" Badge (Conditional) */}
              {plan.isBest && (
                <div className="absolute top-4 right-4 bg-[#66b3ff] text-white px-3 py-1 rounded-md text-sm font-semibold">
                  Best Value
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;