
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Pure Ingredients',
    description: 'Vestibulum morbi blandit cursus risus at ultrices mi. Facilisis gravida neque convallis a.',
    icon: '🍅'
  },
  {
    title: 'Sustainability',
    description: 'Laculis eu non diam phasellus. Dictum non consectetur a erat nam at. Quam adipiscing vitae proin sagittis.',
    icon: '🍴'
  },
  {
    title: 'Environmentalism',
    description: 'Bibendum est ultricies integer quis auctor elit sed. Accumsan tortor posuere ac ut consequat semper.',
    icon: '🥣'
  },
  {
    title: 'Formula Transparency',
    description: 'Facilisi nullam vehicula ipsum a. Ornare massa eget egestas purus viverra accumsan in nisl nisi.',
    icon: '📊'
  }
];

export const FeaturesSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">What Makes Our Menus Special?</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1621877849323-487c65c5db60?q=80&w=2070" 
              alt="Food skewers" 
              className="rounded-lg shadow-lg object-cover w-full h-[500px]"
            />
          </div>
          
          {/* Features */}
          <div className="lg:w-1/2 lg:pl-12 space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-white shadow-md rounded-full p-3 text-2xl">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-yummi-red">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
