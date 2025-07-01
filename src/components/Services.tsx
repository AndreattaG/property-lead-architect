
const Services = () => {
  const services = [
    {
      title: "Gestão de Google Ads",
      description: "Alcance compradores e vendedores com alta intenção de compra através de campanhas de busca elaboradas com precisão para gerar leads qualificados em escala.",
      features: ["Pesquisa de Palavras-chave", "Otimização de Anúncios", "Testes de Landing Pages", "Rastreamento de Conversões"]
    },
    {
      title: "Estratégia em Meta Ads",
      description: "Aproveite o poderoso direcionamento do Facebook e Instagram para alcançar clientes em potencial onde eles passam seu tempo.",
      features: ["Pesquisa de Audiência", "Criação de Criativos", "Campanhas de Remarketing", "Geração de Leads"]
    },
    {
      title: "Tecnologia de Marketing",
      description: "Implemente ferramentas de ponta e automação para otimizar seu processo de nutrição de leads e aquisição de clientes.",
      features: ["Integração com CRM", "Pontuação de Leads", "Automação de E-mail", "Dashboard de Analytics"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Soluções Especializadas para Crescimento Imobiliário
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Não fazemos marketing genérico. Cada estratégia é personalizada especificamente para o setor imobiliário, 
            com profundo entendimento dos seus desafios e oportunidades únicos.
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
