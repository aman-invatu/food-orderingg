
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample gallery items
const galleryItems = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1695653421421-d070d3e2a574?q=80&w=2070',
    title: 'Mexican Wrap',
    category: 'Mexican'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1625864667534-aa5208d45a15?q=80&w=2070',
    title: 'Spicy Rice Bowl',
    category: 'Asian'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2096',
    title: 'Anguilla Marinata',
    category: 'Italian',
    featured: true
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
    title: 'Fine Dining Experience',
    category: 'Restaurant'
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1606851682837-019baf2e8da4?q=80&w=2070',
    title: 'Cooking Class',
    category: 'Events'
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a3479b?q=80&w=2070',
    title: 'Fresh Ingredients',
    category: 'Ingredients'
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=2076',
    title: 'Kitchen Prep',
    category: 'Behind The Scenes'
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?q=80&w=2070',
    title: 'Colorful Citrus',
    category: 'Ingredients'
  }
];

export const GallerySection = () => {
  return (
    <div className="bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Our Gallery</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {galleryItems.map((item) => (
          <div key={item.id} className="relative overflow-hidden group h-72">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {item.featured && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
                <div className="text-center px-6">
                  <p className="font-light mb-2">Amazing Taste</p>
                  <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
                  <Link 
                    to="/gallery" 
                    className="bg-yummi-red hover:bg-red-700 text-white px-6 py-2 rounded transition-colors"
                  >
                    VIEW ALL COLLECTION
                  </Link>
                </div>
              </div>
            )}
            
            {!item.featured && (
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
