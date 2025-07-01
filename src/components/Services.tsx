
const Services = () => {
  const services = [
    {
      title: "Google Ads Management",
      description: "Target high-intent buyers and sellers with precision-crafted search campaigns that deliver qualified leads at scale.",
      features: ["Keyword Research", "Ad Copy Optimization", "Landing Page Testing", "Conversion Tracking"]
    },
    {
      title: "Meta Ads Strategy",
      description: "Leverage Facebook and Instagram's powerful targeting to reach potential clients where they spend their time.",
      features: ["Audience Research", "Creative Development", "Retargeting Campaigns", "Lead Generation"]
    },
    {
      title: "Marketing Technology",
      description: "Implement cutting-edge tools and automation to streamline your lead nurturing and client acquisition process.",
      features: ["CRM Integration", "Lead Scoring", "Email Automation", "Analytics Dashboard"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Specialized Solutions for Real Estate Growth
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            We don't do generic marketing. Every strategy is tailored specifically for the real estate industry, 
            with deep understanding of your unique challenges and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-stone-50 rounded-xl p-8 h-full border border-stone-200 hover:border-stone-300 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-stone-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <span className="text-stone-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
