
import { useState } from 'react';
import { FoodCard } from './FoodCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Sample data for products
const products = [
  {
    id: '1',
    name: 'Salisbury Steak',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070',
    price: 12.99,
    rating: 4,
    reviews: 1,
    category: 'Western Indian'
  },
  {
    id: '2',
    name: 'English Breakfast',
    image: 'https://images.unsplash.com/photo-1533920379810-6bedac961c2a?q=80&w=2070',
    price: 10.99,
    rating: 5,
    reviews: 1,
    category: 'Western Indian'
  },
  {
    id: '3',
    name: 'Buldak',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=2070',
    price: 14.99,
    rating: 4.5,
    reviews: 2,
    category: 'Western Indian'
  },
  {
    id: '4',
    name: 'Creamed Chipped Prawn',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070',
    price: 13.50,
    rating: 5,
    reviews: 1,
    category: 'Seafood'
  },
  {
    id: '5',
    name: 'Mexican Bean Salad',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2068',
    price: 9.70,
    rating: 4,
    reviews: 2,
    category: 'Salad'
  },
  {
    id: '6',
    name: 'Scrambled Eggs',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080',
    price: 8.99,
    rating: 5,
    reviews: 2,
    category: 'Breakfast'
  }
];

export const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('BREAKFAST');
  
  const tabs = ['BREAKFAST', 'LUNCH', 'DINNER'];
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quam pellentesque nec nam aliquam sem et tortor consequat. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 font-medium text-sm ${activeTab === tab 
                  ? 'bg-yummi-red text-white' 
                  : 'bg-yummi-gold hover:bg-opacity-80 text-gray-800'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {products.map((product) => (
            <FoodCard key={product.id} {...product} />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex justify-end space-x-2">
          <button className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
