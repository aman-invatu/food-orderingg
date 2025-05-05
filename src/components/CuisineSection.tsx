
import { Link } from 'react-router-dom';

// Cuisine types with descriptions
const cuisines = [
  {
    name: 'African Cuisines',
    description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.',
    icon: '🍲',
    path: '/category/african'
  },
  {
    name: 'American Cuisines',
    description: 'Ultrices neque ornare aenean euismod elementum nisi quis. Ac turpis egestas maecenas pharetra convallis posuere morbi',
    icon: '🧁',
    path: '/category/american'
  },
  {
    name: 'Asian Cuisines',
    description: 'Molestie ac feugiat sed lectus. Eget mi proin sed libero enim. In metus vulputate eu scelerisque felis. Vitae congue eu consequat.',
    icon: '🥢',
    path: '/category/asian'
  },
  {
    name: 'European Cuisines',
    description: 'Facilisis mauris sit amet massa vitae tortor condimentum. Sit amet nisl purus in mollis nunc sed id eu mi bibendum.',
    icon: '👨‍🍳',
    path: '/category/european'
  },
  {
    name: 'Oceanic Cuisines',
    description: 'Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Montes nascetur ridiculus mus mauris egestas integer.',
    icon: '🐠',
    path: '/category/oceanic'
  },
  {
    name: 'Indian Cuisines',
    description: 'Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nec feugiat in fermentum posuere urna nec consequat semper.',
    icon: '🍛',
    path: '/category/indian'
  }
];

export const CuisineSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">International Cuisines</h2>
          <p className="text-gray-600">Incredibly Tasty International Dish</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-12">
          {cuisines.map((cuisine, index) => (
            <div key={cuisine.name} className="relative">
              {/* Alternating Left/Right Alignment */}
              <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-grow ${index % 2 === 0 ? 'text-right pr-4' : 'text-left pl-4'}`}>
                  <h3 className={`text-xl font-bold mb-3 ${index % 3 === 0 ? 'text-yummi-red' : ''}`}>{cuisine.name}</h3>
                  <p className="text-gray-600 text-sm">{cuisine.description}</p>
                </div>
                
                {/* Icon */}
                <div className="flex-shrink-0">
                  <Link to={cuisine.path} className="inline-block text-4xl">{cuisine.icon}</Link>
                </div>
              </div>
              
              {/* Decorative Lines */}
              <div className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'right-0' : 'left-0'} h-px w-20 bg-gray-200`}></div>
            </div>
          ))}
        </div>
        
        {/* Center Image */}
        <div className="flex justify-center mt-10">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=2069" 
              alt="International Cuisine" 
              className="rounded-full h-80 w-80 object-cover border-4 border-yummi-gold"
            />
            <div className="absolute -top-4 -right-4 bg-yummi-red text-white rounded-full h-16 w-16 flex items-center justify-center text-center transform rotate-12">
              <div>
                <div className="text-xs">From</div>
                <div className="font-bold">$12.99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
