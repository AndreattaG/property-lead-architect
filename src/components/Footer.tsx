
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">RealtyGrow Marketing</h3>
            <p className="text-stone-300 leading-relaxed">
              Agência de marketing digital especializada em escalar negócios imobiliários 
              através de tráfego pago orientado por dados e tecnologia de marketing.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-stone-300">
              <li>Gestão de Google Ads</li>
              <li>Estratégia em Meta Ads</li>
              <li>Tecnologia de Marketing</li>
              <li>Geração de Leads</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-stone-300">
              <p>contato@realtygrow.com.br</p>
              <p>(11) 9 9999-9999</p>
              <p>Agende uma consultoria gratuita hoje</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-400">
          <p>&copy; 2024 RealtyGrow Marketing. Todos os direitos reservados. Feito para profissionais imobiliários que exigem resultados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
