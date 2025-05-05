
import { Link } from 'react-router-dom';

export const PromoSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=2070" 
              alt="Delicious soup" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
            <p className="text-lg text-gray-600 mb-2">Enjoy Great Recipe</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-yummi-red mb-4">Simple And Delicious Food</h2>
            <p className="text-2xl font-medium mb-8">Flat 20% Discount</p>
            <Link 
              to="/shop" 
              className="inline-block bg-yummi-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
