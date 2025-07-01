
const SocialProof = () => {
  const results = [
    {
      metric: "312%",
      description: "Average increase in qualified leads",
      timeframe: "First 90 days"
    },
    {
      metric: "$2.8M",
      description: "Additional revenue generated",
      timeframe: "Last 12 months"
    },
    {
      metric: "47%",
      description: "Reduction in cost per lead",
      timeframe: "Ongoing optimization"
    }
  ];

  const testimonials = [
    {
      quote: "Our lead generation increased by 280% in just two months. The quality of leads has never been better.",
      author: "Sarah Mitchell",
      title: "Broker/Owner",
      company: "Mitchell Real Estate Group"
    },
    {
      quote: "Finally, a marketing partner that understands real estate. Our ROI has doubled since working with them.",
      author: "Michael Chen",
      title: "Managing Director",
      company: "Premier Properties"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Results Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Real Results for Real Estate Professionals
          </h2>
          <p className="text-xl text-stone-600 mb-12">
            Don't take our word for it. Here's what our real estate clients are achieving.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-stone-200">
                <div className="text-5xl font-bold text-black mb-2">
                  {result.metric}
                </div>
                <div className="text-lg font-semibold text-stone-700 mb-2">
                  {result.description}
                </div>
                <div className="text-stone-500 text-sm">
                  {result.timeframe}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-stone-200">
              <div className="mb-6">
                <div className="text-4xl text-stone-300 mb-2">"</div>
                <p className="text-lg text-stone-700 leading-relaxed italic">
                  {testimonial.quote}
                </p>
              </div>
              <div className="border-t border-stone-200 pt-4">
                <div className="font-semibold text-black">{testimonial.author}</div>
                <div className="text-stone-600">{testimonial.title}</div>
                <div className="text-stone-500 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
