
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Please fill in all fields",
        description: "All information is required to get started.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch within 24 hours to discuss your real estate marketing goals.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', company: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-stone-50 to-stone-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              Scale Your Real Estate Business with
              <span className="block text-stone-700 mt-2">Data-Driven Marketing</span>
            </h1>
            
            <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
              We help real estate agencies generate qualified leads through strategic paid advertising 
              and cutting-edge marketing technology. Stop guessing, start growing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-stone-700 font-medium">Google Ads Specialists</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-stone-700 font-medium">Meta Ads Experts</span>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-stone-200">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-2">
              Get Your Free Marketing Audit
            </h2>
            <p className="text-stone-600">
              Discover untapped opportunities in your current marketing strategy.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full border-stone-300 focus:border-black focus:ring-black"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                Business Email *
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full border-stone-300 focus:border-black focus:ring-black"
                placeholder="your@realestate.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-stone-700 mb-2">
                Company Name *
              </label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="w-full border-stone-300 focus:border-black focus:ring-black"
                placeholder="Your Real Estate Agency"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-black hover:bg-stone-800 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get My Free Audit
            </Button>
          </form>

          <p className="text-xs text-stone-500 mt-4 text-center">
            No spam. We respect your privacy and will only contact you about your marketing audit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
