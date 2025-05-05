
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Eye, ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface FoodCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  category?: string;
}

export const FoodCard = ({ id, name, image, price, rating, reviews, category }: FoodCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`h-4 w-4 ${i <= rating ? 'text-yummi-gold fill-yummi-gold' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  const handleAddToCart = () => {
    addToCart({ id, name, image, price });
  };
  
  return (
    <div 
      className="food-card bg-white rounded-lg overflow-hidden shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
          />
        </Link>
        
        {/* Action Buttons */}
        {isHovered && (
          <div className="absolute right-2 top-2 flex flex-col space-y-2 animate-fade-in">
            <Link to={`/product/${id}`} className="bg-yummi-red hover:bg-red-700 text-white p-2 rounded">
              <Eye className="h-5 w-5" />
            </Link>
            <button 
              className="bg-yummi-red hover:bg-red-700 text-white p-2 rounded"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button className="bg-yummi-red hover:bg-red-700 text-white p-2 rounded">
              <Heart className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
      
      <div className="p-4 space-y-2">
        <div className="flex items-center">
          {renderStars()}
          <span className="text-sm text-gray-600 ml-2">{reviews} review{reviews !== 1 ? 's' : ''}</span>
        </div>
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-medium text-lg hover:text-yummi-red transition-colors">{name}</h3>
        </Link>
        
        <div className="flex justify-center">
          <div className="border-t border-dashed border-gray-200 w-1/3 my-2"></div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">${price.toFixed(2)}</span>
          <button 
            className="bg-yummi-red text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
