
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">RealtyGrow Marketing</h3>
            <p className="text-stone-300 leading-relaxed">
              Specialized digital marketing agency dedicated to scaling real estate businesses 
              through data-driven paid advertising and marketing technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-stone-300">
              <li>Google Ads Management</li>
              <li>Meta Ads Strategy</li>
              <li>Marketing Technology</li>
              <li>Lead Generation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-stone-300">
              <p>hello@realtygrow.com</p>
              <p>(555) 123-4567</p>
              <p>Schedule a free consultation today</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-400">
          <p>&copy; 2024 RealtyGrow Marketing. All rights reserved. Built for real estate professionals who demand results.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
