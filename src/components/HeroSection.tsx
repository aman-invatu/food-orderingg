
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative">
      <div className="bg-yummi-red py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 text-white space-y-6 mb-10 lg:mb-0 animate-fade-in">
            <h2 className="text-xl font-medium">Mega Discounts On</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-yummi-gold">
              Tasty Bites Healthy Foods
            </h1>
            <p className="text-4xl md:text-5xl font-bold">10 - 50% OFF</p>
            <div>
              <Link to="/shop" className="inline-flex items-center bg-white text-yummi-red hover:bg-gray-100 px-6 py-3 rounded font-medium transition-colors duration-300">
                VIEW DISHES
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2 relative z-10 animate-scale-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2070" 
                alt="Delicious food" 
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
              
              <div className="absolute -bottom-10 -right-10 bg-white rounded-full p-4 shadow-lg animate-bounce-y">
                <div className="bg-yummi-gold rounded-full h-28 w-28 flex items-center justify-center text-center">
                  <div>
                    <div className="text-lg font-bold">Tasty Bite</div>
                    <div className="text-sm">Delicious Food</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 bg-white/10 rounded-full h-48 w-48"></div>
          <div className="absolute bottom-12 left-1/4 bg-white/5 rounded-full h-32 w-32"></div>
          <div className="absolute top-1/3 right-12 bg-white/5 rounded-full h-16 w-16"></div>
        </div>
      </div>
      
      <div className="torn-edge"></div>
    </div>
  );
};
