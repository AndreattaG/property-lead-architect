
const SocialProof = () => {
  const results = [
    {
      metric: "312%",
      description: "Aumento médio em leads qualificados",
      timeframe: "Primeiros 90 dias"
    },
    {
      metric: "R$ 2,8M",
      description: "Receita adicional gerada",
      timeframe: "Últimos 12 meses"
    },
    {
      metric: "47%",
      description: "Redução no custo por lead",
      timeframe: "Otimização contínua"
    }
  ];

  const testimonials = [
    {
      quote: "Nossa geração de leads aumentou 280% em apenas dois meses. A qualidade dos leads nunca foi tão boa.",
      author: "Sarah Mitchell",
      title: "Corretora/Proprietária",
      company: "Mitchell Grupo Imobiliário"
    },
    {
      quote: "Finalmente, um parceiro de marketing que entende o mercado imobiliário. Nosso ROI dobrou desde que começamos a trabalhar com eles.",
      author: "Michael Chen",
      title: "Diretor Geral",
      company: "Premier Properties"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Results Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Resultados Reais para Profissionais Imobiliários
          </h2>
          <p className="text-xl text-stone-600 mb-12">
            Não acredite apenas na nossa palavra. Veja o que nossos clientes imobiliários estão alcançando.
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
